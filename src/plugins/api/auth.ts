import { AxiosInstance } from 'axios'
import jwtDecode from 'jwt-decode'
import { ref, watch } from 'vue'

type JwtResponse = {
  jwt_token: string
  jwt_expires_in: string
  refresh_token?: string
}

type JwtClaims = {
  'x-hasura-user-id'?: string
  'x-hasura-allowed-roles'?: string[]
  'x-hasura-default-role'?: string
}

const claimsNamespace = 'https://hasura.io/jwt/claims'

export default class Auth {
  private _jwtExpiresIn = 900000
  private _refreshInterval?: number

  readonly claims = ref<JwtClaims>({})
  readonly token = ref<string | null>(null)
  readonly isAuth = ref(false)

  constructor(private _axios: AxiosInstance, private _useCookie: boolean) {
    watch(this.token, value => {
      this.isAuth.value = value !== null
    })

    watch(this.isAuth, value => {
      if (value) {
        if (this._refreshInterval) window.clearInterval(this._refreshInterval)
        this._refreshInterval = window.setInterval(async () => {
          if (this.token) {
            try {
              // silent refresh token
              await this.refreshToken()
              // eslint-disable-next-line no-empty
            } catch {}
          }
        }, this._jwtExpiresIn - 100000)
      } else {
        if (this._refreshInterval) window.clearInterval(this._refreshInterval)
      }
    })
  }

  private _onLogout() {
    this.token.value = null
    this.claims.value = {}
    localStorage.removeItem('refresh_token')
  }

  private _parseJwtResponse({
    jwt_token,
    jwt_expires_in,
    refresh_token
  }: JwtResponse) {
    try {
      this.token.value = jwt_token
      this._jwtExpiresIn = parseInt(jwt_expires_in)

      const decoded: {
        [claimsNamespace]: JwtClaims
      } = jwtDecode(jwt_token)

      if (refresh_token) {
        localStorage.setItem('refresh_token', refresh_token)
      }

      this.claims.value = decoded[claimsNamespace]
      // this._onLogin()
    } catch (e) {
      this._onLogout()
      throw e
    }
  }

  getClaim(key: keyof JwtClaims) {
    return this.claims.value[key]
  }

  get userId() {
    return this.token.value !== null
      ? (this.getClaim('x-hasura-user-id') as string)
      : null
  }

  async register(email: string, password: string) {
    await this._axios.post('/auth/register', {
      email,
      password
    })
  }

  async login(email: string, password: string) {
    const { data } = await this._axios.post<JwtResponse>('/auth/login', {
      email,
      password,
      cookie: this._useCookie
    })
    this._parseJwtResponse(data)
  }

  async logout() {
    this._onLogout()
    await this._axios.post('/auth/logout')
  }

  async refreshToken() {
    try {
      const params: { cookie: boolean; refresh_token?: string | null } = {
        cookie: this._useCookie
      }

      if (!this._useCookie && localStorage.getItem('refresh_token')) {
        params.refresh_token = localStorage.getItem('refresh_token')
      }

      const { data } = await this._axios.get<JwtResponse>(
        '/auth/token/refresh',
        {
          params
        }
      )
      this._parseJwtResponse(data)
    } catch (err) {
      this._onLogout()
      throw err
    }
  }
}
