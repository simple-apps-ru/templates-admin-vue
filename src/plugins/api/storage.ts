import { AxiosInstance } from 'axios'

export default class Storage {
  constructor(private _axios: AxiosInstance) {}

  async upload(path: string, file: File | Blob) {
    const formData = new FormData()
    formData.append('file', file)

    return await this._axios.post<UploadedFile>(
      `/storage/o/${path}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
  }

  async delete(path: string) {
    return await this._axios.delete(`/storage/o/${path}`)
  }

  getUrl(path: string) {
    return `${process.env.VUE_APP_BASE_URL}/storage/o/${path}`
  }
}

export interface UploadedFile {
  key: string
  AcceptRanges: string
  LastModified: string
  ContentLength: number
  ETag: string
  ContentType: string
  Metadata: {
    token: string
  }
}
