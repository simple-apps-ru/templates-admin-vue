export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  citext: string
  jsonb: { [key: string]: any } | null
  timestamptz: Date
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
  uuid: string
}

/**
 * Доступ
 *
 *
 * columns and relationships of "access"
 */
export type Access = {
  __typename?: 'access'
  id: Scalars['String']
  name: Scalars['String']
}

/** aggregated selection of "access" */
export type Access_Aggregate = {
  __typename?: 'access_aggregate'
  aggregate?: Maybe<Access_Aggregate_Fields>
  nodes: Array<Access>
}

/** aggregate fields of "access" */
export type Access_Aggregate_Fields = {
  __typename?: 'access_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Access_Max_Fields>
  min?: Maybe<Access_Min_Fields>
}

/** aggregate fields of "access" */
export type Access_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Access_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "access" */
export type Access_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Access_Max_Order_By>
  min?: Maybe<Access_Min_Order_By>
}

/** input type for inserting array relation for remote table "access" */
export type Access_Arr_Rel_Insert_Input = {
  data: Array<Access_Insert_Input>
  on_conflict?: Maybe<Access_On_Conflict>
}

/** Boolean expression to filter rows from the table "access". All fields are combined with a logical 'AND'. */
export type Access_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Access_Bool_Exp>>>
  _not?: Maybe<Access_Bool_Exp>
  _or?: Maybe<Array<Maybe<Access_Bool_Exp>>>
  id?: Maybe<String_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "access" */
export enum Access_Constraint {
  /** unique or primary key constraint */
  PermissionCategoryPkey = 'permission_category_pkey'
}

/** input type for inserting data into table "access" */
export type Access_Insert_Input = {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Access_Max_Fields = {
  __typename?: 'access_max_fields'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "access" */
export type Access_Max_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Access_Min_Fields = {
  __typename?: 'access_min_fields'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "access" */
export type Access_Min_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** response of any mutation on the table "access" */
export type Access_Mutation_Response = {
  __typename?: 'access_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Access>
}

/** input type for inserting object relation for remote table "access" */
export type Access_Obj_Rel_Insert_Input = {
  data: Access_Insert_Input
  on_conflict?: Maybe<Access_On_Conflict>
}

/** on conflict condition type for table "access" */
export type Access_On_Conflict = {
  constraint: Access_Constraint
  update_columns: Array<Access_Update_Column>
  where?: Maybe<Access_Bool_Exp>
}

/** ordering options when selecting data from "access" */
export type Access_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** primary key columns input for table: "access" */
export type Access_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "access" */
export enum Access_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "access" */
export type Access_Set_Input = {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** update columns of table "access" */
export enum Access_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/**
 * Типы статей
 *
 *
 * columns and relationships of "article_type"
 */
export type Article_Type = {
  __typename?: 'article_type'
  /** An array relationship */
  articles: Array<Articles>
  /** An aggregated array relationship */
  articles_aggregate: Articles_Aggregate
  name: Scalars['String']
  type: Scalars['String']
}

/**
 * Типы статей
 *
 *
 * columns and relationships of "article_type"
 */
export type Article_TypeArticlesArgs = {
  distinct_on?: Maybe<Array<Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Order_By>>
  where?: Maybe<Articles_Bool_Exp>
}

/**
 * Типы статей
 *
 *
 * columns and relationships of "article_type"
 */
export type Article_TypeArticles_AggregateArgs = {
  distinct_on?: Maybe<Array<Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Order_By>>
  where?: Maybe<Articles_Bool_Exp>
}

/** aggregated selection of "article_type" */
export type Article_Type_Aggregate = {
  __typename?: 'article_type_aggregate'
  aggregate?: Maybe<Article_Type_Aggregate_Fields>
  nodes: Array<Article_Type>
}

/** aggregate fields of "article_type" */
export type Article_Type_Aggregate_Fields = {
  __typename?: 'article_type_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Article_Type_Max_Fields>
  min?: Maybe<Article_Type_Min_Fields>
}

/** aggregate fields of "article_type" */
export type Article_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Article_Type_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "article_type" */
export type Article_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Article_Type_Max_Order_By>
  min?: Maybe<Article_Type_Min_Order_By>
}

/** input type for inserting array relation for remote table "article_type" */
export type Article_Type_Arr_Rel_Insert_Input = {
  data: Array<Article_Type_Insert_Input>
  on_conflict?: Maybe<Article_Type_On_Conflict>
}

/** Boolean expression to filter rows from the table "article_type". All fields are combined with a logical 'AND'. */
export type Article_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Article_Type_Bool_Exp>>>
  _not?: Maybe<Article_Type_Bool_Exp>
  _or?: Maybe<Array<Maybe<Article_Type_Bool_Exp>>>
  articles?: Maybe<Articles_Bool_Exp>
  name?: Maybe<String_Comparison_Exp>
  type?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "article_type" */
export enum Article_Type_Constraint {
  /** unique or primary key constraint */
  ArticleTypePkey = 'article_type_pkey'
}

export enum Article_Type_Enum {
  /** Документ Google */
  GoogleDocument = 'GOOGLE_DOCUMENT',
  /** Текстовая статья */
  Text = 'TEXT'
}

/** expression to compare columns of type article_type_enum. All fields are combined with logical 'AND'. */
export type Article_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Article_Type_Enum>
  _in?: Maybe<Array<Article_Type_Enum>>
  _is_null?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Article_Type_Enum>
  _nin?: Maybe<Array<Article_Type_Enum>>
}

/** input type for inserting data into table "article_type" */
export type Article_Type_Insert_Input = {
  articles?: Maybe<Articles_Arr_Rel_Insert_Input>
  name?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Article_Type_Max_Fields = {
  __typename?: 'article_type_max_fields'
  name?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "article_type" */
export type Article_Type_Max_Order_By = {
  name?: Maybe<Order_By>
  type?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Article_Type_Min_Fields = {
  __typename?: 'article_type_min_fields'
  name?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "article_type" */
export type Article_Type_Min_Order_By = {
  name?: Maybe<Order_By>
  type?: Maybe<Order_By>
}

/** response of any mutation on the table "article_type" */
export type Article_Type_Mutation_Response = {
  __typename?: 'article_type_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Article_Type>
}

/** input type for inserting object relation for remote table "article_type" */
export type Article_Type_Obj_Rel_Insert_Input = {
  data: Article_Type_Insert_Input
  on_conflict?: Maybe<Article_Type_On_Conflict>
}

/** on conflict condition type for table "article_type" */
export type Article_Type_On_Conflict = {
  constraint: Article_Type_Constraint
  update_columns: Array<Article_Type_Update_Column>
  where?: Maybe<Article_Type_Bool_Exp>
}

/** ordering options when selecting data from "article_type" */
export type Article_Type_Order_By = {
  articles_aggregate?: Maybe<Articles_Aggregate_Order_By>
  name?: Maybe<Order_By>
  type?: Maybe<Order_By>
}

/** primary key columns input for table: "article_type" */
export type Article_Type_Pk_Columns_Input = {
  type: Scalars['String']
}

/** select columns of table "article_type" */
export enum Article_Type_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "article_type" */
export type Article_Type_Set_Input = {
  name?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** update columns of table "article_type" */
export enum Article_Type_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/**
 * Статьи
 *
 *
 * columns and relationships of "articles"
 */
export type Articles = {
  __typename?: 'articles'
  /** An object relationship */
  article_type: Article_Type
  /** An object relationship */
  base: Bases
  base_id: Scalars['uuid']
  /** An object relationship */
  category?: Maybe<Categories_Of_Articles>
  category_id?: Maybe<Scalars['uuid']>
  /** An array relationship */
  comments: Array<Comments>
  /** An aggregated array relationship */
  comments_aggregate: Comments_Aggregate
  content?: Maybe<Scalars['String']>
  created_at: Scalars['timestamptz']
  deleted_at?: Maybe<Scalars['timestamptz']>
  external_url?: Maybe<Scalars['String']>
  /** An array relationship */
  favorites: Array<Favorites>
  /** An aggregated array relationship */
  favorites_aggregate: Favorites_Aggregate
  id: Scalars['uuid']
  name: Scalars['String']
  order: Scalars['Int']
  original_content?: Maybe<Scalars['String']>
  /** An object relationship */
  owner: Users
  owner_id: Scalars['uuid']
  /** An array relationship */
  read: Array<Users_Read_Articles>
  /** An aggregated array relationship */
  read_aggregate: Users_Read_Articles_Aggregate
  /** An array relationship */
  tags: Array<Articles_Tags>
  /** An aggregated array relationship */
  tags_aggregate: Articles_Tags_Aggregate
  type: Article_Type_Enum
  updated_at: Scalars['timestamptz']
  use_editor: Scalars['Boolean']
}

/**
 * Статьи
 *
 *
 * columns and relationships of "articles"
 */
export type ArticlesCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/**
 * Статьи
 *
 *
 * columns and relationships of "articles"
 */
export type ArticlesComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/**
 * Статьи
 *
 *
 * columns and relationships of "articles"
 */
export type ArticlesFavoritesArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Favorites_Order_By>>
  where?: Maybe<Favorites_Bool_Exp>
}

/**
 * Статьи
 *
 *
 * columns and relationships of "articles"
 */
export type ArticlesFavorites_AggregateArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Favorites_Order_By>>
  where?: Maybe<Favorites_Bool_Exp>
}

/**
 * Статьи
 *
 *
 * columns and relationships of "articles"
 */
export type ArticlesReadArgs = {
  distinct_on?: Maybe<Array<Users_Read_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Read_Articles_Order_By>>
  where?: Maybe<Users_Read_Articles_Bool_Exp>
}

/**
 * Статьи
 *
 *
 * columns and relationships of "articles"
 */
export type ArticlesRead_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Read_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Read_Articles_Order_By>>
  where?: Maybe<Users_Read_Articles_Bool_Exp>
}

/**
 * Статьи
 *
 *
 * columns and relationships of "articles"
 */
export type ArticlesTagsArgs = {
  distinct_on?: Maybe<Array<Articles_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Tags_Order_By>>
  where?: Maybe<Articles_Tags_Bool_Exp>
}

/**
 * Статьи
 *
 *
 * columns and relationships of "articles"
 */
export type ArticlesTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Articles_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Tags_Order_By>>
  where?: Maybe<Articles_Tags_Bool_Exp>
}

/** aggregated selection of "articles" */
export type Articles_Aggregate = {
  __typename?: 'articles_aggregate'
  aggregate?: Maybe<Articles_Aggregate_Fields>
  nodes: Array<Articles>
}

/** aggregate fields of "articles" */
export type Articles_Aggregate_Fields = {
  __typename?: 'articles_aggregate_fields'
  avg?: Maybe<Articles_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Articles_Max_Fields>
  min?: Maybe<Articles_Min_Fields>
  stddev?: Maybe<Articles_Stddev_Fields>
  stddev_pop?: Maybe<Articles_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Articles_Stddev_Samp_Fields>
  sum?: Maybe<Articles_Sum_Fields>
  var_pop?: Maybe<Articles_Var_Pop_Fields>
  var_samp?: Maybe<Articles_Var_Samp_Fields>
  variance?: Maybe<Articles_Variance_Fields>
}

/** aggregate fields of "articles" */
export type Articles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Articles_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "articles" */
export type Articles_Aggregate_Order_By = {
  avg?: Maybe<Articles_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Articles_Max_Order_By>
  min?: Maybe<Articles_Min_Order_By>
  stddev?: Maybe<Articles_Stddev_Order_By>
  stddev_pop?: Maybe<Articles_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Articles_Stddev_Samp_Order_By>
  sum?: Maybe<Articles_Sum_Order_By>
  var_pop?: Maybe<Articles_Var_Pop_Order_By>
  var_samp?: Maybe<Articles_Var_Samp_Order_By>
  variance?: Maybe<Articles_Variance_Order_By>
}

/** input type for inserting array relation for remote table "articles" */
export type Articles_Arr_Rel_Insert_Input = {
  data: Array<Articles_Insert_Input>
  on_conflict?: Maybe<Articles_On_Conflict>
}

/** aggregate avg on columns */
export type Articles_Avg_Fields = {
  __typename?: 'articles_avg_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "articles" */
export type Articles_Avg_Order_By = {
  order?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "articles". All fields are combined with a logical 'AND'. */
export type Articles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Articles_Bool_Exp>>>
  _not?: Maybe<Articles_Bool_Exp>
  _or?: Maybe<Array<Maybe<Articles_Bool_Exp>>>
  article_type?: Maybe<Article_Type_Bool_Exp>
  base?: Maybe<Bases_Bool_Exp>
  base_id?: Maybe<Uuid_Comparison_Exp>
  category?: Maybe<Categories_Of_Articles_Bool_Exp>
  category_id?: Maybe<Uuid_Comparison_Exp>
  comments?: Maybe<Comments_Bool_Exp>
  content?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>
  external_url?: Maybe<String_Comparison_Exp>
  favorites?: Maybe<Favorites_Bool_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  order?: Maybe<Int_Comparison_Exp>
  original_content?: Maybe<String_Comparison_Exp>
  owner?: Maybe<Users_Bool_Exp>
  owner_id?: Maybe<Uuid_Comparison_Exp>
  read?: Maybe<Users_Read_Articles_Bool_Exp>
  tags?: Maybe<Articles_Tags_Bool_Exp>
  type?: Maybe<Article_Type_Enum_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  use_editor?: Maybe<Boolean_Comparison_Exp>
}

/** unique or primary key constraints on table "articles" */
export enum Articles_Constraint {
  /** unique or primary key constraint */
  ArticlesPkey = 'articles_pkey'
}

/** input type for incrementing integer column in table "articles" */
export type Articles_Inc_Input = {
  order?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "articles" */
export type Articles_Insert_Input = {
  article_type?: Maybe<Article_Type_Obj_Rel_Insert_Input>
  base?: Maybe<Bases_Obj_Rel_Insert_Input>
  base_id?: Maybe<Scalars['uuid']>
  category?: Maybe<Categories_Of_Articles_Obj_Rel_Insert_Input>
  category_id?: Maybe<Scalars['uuid']>
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  deleted_at?: Maybe<Scalars['timestamptz']>
  external_url?: Maybe<Scalars['String']>
  favorites?: Maybe<Favorites_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  original_content?: Maybe<Scalars['String']>
  owner?: Maybe<Users_Obj_Rel_Insert_Input>
  owner_id?: Maybe<Scalars['uuid']>
  read?: Maybe<Users_Read_Articles_Arr_Rel_Insert_Input>
  tags?: Maybe<Articles_Tags_Arr_Rel_Insert_Input>
  type?: Maybe<Article_Type_Enum>
  updated_at?: Maybe<Scalars['timestamptz']>
  use_editor?: Maybe<Scalars['Boolean']>
}

/** aggregate max on columns */
export type Articles_Max_Fields = {
  __typename?: 'articles_max_fields'
  base_id?: Maybe<Scalars['uuid']>
  category_id?: Maybe<Scalars['uuid']>
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  deleted_at?: Maybe<Scalars['timestamptz']>
  external_url?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  original_content?: Maybe<Scalars['String']>
  owner_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "articles" */
export type Articles_Max_Order_By = {
  base_id?: Maybe<Order_By>
  category_id?: Maybe<Order_By>
  content?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  deleted_at?: Maybe<Order_By>
  external_url?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  original_content?: Maybe<Order_By>
  owner_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Articles_Min_Fields = {
  __typename?: 'articles_min_fields'
  base_id?: Maybe<Scalars['uuid']>
  category_id?: Maybe<Scalars['uuid']>
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  deleted_at?: Maybe<Scalars['timestamptz']>
  external_url?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  original_content?: Maybe<Scalars['String']>
  owner_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "articles" */
export type Articles_Min_Order_By = {
  base_id?: Maybe<Order_By>
  category_id?: Maybe<Order_By>
  content?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  deleted_at?: Maybe<Order_By>
  external_url?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  original_content?: Maybe<Order_By>
  owner_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "articles" */
export type Articles_Mutation_Response = {
  __typename?: 'articles_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Articles>
}

/** input type for inserting object relation for remote table "articles" */
export type Articles_Obj_Rel_Insert_Input = {
  data: Articles_Insert_Input
  on_conflict?: Maybe<Articles_On_Conflict>
}

/** on conflict condition type for table "articles" */
export type Articles_On_Conflict = {
  constraint: Articles_Constraint
  update_columns: Array<Articles_Update_Column>
  where?: Maybe<Articles_Bool_Exp>
}

/** ordering options when selecting data from "articles" */
export type Articles_Order_By = {
  article_type?: Maybe<Article_Type_Order_By>
  base?: Maybe<Bases_Order_By>
  base_id?: Maybe<Order_By>
  category?: Maybe<Categories_Of_Articles_Order_By>
  category_id?: Maybe<Order_By>
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>
  content?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  deleted_at?: Maybe<Order_By>
  external_url?: Maybe<Order_By>
  favorites_aggregate?: Maybe<Favorites_Aggregate_Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  original_content?: Maybe<Order_By>
  owner?: Maybe<Users_Order_By>
  owner_id?: Maybe<Order_By>
  read_aggregate?: Maybe<Users_Read_Articles_Aggregate_Order_By>
  tags_aggregate?: Maybe<Articles_Tags_Aggregate_Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  use_editor?: Maybe<Order_By>
}

/** primary key columns input for table: "articles" */
export type Articles_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "articles" */
export enum Articles_Select_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  ExternalUrl = 'external_url',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  OriginalContent = 'original_content',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseEditor = 'use_editor'
}

/** input type for updating data in table "articles" */
export type Articles_Set_Input = {
  base_id?: Maybe<Scalars['uuid']>
  category_id?: Maybe<Scalars['uuid']>
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  deleted_at?: Maybe<Scalars['timestamptz']>
  external_url?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  original_content?: Maybe<Scalars['String']>
  owner_id?: Maybe<Scalars['uuid']>
  type?: Maybe<Article_Type_Enum>
  updated_at?: Maybe<Scalars['timestamptz']>
  use_editor?: Maybe<Scalars['Boolean']>
}

/** aggregate stddev on columns */
export type Articles_Stddev_Fields = {
  __typename?: 'articles_stddev_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "articles" */
export type Articles_Stddev_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Articles_Stddev_Pop_Fields = {
  __typename?: 'articles_stddev_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "articles" */
export type Articles_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Articles_Stddev_Samp_Fields = {
  __typename?: 'articles_stddev_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "articles" */
export type Articles_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Articles_Sum_Fields = {
  __typename?: 'articles_sum_fields'
  order?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "articles" */
export type Articles_Sum_Order_By = {
  order?: Maybe<Order_By>
}

/**
 * Теги статей
 *
 *
 * columns and relationships of "articles_tags"
 */
export type Articles_Tags = {
  __typename?: 'articles_tags'
  /** An object relationship */
  article: Articles
  article_id: Scalars['uuid']
  tag: Scalars['String']
  /** An object relationship */
  tag_item: Tags
}

/** aggregated selection of "articles_tags" */
export type Articles_Tags_Aggregate = {
  __typename?: 'articles_tags_aggregate'
  aggregate?: Maybe<Articles_Tags_Aggregate_Fields>
  nodes: Array<Articles_Tags>
}

/** aggregate fields of "articles_tags" */
export type Articles_Tags_Aggregate_Fields = {
  __typename?: 'articles_tags_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Articles_Tags_Max_Fields>
  min?: Maybe<Articles_Tags_Min_Fields>
}

/** aggregate fields of "articles_tags" */
export type Articles_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Articles_Tags_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "articles_tags" */
export type Articles_Tags_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Articles_Tags_Max_Order_By>
  min?: Maybe<Articles_Tags_Min_Order_By>
}

/** input type for inserting array relation for remote table "articles_tags" */
export type Articles_Tags_Arr_Rel_Insert_Input = {
  data: Array<Articles_Tags_Insert_Input>
  on_conflict?: Maybe<Articles_Tags_On_Conflict>
}

/** Boolean expression to filter rows from the table "articles_tags". All fields are combined with a logical 'AND'. */
export type Articles_Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Articles_Tags_Bool_Exp>>>
  _not?: Maybe<Articles_Tags_Bool_Exp>
  _or?: Maybe<Array<Maybe<Articles_Tags_Bool_Exp>>>
  article?: Maybe<Articles_Bool_Exp>
  article_id?: Maybe<Uuid_Comparison_Exp>
  tag?: Maybe<String_Comparison_Exp>
  tag_item?: Maybe<Tags_Bool_Exp>
}

/** unique or primary key constraints on table "articles_tags" */
export enum Articles_Tags_Constraint {
  /** unique or primary key constraint */
  ArticlesTagsPkey = 'articles_tags_pkey'
}

/** input type for inserting data into table "articles_tags" */
export type Articles_Tags_Insert_Input = {
  article?: Maybe<Articles_Obj_Rel_Insert_Input>
  article_id?: Maybe<Scalars['uuid']>
  tag?: Maybe<Scalars['String']>
  tag_item?: Maybe<Tags_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Articles_Tags_Max_Fields = {
  __typename?: 'articles_tags_max_fields'
  article_id?: Maybe<Scalars['uuid']>
  tag?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "articles_tags" */
export type Articles_Tags_Max_Order_By = {
  article_id?: Maybe<Order_By>
  tag?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Articles_Tags_Min_Fields = {
  __typename?: 'articles_tags_min_fields'
  article_id?: Maybe<Scalars['uuid']>
  tag?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "articles_tags" */
export type Articles_Tags_Min_Order_By = {
  article_id?: Maybe<Order_By>
  tag?: Maybe<Order_By>
}

/** response of any mutation on the table "articles_tags" */
export type Articles_Tags_Mutation_Response = {
  __typename?: 'articles_tags_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Articles_Tags>
}

/** input type for inserting object relation for remote table "articles_tags" */
export type Articles_Tags_Obj_Rel_Insert_Input = {
  data: Articles_Tags_Insert_Input
  on_conflict?: Maybe<Articles_Tags_On_Conflict>
}

/** on conflict condition type for table "articles_tags" */
export type Articles_Tags_On_Conflict = {
  constraint: Articles_Tags_Constraint
  update_columns: Array<Articles_Tags_Update_Column>
  where?: Maybe<Articles_Tags_Bool_Exp>
}

/** ordering options when selecting data from "articles_tags" */
export type Articles_Tags_Order_By = {
  article?: Maybe<Articles_Order_By>
  article_id?: Maybe<Order_By>
  tag?: Maybe<Order_By>
  tag_item?: Maybe<Tags_Order_By>
}

/** primary key columns input for table: "articles_tags" */
export type Articles_Tags_Pk_Columns_Input = {
  article_id: Scalars['uuid']
  tag: Scalars['String']
}

/** select columns of table "articles_tags" */
export enum Articles_Tags_Select_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  Tag = 'tag'
}

/** input type for updating data in table "articles_tags" */
export type Articles_Tags_Set_Input = {
  article_id?: Maybe<Scalars['uuid']>
  tag?: Maybe<Scalars['String']>
}

/** update columns of table "articles_tags" */
export enum Articles_Tags_Update_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  Tag = 'tag'
}

/** update columns of table "articles" */
export enum Articles_Update_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  ExternalUrl = 'external_url',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  OriginalContent = 'original_content',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseEditor = 'use_editor'
}

/** aggregate var_pop on columns */
export type Articles_Var_Pop_Fields = {
  __typename?: 'articles_var_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "articles" */
export type Articles_Var_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Articles_Var_Samp_Fields = {
  __typename?: 'articles_var_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "articles" */
export type Articles_Var_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Articles_Variance_Fields = {
  __typename?: 'articles_variance_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "articles" */
export type Articles_Variance_Order_By = {
  order?: Maybe<Order_By>
}

/** columns and relationships of "auth.account_providers" */
export type Auth_Account_Providers = {
  __typename?: 'auth_account_providers'
  /** An object relationship */
  account: Auth_Accounts
  account_id: Scalars['uuid']
  auth_provider: Scalars['String']
  auth_provider_unique_id: Scalars['String']
  created_at: Scalars['timestamptz']
  id: Scalars['uuid']
  /** An object relationship */
  provider: Auth_Providers
  updated_at: Scalars['timestamptz']
}

/** aggregated selection of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate = {
  __typename?: 'auth_account_providers_aggregate'
  aggregate?: Maybe<Auth_Account_Providers_Aggregate_Fields>
  nodes: Array<Auth_Account_Providers>
}

/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Fields = {
  __typename?: 'auth_account_providers_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Auth_Account_Providers_Max_Fields>
  min?: Maybe<Auth_Account_Providers_Min_Fields>
}

/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Account_Providers_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Auth_Account_Providers_Max_Order_By>
  min?: Maybe<Auth_Account_Providers_Min_Order_By>
}

/** input type for inserting array relation for remote table "auth.account_providers" */
export type Auth_Account_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Providers_Insert_Input>
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.account_providers". All fields are combined with a logical 'AND'. */
export type Auth_Account_Providers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Account_Providers_Bool_Exp>>>
  _not?: Maybe<Auth_Account_Providers_Bool_Exp>
  _or?: Maybe<Array<Maybe<Auth_Account_Providers_Bool_Exp>>>
  account?: Maybe<Auth_Accounts_Bool_Exp>
  account_id?: Maybe<Uuid_Comparison_Exp>
  auth_provider?: Maybe<String_Comparison_Exp>
  auth_provider_unique_id?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  provider?: Maybe<Auth_Providers_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.account_providers" */
export enum Auth_Account_Providers_Constraint {
  /** unique or primary key constraint */
  AccountProvidersAccountIdAuthProviderKey = 'account_providers_account_id_auth_provider_key',
  /** unique or primary key constraint */
  AccountProvidersAuthProviderAuthProviderUniqueIdKey = 'account_providers_auth_provider_auth_provider_unique_id_key',
  /** unique or primary key constraint */
  AccountProvidersPkey = 'account_providers_pkey'
}

/** input type for inserting data into table "auth.account_providers" */
export type Auth_Account_Providers_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>
  account_id?: Maybe<Scalars['uuid']>
  auth_provider?: Maybe<Scalars['String']>
  auth_provider_unique_id?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  provider?: Maybe<Auth_Providers_Obj_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Auth_Account_Providers_Max_Fields = {
  __typename?: 'auth_account_providers_max_fields'
  account_id?: Maybe<Scalars['uuid']>
  auth_provider?: Maybe<Scalars['String']>
  auth_provider_unique_id?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Max_Order_By = {
  account_id?: Maybe<Order_By>
  auth_provider?: Maybe<Order_By>
  auth_provider_unique_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Auth_Account_Providers_Min_Fields = {
  __typename?: 'auth_account_providers_min_fields'
  account_id?: Maybe<Scalars['uuid']>
  auth_provider?: Maybe<Scalars['String']>
  auth_provider_unique_id?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Min_Order_By = {
  account_id?: Maybe<Order_By>
  auth_provider?: Maybe<Order_By>
  auth_provider_unique_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "auth.account_providers" */
export type Auth_Account_Providers_Mutation_Response = {
  __typename?: 'auth_account_providers_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Auth_Account_Providers>
}

/** input type for inserting object relation for remote table "auth.account_providers" */
export type Auth_Account_Providers_Obj_Rel_Insert_Input = {
  data: Auth_Account_Providers_Insert_Input
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>
}

/** on conflict condition type for table "auth.account_providers" */
export type Auth_Account_Providers_On_Conflict = {
  constraint: Auth_Account_Providers_Constraint
  update_columns: Array<Auth_Account_Providers_Update_Column>
  where?: Maybe<Auth_Account_Providers_Bool_Exp>
}

/** ordering options when selecting data from "auth.account_providers" */
export type Auth_Account_Providers_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>
  account_id?: Maybe<Order_By>
  auth_provider?: Maybe<Order_By>
  auth_provider_unique_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  provider?: Maybe<Auth_Providers_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "auth.account_providers" */
export type Auth_Account_Providers_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.account_providers" */
export type Auth_Account_Providers_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>
  auth_provider?: Maybe<Scalars['String']>
  auth_provider_unique_id?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "auth.account_roles" */
export type Auth_Account_Roles = {
  __typename?: 'auth_account_roles'
  /** An object relationship */
  account: Auth_Accounts
  account_id: Scalars['uuid']
  created_at: Scalars['timestamptz']
  id: Scalars['uuid']
  role: Scalars['String']
  /** An object relationship */
  roleByRole: Auth_Roles
}

/** aggregated selection of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate = {
  __typename?: 'auth_account_roles_aggregate'
  aggregate?: Maybe<Auth_Account_Roles_Aggregate_Fields>
  nodes: Array<Auth_Account_Roles>
}

/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Fields = {
  __typename?: 'auth_account_roles_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Auth_Account_Roles_Max_Fields>
  min?: Maybe<Auth_Account_Roles_Min_Fields>
}

/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Account_Roles_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Auth_Account_Roles_Max_Order_By>
  min?: Maybe<Auth_Account_Roles_Min_Order_By>
}

/** input type for inserting array relation for remote table "auth.account_roles" */
export type Auth_Account_Roles_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Roles_Insert_Input>
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.account_roles". All fields are combined with a logical 'AND'. */
export type Auth_Account_Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Account_Roles_Bool_Exp>>>
  _not?: Maybe<Auth_Account_Roles_Bool_Exp>
  _or?: Maybe<Array<Maybe<Auth_Account_Roles_Bool_Exp>>>
  account?: Maybe<Auth_Accounts_Bool_Exp>
  account_id?: Maybe<Uuid_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  role?: Maybe<String_Comparison_Exp>
  roleByRole?: Maybe<Auth_Roles_Bool_Exp>
}

/** unique or primary key constraints on table "auth.account_roles" */
export enum Auth_Account_Roles_Constraint {
  /** unique or primary key constraint */
  AccountRolesPkey = 'account_roles_pkey',
  /** unique or primary key constraint */
  UserRolesAccountIdRoleKey = 'user_roles_account_id_role_key'
}

/** input type for inserting data into table "auth.account_roles" */
export type Auth_Account_Roles_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>
  account_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  role?: Maybe<Scalars['String']>
  roleByRole?: Maybe<Auth_Roles_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Auth_Account_Roles_Max_Fields = {
  __typename?: 'auth_account_roles_max_fields'
  account_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  role?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Max_Order_By = {
  account_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  role?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Auth_Account_Roles_Min_Fields = {
  __typename?: 'auth_account_roles_min_fields'
  account_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  role?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Min_Order_By = {
  account_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  role?: Maybe<Order_By>
}

/** response of any mutation on the table "auth.account_roles" */
export type Auth_Account_Roles_Mutation_Response = {
  __typename?: 'auth_account_roles_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Auth_Account_Roles>
}

/** input type for inserting object relation for remote table "auth.account_roles" */
export type Auth_Account_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Account_Roles_Insert_Input
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>
}

/** on conflict condition type for table "auth.account_roles" */
export type Auth_Account_Roles_On_Conflict = {
  constraint: Auth_Account_Roles_Constraint
  update_columns: Array<Auth_Account_Roles_Update_Column>
  where?: Maybe<Auth_Account_Roles_Bool_Exp>
}

/** ordering options when selecting data from "auth.account_roles" */
export type Auth_Account_Roles_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>
  account_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  role?: Maybe<Order_By>
  roleByRole?: Maybe<Auth_Roles_Order_By>
}

/** primary key columns input for table: "auth.account_roles" */
export type Auth_Account_Roles_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.account_roles" */
export type Auth_Account_Roles_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  role?: Maybe<Scalars['String']>
}

/** update columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** columns and relationships of "auth.accounts" */
export type Auth_Accounts = {
  __typename?: 'auth_accounts'
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>
  /** An aggregated array relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>
  /** An aggregated array relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate
  active: Scalars['Boolean']
  created_at: Scalars['timestamptz']
  custom_register_data?: Maybe<Scalars['jsonb']>
  default_role: Scalars['String']
  email?: Maybe<Scalars['citext']>
  firebase_uid?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  is_anonymous: Scalars['Boolean']
  mfa_enabled: Scalars['Boolean']
  new_email?: Maybe<Scalars['citext']>
  otp_secret?: Maybe<Scalars['String']>
  password_hash?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  /** An array relationship */
  refresh_tokens: Array<Auth_Refresh_Tokens>
  /** An aggregated array relationship */
  refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate
  /** An object relationship */
  role: Auth_Roles
  ticket: Scalars['uuid']
  ticket_expires_at: Scalars['timestamptz']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Users
  user_id: Scalars['uuid']
}

/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>
  where?: Maybe<Auth_Account_Providers_Bool_Exp>
}

/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>
  where?: Maybe<Auth_Account_Providers_Bool_Exp>
}

/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>
  where?: Maybe<Auth_Account_Roles_Bool_Exp>
}

/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>
  where?: Maybe<Auth_Account_Roles_Bool_Exp>
}

/** columns and relationships of "auth.accounts" */
export type Auth_AccountsCustom_Register_DataArgs = {
  path?: Maybe<Scalars['String']>
}

/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>
}

/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>
}

/** aggregated selection of "auth.accounts" */
export type Auth_Accounts_Aggregate = {
  __typename?: 'auth_accounts_aggregate'
  aggregate?: Maybe<Auth_Accounts_Aggregate_Fields>
  nodes: Array<Auth_Accounts>
}

/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_Fields = {
  __typename?: 'auth_accounts_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Auth_Accounts_Max_Fields>
  min?: Maybe<Auth_Accounts_Min_Fields>
}

/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Accounts_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "auth.accounts" */
export type Auth_Accounts_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Auth_Accounts_Max_Order_By>
  min?: Maybe<Auth_Accounts_Min_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Append_Input = {
  custom_register_data?: Maybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "auth.accounts" */
export type Auth_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Auth_Accounts_Insert_Input>
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type Auth_Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Accounts_Bool_Exp>>>
  _not?: Maybe<Auth_Accounts_Bool_Exp>
  _or?: Maybe<Array<Maybe<Auth_Accounts_Bool_Exp>>>
  account_providers?: Maybe<Auth_Account_Providers_Bool_Exp>
  account_roles?: Maybe<Auth_Account_Roles_Bool_Exp>
  active?: Maybe<Boolean_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  custom_register_data?: Maybe<Jsonb_Comparison_Exp>
  default_role?: Maybe<String_Comparison_Exp>
  email?: Maybe<Citext_Comparison_Exp>
  firebase_uid?: Maybe<String_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  is_anonymous?: Maybe<Boolean_Comparison_Exp>
  mfa_enabled?: Maybe<Boolean_Comparison_Exp>
  new_email?: Maybe<Citext_Comparison_Exp>
  otp_secret?: Maybe<String_Comparison_Exp>
  password_hash?: Maybe<String_Comparison_Exp>
  phone_number?: Maybe<String_Comparison_Exp>
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Bool_Exp>
  role?: Maybe<Auth_Roles_Bool_Exp>
  ticket?: Maybe<Uuid_Comparison_Exp>
  ticket_expires_at?: Maybe<Timestamptz_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.accounts" */
export enum Auth_Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsEmailKey = 'accounts_email_key',
  /** unique or primary key constraint */
  AccountsNewEmailKey = 'accounts_new_email_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
  /** unique or primary key constraint */
  AccountsUserIdKey = 'accounts_user_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Accounts_Delete_At_Path_Input = {
  custom_register_data?: Maybe<Array<Maybe<Scalars['String']>>>
}

/**
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Auth_Accounts_Delete_Elem_Input = {
  custom_register_data?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Accounts_Delete_Key_Input = {
  custom_register_data?: Maybe<Scalars['String']>
}

/** input type for inserting data into table "auth.accounts" */
export type Auth_Accounts_Insert_Input = {
  account_providers?: Maybe<Auth_Account_Providers_Arr_Rel_Insert_Input>
  account_roles?: Maybe<Auth_Account_Roles_Arr_Rel_Insert_Input>
  active?: Maybe<Scalars['Boolean']>
  created_at?: Maybe<Scalars['timestamptz']>
  custom_register_data?: Maybe<Scalars['jsonb']>
  default_role?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['citext']>
  firebase_uid?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  is_anonymous?: Maybe<Scalars['Boolean']>
  mfa_enabled?: Maybe<Scalars['Boolean']>
  new_email?: Maybe<Scalars['citext']>
  otp_secret?: Maybe<Scalars['String']>
  password_hash?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Arr_Rel_Insert_Input>
  role?: Maybe<Auth_Roles_Obj_Rel_Insert_Input>
  ticket?: Maybe<Scalars['uuid']>
  ticket_expires_at?: Maybe<Scalars['timestamptz']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Auth_Accounts_Max_Fields = {
  __typename?: 'auth_accounts_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  default_role?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['citext']>
  firebase_uid?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  new_email?: Maybe<Scalars['citext']>
  otp_secret?: Maybe<Scalars['String']>
  password_hash?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  ticket?: Maybe<Scalars['uuid']>
  ticket_expires_at?: Maybe<Scalars['timestamptz']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "auth.accounts" */
export type Auth_Accounts_Max_Order_By = {
  created_at?: Maybe<Order_By>
  default_role?: Maybe<Order_By>
  email?: Maybe<Order_By>
  firebase_uid?: Maybe<Order_By>
  id?: Maybe<Order_By>
  new_email?: Maybe<Order_By>
  otp_secret?: Maybe<Order_By>
  password_hash?: Maybe<Order_By>
  phone_number?: Maybe<Order_By>
  ticket?: Maybe<Order_By>
  ticket_expires_at?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Auth_Accounts_Min_Fields = {
  __typename?: 'auth_accounts_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  default_role?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['citext']>
  firebase_uid?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  new_email?: Maybe<Scalars['citext']>
  otp_secret?: Maybe<Scalars['String']>
  password_hash?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  ticket?: Maybe<Scalars['uuid']>
  ticket_expires_at?: Maybe<Scalars['timestamptz']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "auth.accounts" */
export type Auth_Accounts_Min_Order_By = {
  created_at?: Maybe<Order_By>
  default_role?: Maybe<Order_By>
  email?: Maybe<Order_By>
  firebase_uid?: Maybe<Order_By>
  id?: Maybe<Order_By>
  new_email?: Maybe<Order_By>
  otp_secret?: Maybe<Order_By>
  password_hash?: Maybe<Order_By>
  phone_number?: Maybe<Order_By>
  ticket?: Maybe<Order_By>
  ticket_expires_at?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "auth.accounts" */
export type Auth_Accounts_Mutation_Response = {
  __typename?: 'auth_accounts_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Auth_Accounts>
}

/** input type for inserting object relation for remote table "auth.accounts" */
export type Auth_Accounts_Obj_Rel_Insert_Input = {
  data: Auth_Accounts_Insert_Input
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>
}

/** on conflict condition type for table "auth.accounts" */
export type Auth_Accounts_On_Conflict = {
  constraint: Auth_Accounts_Constraint
  update_columns: Array<Auth_Accounts_Update_Column>
  where?: Maybe<Auth_Accounts_Bool_Exp>
}

/** ordering options when selecting data from "auth.accounts" */
export type Auth_Accounts_Order_By = {
  account_providers_aggregate?: Maybe<Auth_Account_Providers_Aggregate_Order_By>
  account_roles_aggregate?: Maybe<Auth_Account_Roles_Aggregate_Order_By>
  active?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  custom_register_data?: Maybe<Order_By>
  default_role?: Maybe<Order_By>
  email?: Maybe<Order_By>
  firebase_uid?: Maybe<Order_By>
  id?: Maybe<Order_By>
  is_anonymous?: Maybe<Order_By>
  mfa_enabled?: Maybe<Order_By>
  new_email?: Maybe<Order_By>
  otp_secret?: Maybe<Order_By>
  password_hash?: Maybe<Order_By>
  phone_number?: Maybe<Order_By>
  refresh_tokens_aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Order_By>
  role?: Maybe<Auth_Roles_Order_By>
  ticket?: Maybe<Order_By>
  ticket_expires_at?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: "auth.accounts" */
export type Auth_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Prepend_Input = {
  custom_register_data?: Maybe<Scalars['jsonb']>
}

/** select columns of table "auth.accounts" */
export enum Auth_Accounts_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseUid = 'firebase_uid',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.accounts" */
export type Auth_Accounts_Set_Input = {
  active?: Maybe<Scalars['Boolean']>
  created_at?: Maybe<Scalars['timestamptz']>
  custom_register_data?: Maybe<Scalars['jsonb']>
  default_role?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['citext']>
  firebase_uid?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  is_anonymous?: Maybe<Scalars['Boolean']>
  mfa_enabled?: Maybe<Scalars['Boolean']>
  new_email?: Maybe<Scalars['citext']>
  otp_secret?: Maybe<Scalars['String']>
  password_hash?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  ticket?: Maybe<Scalars['uuid']>
  ticket_expires_at?: Maybe<Scalars['timestamptz']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "auth.accounts" */
export enum Auth_Accounts_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseUid = 'firebase_uid',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "auth.providers" */
export type Auth_Providers = {
  __typename?: 'auth_providers'
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>
  /** An aggregated array relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate
  provider: Scalars['String']
}

/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>
  where?: Maybe<Auth_Account_Providers_Bool_Exp>
}

/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>
  where?: Maybe<Auth_Account_Providers_Bool_Exp>
}

/** aggregated selection of "auth.providers" */
export type Auth_Providers_Aggregate = {
  __typename?: 'auth_providers_aggregate'
  aggregate?: Maybe<Auth_Providers_Aggregate_Fields>
  nodes: Array<Auth_Providers>
}

/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_Fields = {
  __typename?: 'auth_providers_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Auth_Providers_Max_Fields>
  min?: Maybe<Auth_Providers_Min_Fields>
}

/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Providers_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "auth.providers" */
export type Auth_Providers_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Auth_Providers_Max_Order_By>
  min?: Maybe<Auth_Providers_Min_Order_By>
}

/** input type for inserting array relation for remote table "auth.providers" */
export type Auth_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_Providers_Insert_Input>
  on_conflict?: Maybe<Auth_Providers_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type Auth_Providers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Providers_Bool_Exp>>>
  _not?: Maybe<Auth_Providers_Bool_Exp>
  _or?: Maybe<Array<Maybe<Auth_Providers_Bool_Exp>>>
  account_providers?: Maybe<Auth_Account_Providers_Bool_Exp>
  provider?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.providers" */
export enum Auth_Providers_Constraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type Auth_Providers_Insert_Input = {
  account_providers?: Maybe<Auth_Account_Providers_Arr_Rel_Insert_Input>
  provider?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Auth_Providers_Max_Fields = {
  __typename?: 'auth_providers_max_fields'
  provider?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "auth.providers" */
export type Auth_Providers_Max_Order_By = {
  provider?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Auth_Providers_Min_Fields = {
  __typename?: 'auth_providers_min_fields'
  provider?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "auth.providers" */
export type Auth_Providers_Min_Order_By = {
  provider?: Maybe<Order_By>
}

/** response of any mutation on the table "auth.providers" */
export type Auth_Providers_Mutation_Response = {
  __typename?: 'auth_providers_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Auth_Providers>
}

/** input type for inserting object relation for remote table "auth.providers" */
export type Auth_Providers_Obj_Rel_Insert_Input = {
  data: Auth_Providers_Insert_Input
  on_conflict?: Maybe<Auth_Providers_On_Conflict>
}

/** on conflict condition type for table "auth.providers" */
export type Auth_Providers_On_Conflict = {
  constraint: Auth_Providers_Constraint
  update_columns: Array<Auth_Providers_Update_Column>
  where?: Maybe<Auth_Providers_Bool_Exp>
}

/** ordering options when selecting data from "auth.providers" */
export type Auth_Providers_Order_By = {
  account_providers_aggregate?: Maybe<Auth_Account_Providers_Aggregate_Order_By>
  provider?: Maybe<Order_By>
}

/** primary key columns input for table: "auth.providers" */
export type Auth_Providers_Pk_Columns_Input = {
  provider: Scalars['String']
}

/** select columns of table "auth.providers" */
export enum Auth_Providers_Select_Column {
  /** column name */
  Provider = 'provider'
}

/** input type for updating data in table "auth.providers" */
export type Auth_Providers_Set_Input = {
  provider?: Maybe<Scalars['String']>
}

/** update columns of table "auth.providers" */
export enum Auth_Providers_Update_Column {
  /** column name */
  Provider = 'provider'
}

/** columns and relationships of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens = {
  __typename?: 'auth_refresh_tokens'
  /** An object relationship */
  account: Auth_Accounts
  account_id: Scalars['uuid']
  created_at: Scalars['timestamptz']
  expires_at: Scalars['timestamptz']
  refresh_token: Scalars['uuid']
}

/** aggregated selection of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate = {
  __typename?: 'auth_refresh_tokens_aggregate'
  aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Fields>
  nodes: Array<Auth_Refresh_Tokens>
}

/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Fields = {
  __typename?: 'auth_refresh_tokens_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Auth_Refresh_Tokens_Max_Fields>
  min?: Maybe<Auth_Refresh_Tokens_Min_Fields>
}

/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Auth_Refresh_Tokens_Max_Order_By>
  min?: Maybe<Auth_Refresh_Tokens_Min_Order_By>
}

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Auth_Refresh_Tokens_Insert_Input>
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type Auth_Refresh_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Refresh_Tokens_Bool_Exp>>>
  _not?: Maybe<Auth_Refresh_Tokens_Bool_Exp>
  _or?: Maybe<Array<Maybe<Auth_Refresh_Tokens_Bool_Exp>>>
  account?: Maybe<Auth_Accounts_Bool_Exp>
  account_id?: Maybe<Uuid_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  expires_at?: Maybe<Timestamptz_Comparison_Exp>
  refresh_token?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>
  account_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  expires_at?: Maybe<Scalars['timestamptz']>
  refresh_token?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Auth_Refresh_Tokens_Max_Fields = {
  __typename?: 'auth_refresh_tokens_max_fields'
  account_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  expires_at?: Maybe<Scalars['timestamptz']>
  refresh_token?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Max_Order_By = {
  account_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  expires_at?: Maybe<Order_By>
  refresh_token?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Auth_Refresh_Tokens_Min_Fields = {
  __typename?: 'auth_refresh_tokens_min_fields'
  account_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  expires_at?: Maybe<Scalars['timestamptz']>
  refresh_token?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Min_Order_By = {
  account_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  expires_at?: Maybe<Order_By>
  refresh_token?: Maybe<Order_By>
}

/** response of any mutation on the table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Mutation_Response = {
  __typename?: 'auth_refresh_tokens_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Auth_Refresh_Tokens>
}

/** input type for inserting object relation for remote table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Obj_Rel_Insert_Input = {
  data: Auth_Refresh_Tokens_Insert_Input
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>
}

/** on conflict condition type for table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_On_Conflict = {
  constraint: Auth_Refresh_Tokens_Constraint
  update_columns: Array<Auth_Refresh_Tokens_Update_Column>
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>
}

/** ordering options when selecting data from "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>
  account_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  expires_at?: Maybe<Order_By>
  refresh_token?: Maybe<Order_By>
}

/** primary key columns input for table: "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Pk_Columns_Input = {
  refresh_token: Scalars['uuid']
}

/** select columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  expires_at?: Maybe<Scalars['timestamptz']>
  refresh_token?: Maybe<Scalars['uuid']>
}

/** update columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** columns and relationships of "auth.roles" */
export type Auth_Roles = {
  __typename?: 'auth_roles'
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>
  /** An aggregated array relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate
  /** An array relationship */
  accounts: Array<Auth_Accounts>
  /** An aggregated array relationship */
  accounts_aggregate: Auth_Accounts_Aggregate
  role: Scalars['String']
}

/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>
  where?: Maybe<Auth_Account_Roles_Bool_Exp>
}

/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>
  where?: Maybe<Auth_Account_Roles_Bool_Exp>
}

/** columns and relationships of "auth.roles" */
export type Auth_RolesAccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>
  where?: Maybe<Auth_Accounts_Bool_Exp>
}

/** columns and relationships of "auth.roles" */
export type Auth_RolesAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>
  where?: Maybe<Auth_Accounts_Bool_Exp>
}

/** aggregated selection of "auth.roles" */
export type Auth_Roles_Aggregate = {
  __typename?: 'auth_roles_aggregate'
  aggregate?: Maybe<Auth_Roles_Aggregate_Fields>
  nodes: Array<Auth_Roles>
}

/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_Fields = {
  __typename?: 'auth_roles_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Auth_Roles_Max_Fields>
  min?: Maybe<Auth_Roles_Min_Fields>
}

/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Roles_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "auth.roles" */
export type Auth_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Auth_Roles_Max_Order_By>
  min?: Maybe<Auth_Roles_Min_Order_By>
}

/** input type for inserting array relation for remote table "auth.roles" */
export type Auth_Roles_Arr_Rel_Insert_Input = {
  data: Array<Auth_Roles_Insert_Input>
  on_conflict?: Maybe<Auth_Roles_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type Auth_Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Roles_Bool_Exp>>>
  _not?: Maybe<Auth_Roles_Bool_Exp>
  _or?: Maybe<Array<Maybe<Auth_Roles_Bool_Exp>>>
  account_roles?: Maybe<Auth_Account_Roles_Bool_Exp>
  accounts?: Maybe<Auth_Accounts_Bool_Exp>
  role?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.roles" */
export enum Auth_Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type Auth_Roles_Insert_Input = {
  account_roles?: Maybe<Auth_Account_Roles_Arr_Rel_Insert_Input>
  accounts?: Maybe<Auth_Accounts_Arr_Rel_Insert_Input>
  role?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Auth_Roles_Max_Fields = {
  __typename?: 'auth_roles_max_fields'
  role?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "auth.roles" */
export type Auth_Roles_Max_Order_By = {
  role?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Auth_Roles_Min_Fields = {
  __typename?: 'auth_roles_min_fields'
  role?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "auth.roles" */
export type Auth_Roles_Min_Order_By = {
  role?: Maybe<Order_By>
}

/** response of any mutation on the table "auth.roles" */
export type Auth_Roles_Mutation_Response = {
  __typename?: 'auth_roles_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Auth_Roles>
}

/** input type for inserting object relation for remote table "auth.roles" */
export type Auth_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Roles_Insert_Input
  on_conflict?: Maybe<Auth_Roles_On_Conflict>
}

/** on conflict condition type for table "auth.roles" */
export type Auth_Roles_On_Conflict = {
  constraint: Auth_Roles_Constraint
  update_columns: Array<Auth_Roles_Update_Column>
  where?: Maybe<Auth_Roles_Bool_Exp>
}

/** ordering options when selecting data from "auth.roles" */
export type Auth_Roles_Order_By = {
  account_roles_aggregate?: Maybe<Auth_Account_Roles_Aggregate_Order_By>
  accounts_aggregate?: Maybe<Auth_Accounts_Aggregate_Order_By>
  role?: Maybe<Order_By>
}

/** primary key columns input for table: "auth.roles" */
export type Auth_Roles_Pk_Columns_Input = {
  role: Scalars['String']
}

/** select columns of table "auth.roles" */
export enum Auth_Roles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type Auth_Roles_Set_Input = {
  role?: Maybe<Scalars['String']>
}

/** update columns of table "auth.roles" */
export enum Auth_Roles_Update_Column {
  /** column name */
  Role = 'role'
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type Bases = {
  __typename?: 'bases'
  address?: Maybe<Scalars['String']>
  /** An array relationship */
  articles: Array<Articles>
  /** An aggregated array relationship */
  articles_aggregate: Articles_Aggregate
  /** An array relationship */
  categories_of_articles: Array<Categories_Of_Articles>
  /** An aggregated array relationship */
  categories_of_articles_aggregate: Categories_Of_Articles_Aggregate
  created_at: Scalars['timestamptz']
  deleted_at?: Maybe<Scalars['timestamptz']>
  /** An array relationship */
  departments: Array<Departments>
  /** An aggregated array relationship */
  departments_aggregate: Departments_Aggregate
  email?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  image?: Maybe<Scalars['String']>
  /** An array relationship */
  invites: Array<Invites>
  /** An aggregated array relationship */
  invites_aggregate: Invites_Aggregate
  name: Scalars['String']
  /** An object relationship */
  owner: Users
  owner_id: Scalars['uuid']
  /** An array relationship */
  permissions: Array<Users_Permissions>
  /** An aggregated array relationship */
  permissions_aggregate: Users_Permissions_Aggregate
  phone?: Maybe<Scalars['String']>
  /** An array relationship */
  positions: Array<Positions>
  /** An aggregated array relationship */
  positions_aggregate: Positions_Aggregate
  site?: Maybe<Scalars['String']>
  /** An array relationship */
  statuses: Array<Statuses>
  /** An aggregated array relationship */
  statuses_aggregate: Statuses_Aggregate
  updated_at: Scalars['timestamptz']
  /** An array relationship */
  users: Array<Users_In_Bases>
  /** An aggregated array relationship */
  users_aggregate: Users_In_Bases_Aggregate
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesArticlesArgs = {
  distinct_on?: Maybe<Array<Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Order_By>>
  where?: Maybe<Articles_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesArticles_AggregateArgs = {
  distinct_on?: Maybe<Array<Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Order_By>>
  where?: Maybe<Articles_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesCategories_Of_ArticlesArgs = {
  distinct_on?: Maybe<Array<Categories_Of_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Of_Articles_Order_By>>
  where?: Maybe<Categories_Of_Articles_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesCategories_Of_Articles_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Of_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Of_Articles_Order_By>>
  where?: Maybe<Categories_Of_Articles_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesDepartmentsArgs = {
  distinct_on?: Maybe<Array<Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Departments_Order_By>>
  where?: Maybe<Departments_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesDepartments_AggregateArgs = {
  distinct_on?: Maybe<Array<Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Departments_Order_By>>
  where?: Maybe<Departments_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesInvitesArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Invites_Order_By>>
  where?: Maybe<Invites_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesInvites_AggregateArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Invites_Order_By>>
  where?: Maybe<Invites_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesPermissionsArgs = {
  distinct_on?: Maybe<Array<Users_Permissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Permissions_Order_By>>
  where?: Maybe<Users_Permissions_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesPermissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Permissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Permissions_Order_By>>
  where?: Maybe<Users_Permissions_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesPositionsArgs = {
  distinct_on?: Maybe<Array<Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Positions_Order_By>>
  where?: Maybe<Positions_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesPositions_AggregateArgs = {
  distinct_on?: Maybe<Array<Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Positions_Order_By>>
  where?: Maybe<Positions_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesStatusesArgs = {
  distinct_on?: Maybe<Array<Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Statuses_Order_By>>
  where?: Maybe<Statuses_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesStatuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Statuses_Order_By>>
  where?: Maybe<Statuses_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesUsersArgs = {
  distinct_on?: Maybe<Array<Users_In_Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_In_Bases_Order_By>>
  where?: Maybe<Users_In_Bases_Bool_Exp>
}

/**
 * Базы
 *
 *
 * columns and relationships of "bases"
 */
export type BasesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_In_Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_In_Bases_Order_By>>
  where?: Maybe<Users_In_Bases_Bool_Exp>
}

/** aggregated selection of "bases" */
export type Bases_Aggregate = {
  __typename?: 'bases_aggregate'
  aggregate?: Maybe<Bases_Aggregate_Fields>
  nodes: Array<Bases>
}

/** aggregate fields of "bases" */
export type Bases_Aggregate_Fields = {
  __typename?: 'bases_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Bases_Max_Fields>
  min?: Maybe<Bases_Min_Fields>
}

/** aggregate fields of "bases" */
export type Bases_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bases_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "bases" */
export type Bases_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Bases_Max_Order_By>
  min?: Maybe<Bases_Min_Order_By>
}

/** input type for inserting array relation for remote table "bases" */
export type Bases_Arr_Rel_Insert_Input = {
  data: Array<Bases_Insert_Input>
  on_conflict?: Maybe<Bases_On_Conflict>
}

/** Boolean expression to filter rows from the table "bases". All fields are combined with a logical 'AND'. */
export type Bases_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bases_Bool_Exp>>>
  _not?: Maybe<Bases_Bool_Exp>
  _or?: Maybe<Array<Maybe<Bases_Bool_Exp>>>
  address?: Maybe<String_Comparison_Exp>
  articles?: Maybe<Articles_Bool_Exp>
  categories_of_articles?: Maybe<Categories_Of_Articles_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>
  departments?: Maybe<Departments_Bool_Exp>
  email?: Maybe<String_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  image?: Maybe<String_Comparison_Exp>
  invites?: Maybe<Invites_Bool_Exp>
  name?: Maybe<String_Comparison_Exp>
  owner?: Maybe<Users_Bool_Exp>
  owner_id?: Maybe<Uuid_Comparison_Exp>
  permissions?: Maybe<Users_Permissions_Bool_Exp>
  phone?: Maybe<String_Comparison_Exp>
  positions?: Maybe<Positions_Bool_Exp>
  site?: Maybe<String_Comparison_Exp>
  statuses?: Maybe<Statuses_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  users?: Maybe<Users_In_Bases_Bool_Exp>
}

/** unique or primary key constraints on table "bases" */
export enum Bases_Constraint {
  /** unique or primary key constraint */
  BasesPkey = 'bases_pkey'
}

/** input type for inserting data into table "bases" */
export type Bases_Insert_Input = {
  address?: Maybe<Scalars['String']>
  articles?: Maybe<Articles_Arr_Rel_Insert_Input>
  categories_of_articles?: Maybe<Categories_Of_Articles_Arr_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  deleted_at?: Maybe<Scalars['timestamptz']>
  departments?: Maybe<Departments_Arr_Rel_Insert_Input>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  image?: Maybe<Scalars['String']>
  invites?: Maybe<Invites_Arr_Rel_Insert_Input>
  name?: Maybe<Scalars['String']>
  owner?: Maybe<Users_Obj_Rel_Insert_Input>
  owner_id?: Maybe<Scalars['uuid']>
  permissions?: Maybe<Users_Permissions_Arr_Rel_Insert_Input>
  phone?: Maybe<Scalars['String']>
  positions?: Maybe<Positions_Arr_Rel_Insert_Input>
  site?: Maybe<Scalars['String']>
  statuses?: Maybe<Statuses_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
  users?: Maybe<Users_In_Bases_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Bases_Max_Fields = {
  __typename?: 'bases_max_fields'
  address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  deleted_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  owner_id?: Maybe<Scalars['uuid']>
  phone?: Maybe<Scalars['String']>
  site?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "bases" */
export type Bases_Max_Order_By = {
  address?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  deleted_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image?: Maybe<Order_By>
  name?: Maybe<Order_By>
  owner_id?: Maybe<Order_By>
  phone?: Maybe<Order_By>
  site?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Bases_Min_Fields = {
  __typename?: 'bases_min_fields'
  address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  deleted_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  owner_id?: Maybe<Scalars['uuid']>
  phone?: Maybe<Scalars['String']>
  site?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "bases" */
export type Bases_Min_Order_By = {
  address?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  deleted_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image?: Maybe<Order_By>
  name?: Maybe<Order_By>
  owner_id?: Maybe<Order_By>
  phone?: Maybe<Order_By>
  site?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "bases" */
export type Bases_Mutation_Response = {
  __typename?: 'bases_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Bases>
}

/** input type for inserting object relation for remote table "bases" */
export type Bases_Obj_Rel_Insert_Input = {
  data: Bases_Insert_Input
  on_conflict?: Maybe<Bases_On_Conflict>
}

/** on conflict condition type for table "bases" */
export type Bases_On_Conflict = {
  constraint: Bases_Constraint
  update_columns: Array<Bases_Update_Column>
  where?: Maybe<Bases_Bool_Exp>
}

/** ordering options when selecting data from "bases" */
export type Bases_Order_By = {
  address?: Maybe<Order_By>
  articles_aggregate?: Maybe<Articles_Aggregate_Order_By>
  categories_of_articles_aggregate?: Maybe<
    Categories_Of_Articles_Aggregate_Order_By
  >
  created_at?: Maybe<Order_By>
  deleted_at?: Maybe<Order_By>
  departments_aggregate?: Maybe<Departments_Aggregate_Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image?: Maybe<Order_By>
  invites_aggregate?: Maybe<Invites_Aggregate_Order_By>
  name?: Maybe<Order_By>
  owner?: Maybe<Users_Order_By>
  owner_id?: Maybe<Order_By>
  permissions_aggregate?: Maybe<Users_Permissions_Aggregate_Order_By>
  phone?: Maybe<Order_By>
  positions_aggregate?: Maybe<Positions_Aggregate_Order_By>
  site?: Maybe<Order_By>
  statuses_aggregate?: Maybe<Statuses_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
  users_aggregate?: Maybe<Users_In_Bases_Aggregate_Order_By>
}

/** primary key columns input for table: "bases" */
export type Bases_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "bases" */
export enum Bases_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Phone = 'phone',
  /** column name */
  Site = 'site',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "bases" */
export type Bases_Set_Input = {
  address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  deleted_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  owner_id?: Maybe<Scalars['uuid']>
  phone?: Maybe<Scalars['String']>
  site?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "bases" */
export enum Bases_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Phone = 'phone',
  /** column name */
  Site = 'site',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/**
 * Разделы статей
 *
 *
 * columns and relationships of "categories_of_articles"
 */
export type Categories_Of_Articles = {
  __typename?: 'categories_of_articles'
  /** An array relationship */
  articles: Array<Articles>
  /** An aggregated array relationship */
  articles_aggregate: Articles_Aggregate
  /** An object relationship */
  base: Bases
  base_id: Scalars['uuid']
  /** An array relationship */
  children: Array<Categories_Of_Articles>
  /** An aggregated array relationship */
  children_aggregate: Categories_Of_Articles_Aggregate
  created_at: Scalars['timestamptz']
  id: Scalars['uuid']
  name: Scalars['String']
  order: Scalars['Int']
  /** An object relationship */
  parent?: Maybe<Categories_Of_Articles>
  parent_id?: Maybe<Scalars['uuid']>
  updated_at: Scalars['timestamptz']
}

/**
 * Разделы статей
 *
 *
 * columns and relationships of "categories_of_articles"
 */
export type Categories_Of_ArticlesArticlesArgs = {
  distinct_on?: Maybe<Array<Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Order_By>>
  where?: Maybe<Articles_Bool_Exp>
}

/**
 * Разделы статей
 *
 *
 * columns and relationships of "categories_of_articles"
 */
export type Categories_Of_ArticlesArticles_AggregateArgs = {
  distinct_on?: Maybe<Array<Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Order_By>>
  where?: Maybe<Articles_Bool_Exp>
}

/**
 * Разделы статей
 *
 *
 * columns and relationships of "categories_of_articles"
 */
export type Categories_Of_ArticlesChildrenArgs = {
  distinct_on?: Maybe<Array<Categories_Of_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Of_Articles_Order_By>>
  where?: Maybe<Categories_Of_Articles_Bool_Exp>
}

/**
 * Разделы статей
 *
 *
 * columns and relationships of "categories_of_articles"
 */
export type Categories_Of_ArticlesChildren_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Of_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Of_Articles_Order_By>>
  where?: Maybe<Categories_Of_Articles_Bool_Exp>
}

/** aggregated selection of "categories_of_articles" */
export type Categories_Of_Articles_Aggregate = {
  __typename?: 'categories_of_articles_aggregate'
  aggregate?: Maybe<Categories_Of_Articles_Aggregate_Fields>
  nodes: Array<Categories_Of_Articles>
}

/** aggregate fields of "categories_of_articles" */
export type Categories_Of_Articles_Aggregate_Fields = {
  __typename?: 'categories_of_articles_aggregate_fields'
  avg?: Maybe<Categories_Of_Articles_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Categories_Of_Articles_Max_Fields>
  min?: Maybe<Categories_Of_Articles_Min_Fields>
  stddev?: Maybe<Categories_Of_Articles_Stddev_Fields>
  stddev_pop?: Maybe<Categories_Of_Articles_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Categories_Of_Articles_Stddev_Samp_Fields>
  sum?: Maybe<Categories_Of_Articles_Sum_Fields>
  var_pop?: Maybe<Categories_Of_Articles_Var_Pop_Fields>
  var_samp?: Maybe<Categories_Of_Articles_Var_Samp_Fields>
  variance?: Maybe<Categories_Of_Articles_Variance_Fields>
}

/** aggregate fields of "categories_of_articles" */
export type Categories_Of_Articles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Of_Articles_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "categories_of_articles" */
export type Categories_Of_Articles_Aggregate_Order_By = {
  avg?: Maybe<Categories_Of_Articles_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Categories_Of_Articles_Max_Order_By>
  min?: Maybe<Categories_Of_Articles_Min_Order_By>
  stddev?: Maybe<Categories_Of_Articles_Stddev_Order_By>
  stddev_pop?: Maybe<Categories_Of_Articles_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Categories_Of_Articles_Stddev_Samp_Order_By>
  sum?: Maybe<Categories_Of_Articles_Sum_Order_By>
  var_pop?: Maybe<Categories_Of_Articles_Var_Pop_Order_By>
  var_samp?: Maybe<Categories_Of_Articles_Var_Samp_Order_By>
  variance?: Maybe<Categories_Of_Articles_Variance_Order_By>
}

/** input type for inserting array relation for remote table "categories_of_articles" */
export type Categories_Of_Articles_Arr_Rel_Insert_Input = {
  data: Array<Categories_Of_Articles_Insert_Input>
  on_conflict?: Maybe<Categories_Of_Articles_On_Conflict>
}

/** aggregate avg on columns */
export type Categories_Of_Articles_Avg_Fields = {
  __typename?: 'categories_of_articles_avg_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "categories_of_articles" */
export type Categories_Of_Articles_Avg_Order_By = {
  order?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "categories_of_articles". All fields are combined with a logical 'AND'. */
export type Categories_Of_Articles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Categories_Of_Articles_Bool_Exp>>>
  _not?: Maybe<Categories_Of_Articles_Bool_Exp>
  _or?: Maybe<Array<Maybe<Categories_Of_Articles_Bool_Exp>>>
  articles?: Maybe<Articles_Bool_Exp>
  base?: Maybe<Bases_Bool_Exp>
  base_id?: Maybe<Uuid_Comparison_Exp>
  children?: Maybe<Categories_Of_Articles_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  order?: Maybe<Int_Comparison_Exp>
  parent?: Maybe<Categories_Of_Articles_Bool_Exp>
  parent_id?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "categories_of_articles" */
export enum Categories_Of_Articles_Constraint {
  /** unique or primary key constraint */
  CategoriesOfArticlesBaseIdNameKey = 'categories_of_articles_base_id_name_key',
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing integer column in table "categories_of_articles" */
export type Categories_Of_Articles_Inc_Input = {
  order?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "categories_of_articles" */
export type Categories_Of_Articles_Insert_Input = {
  articles?: Maybe<Articles_Arr_Rel_Insert_Input>
  base?: Maybe<Bases_Obj_Rel_Insert_Input>
  base_id?: Maybe<Scalars['uuid']>
  children?: Maybe<Categories_Of_Articles_Arr_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  parent?: Maybe<Categories_Of_Articles_Obj_Rel_Insert_Input>
  parent_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Categories_Of_Articles_Max_Fields = {
  __typename?: 'categories_of_articles_max_fields'
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  parent_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "categories_of_articles" */
export type Categories_Of_Articles_Max_Order_By = {
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  parent_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Categories_Of_Articles_Min_Fields = {
  __typename?: 'categories_of_articles_min_fields'
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  parent_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "categories_of_articles" */
export type Categories_Of_Articles_Min_Order_By = {
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  parent_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "categories_of_articles" */
export type Categories_Of_Articles_Mutation_Response = {
  __typename?: 'categories_of_articles_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Categories_Of_Articles>
}

/** input type for inserting object relation for remote table "categories_of_articles" */
export type Categories_Of_Articles_Obj_Rel_Insert_Input = {
  data: Categories_Of_Articles_Insert_Input
  on_conflict?: Maybe<Categories_Of_Articles_On_Conflict>
}

/** on conflict condition type for table "categories_of_articles" */
export type Categories_Of_Articles_On_Conflict = {
  constraint: Categories_Of_Articles_Constraint
  update_columns: Array<Categories_Of_Articles_Update_Column>
  where?: Maybe<Categories_Of_Articles_Bool_Exp>
}

/** ordering options when selecting data from "categories_of_articles" */
export type Categories_Of_Articles_Order_By = {
  articles_aggregate?: Maybe<Articles_Aggregate_Order_By>
  base?: Maybe<Bases_Order_By>
  base_id?: Maybe<Order_By>
  children_aggregate?: Maybe<Categories_Of_Articles_Aggregate_Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  parent?: Maybe<Categories_Of_Articles_Order_By>
  parent_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "categories_of_articles" */
export type Categories_Of_Articles_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "categories_of_articles" */
export enum Categories_Of_Articles_Select_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "categories_of_articles" */
export type Categories_Of_Articles_Set_Input = {
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  parent_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Categories_Of_Articles_Stddev_Fields = {
  __typename?: 'categories_of_articles_stddev_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "categories_of_articles" */
export type Categories_Of_Articles_Stddev_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Categories_Of_Articles_Stddev_Pop_Fields = {
  __typename?: 'categories_of_articles_stddev_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "categories_of_articles" */
export type Categories_Of_Articles_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Categories_Of_Articles_Stddev_Samp_Fields = {
  __typename?: 'categories_of_articles_stddev_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "categories_of_articles" */
export type Categories_Of_Articles_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Categories_Of_Articles_Sum_Fields = {
  __typename?: 'categories_of_articles_sum_fields'
  order?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "categories_of_articles" */
export type Categories_Of_Articles_Sum_Order_By = {
  order?: Maybe<Order_By>
}

/** update columns of table "categories_of_articles" */
export enum Categories_Of_Articles_Update_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Categories_Of_Articles_Var_Pop_Fields = {
  __typename?: 'categories_of_articles_var_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "categories_of_articles" */
export type Categories_Of_Articles_Var_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Categories_Of_Articles_Var_Samp_Fields = {
  __typename?: 'categories_of_articles_var_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "categories_of_articles" */
export type Categories_Of_Articles_Var_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Categories_Of_Articles_Variance_Fields = {
  __typename?: 'categories_of_articles_variance_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "categories_of_articles" */
export type Categories_Of_Articles_Variance_Order_By = {
  order?: Maybe<Order_By>
}

/** expression to compare columns of type citext. All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: Maybe<Scalars['citext']>
  _gt?: Maybe<Scalars['citext']>
  _gte?: Maybe<Scalars['citext']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['citext']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['citext']>
  _lte?: Maybe<Scalars['citext']>
  _neq?: Maybe<Scalars['citext']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['citext']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

/**
 * Комментарии
 *
 *
 * columns and relationships of "comments"
 */
export type Comments = {
  __typename?: 'comments'
  /** An object relationship */
  article?: Maybe<Articles>
  article_id?: Maybe<Scalars['uuid']>
  /** An array relationship */
  children: Array<Comments>
  /** An aggregated array relationship */
  children_aggregate: Comments_Aggregate
  comment: Scalars['String']
  created_at: Scalars['timestamptz']
  id: Scalars['uuid']
  /** An object relationship */
  parent?: Maybe<Comments>
  parent_id?: Maybe<Scalars['uuid']>
  rating: Scalars['Int']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Users
  user_id: Scalars['uuid']
}

/**
 * Комментарии
 *
 *
 * columns and relationships of "comments"
 */
export type CommentsChildrenArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/**
 * Комментарии
 *
 *
 * columns and relationships of "comments"
 */
export type CommentsChildren_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate'
  aggregate?: Maybe<Comments_Aggregate_Fields>
  nodes: Array<Comments>
}

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields'
  avg?: Maybe<Comments_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Comments_Max_Fields>
  min?: Maybe<Comments_Min_Fields>
  stddev?: Maybe<Comments_Stddev_Fields>
  stddev_pop?: Maybe<Comments_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Comments_Stddev_Samp_Fields>
  sum?: Maybe<Comments_Sum_Fields>
  var_pop?: Maybe<Comments_Var_Pop_Fields>
  var_samp?: Maybe<Comments_Var_Samp_Fields>
  variance?: Maybe<Comments_Variance_Fields>
}

/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comments_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  avg?: Maybe<Comments_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Comments_Max_Order_By>
  min?: Maybe<Comments_Min_Order_By>
  stddev?: Maybe<Comments_Stddev_Order_By>
  stddev_pop?: Maybe<Comments_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Comments_Stddev_Samp_Order_By>
  sum?: Maybe<Comments_Sum_Order_By>
  var_pop?: Maybe<Comments_Var_Pop_Order_By>
  var_samp?: Maybe<Comments_Var_Samp_Order_By>
  variance?: Maybe<Comments_Variance_Order_By>
}

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>
  on_conflict?: Maybe<Comments_On_Conflict>
}

/** aggregate avg on columns */
export type Comments_Avg_Fields = {
  __typename?: 'comments_avg_fields'
  rating?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "comments" */
export type Comments_Avg_Order_By = {
  rating?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comments_Bool_Exp>>>
  _not?: Maybe<Comments_Bool_Exp>
  _or?: Maybe<Array<Maybe<Comments_Bool_Exp>>>
  article?: Maybe<Articles_Bool_Exp>
  article_id?: Maybe<Uuid_Comparison_Exp>
  children?: Maybe<Comments_Bool_Exp>
  comment?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  parent?: Maybe<Comments_Bool_Exp>
  parent_id?: Maybe<Uuid_Comparison_Exp>
  rating?: Maybe<Int_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint */
  CommentPkey = 'comment_pkey'
}

/** input type for incrementing integer column in table "comments" */
export type Comments_Inc_Input = {
  rating?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  article?: Maybe<Articles_Obj_Rel_Insert_Input>
  article_id?: Maybe<Scalars['uuid']>
  children?: Maybe<Comments_Arr_Rel_Insert_Input>
  comment?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  parent?: Maybe<Comments_Obj_Rel_Insert_Input>
  parent_id?: Maybe<Scalars['uuid']>
  rating?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields'
  article_id?: Maybe<Scalars['uuid']>
  comment?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  parent_id?: Maybe<Scalars['uuid']>
  rating?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  article_id?: Maybe<Order_By>
  comment?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  parent_id?: Maybe<Order_By>
  rating?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields'
  article_id?: Maybe<Scalars['uuid']>
  comment?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  parent_id?: Maybe<Scalars['uuid']>
  rating?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  article_id?: Maybe<Order_By>
  comment?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  parent_id?: Maybe<Order_By>
  rating?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Comments>
}

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input
  on_conflict?: Maybe<Comments_On_Conflict>
}

/** on conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint
  update_columns: Array<Comments_Update_Column>
  where?: Maybe<Comments_Bool_Exp>
}

/** ordering options when selecting data from "comments" */
export type Comments_Order_By = {
  article?: Maybe<Articles_Order_By>
  article_id?: Maybe<Order_By>
  children_aggregate?: Maybe<Comments_Aggregate_Order_By>
  comment?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  parent?: Maybe<Comments_Order_By>
  parent_id?: Maybe<Order_By>
  rating?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: "comments" */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  article_id?: Maybe<Scalars['uuid']>
  comment?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  parent_id?: Maybe<Scalars['uuid']>
  rating?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export type Comments_Stddev_Fields = {
  __typename?: 'comments_stddev_fields'
  rating?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "comments" */
export type Comments_Stddev_Order_By = {
  rating?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Comments_Stddev_Pop_Fields = {
  __typename?: 'comments_stddev_pop_fields'
  rating?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "comments" */
export type Comments_Stddev_Pop_Order_By = {
  rating?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Comments_Stddev_Samp_Fields = {
  __typename?: 'comments_stddev_samp_fields'
  rating?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "comments" */
export type Comments_Stddev_Samp_Order_By = {
  rating?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Comments_Sum_Fields = {
  __typename?: 'comments_sum_fields'
  rating?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "comments" */
export type Comments_Sum_Order_By = {
  rating?: Maybe<Order_By>
}

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Comments_Var_Pop_Fields = {
  __typename?: 'comments_var_pop_fields'
  rating?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "comments" */
export type Comments_Var_Pop_Order_By = {
  rating?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Comments_Var_Samp_Fields = {
  __typename?: 'comments_var_samp_fields'
  rating?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "comments" */
export type Comments_Var_Samp_Order_By = {
  rating?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Comments_Variance_Fields = {
  __typename?: 'comments_variance_fields'
  rating?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "comments" */
export type Comments_Variance_Order_By = {
  rating?: Maybe<Order_By>
}

/**
 * Категории статей по умолчанию
 *
 *
 * columns and relationships of "default_categories_of_articles"
 */
export type Default_Categories_Of_Articles = {
  __typename?: 'default_categories_of_articles'
  id: Scalars['uuid']
  name: Scalars['String']
  order: Scalars['Int']
}

/** aggregated selection of "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Aggregate = {
  __typename?: 'default_categories_of_articles_aggregate'
  aggregate?: Maybe<Default_Categories_Of_Articles_Aggregate_Fields>
  nodes: Array<Default_Categories_Of_Articles>
}

/** aggregate fields of "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Aggregate_Fields = {
  __typename?: 'default_categories_of_articles_aggregate_fields'
  avg?: Maybe<Default_Categories_Of_Articles_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Default_Categories_Of_Articles_Max_Fields>
  min?: Maybe<Default_Categories_Of_Articles_Min_Fields>
  stddev?: Maybe<Default_Categories_Of_Articles_Stddev_Fields>
  stddev_pop?: Maybe<Default_Categories_Of_Articles_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Default_Categories_Of_Articles_Stddev_Samp_Fields>
  sum?: Maybe<Default_Categories_Of_Articles_Sum_Fields>
  var_pop?: Maybe<Default_Categories_Of_Articles_Var_Pop_Fields>
  var_samp?: Maybe<Default_Categories_Of_Articles_Var_Samp_Fields>
  variance?: Maybe<Default_Categories_Of_Articles_Variance_Fields>
}

/** aggregate fields of "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Default_Categories_Of_Articles_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Aggregate_Order_By = {
  avg?: Maybe<Default_Categories_Of_Articles_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Default_Categories_Of_Articles_Max_Order_By>
  min?: Maybe<Default_Categories_Of_Articles_Min_Order_By>
  stddev?: Maybe<Default_Categories_Of_Articles_Stddev_Order_By>
  stddev_pop?: Maybe<Default_Categories_Of_Articles_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Default_Categories_Of_Articles_Stddev_Samp_Order_By>
  sum?: Maybe<Default_Categories_Of_Articles_Sum_Order_By>
  var_pop?: Maybe<Default_Categories_Of_Articles_Var_Pop_Order_By>
  var_samp?: Maybe<Default_Categories_Of_Articles_Var_Samp_Order_By>
  variance?: Maybe<Default_Categories_Of_Articles_Variance_Order_By>
}

/** input type for inserting array relation for remote table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Arr_Rel_Insert_Input = {
  data: Array<Default_Categories_Of_Articles_Insert_Input>
  on_conflict?: Maybe<Default_Categories_Of_Articles_On_Conflict>
}

/** aggregate avg on columns */
export type Default_Categories_Of_Articles_Avg_Fields = {
  __typename?: 'default_categories_of_articles_avg_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Avg_Order_By = {
  order?: Maybe<Order_By>
}

/**
 * Boolean expression to filter rows from the table
 * "default_categories_of_articles". All fields are combined with a logical 'AND'.
 */
export type Default_Categories_Of_Articles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Default_Categories_Of_Articles_Bool_Exp>>>
  _not?: Maybe<Default_Categories_Of_Articles_Bool_Exp>
  _or?: Maybe<Array<Maybe<Default_Categories_Of_Articles_Bool_Exp>>>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  order?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "default_categories_of_articles" */
export enum Default_Categories_Of_Articles_Constraint {
  /** unique or primary key constraint */
  DefaultCategoriesOfArticlesPkey = 'default_categories_of_articles_pkey'
}

/** input type for incrementing integer column in table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Inc_Input = {
  order?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Default_Categories_Of_Articles_Max_Fields = {
  __typename?: 'default_categories_of_articles_max_fields'
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Max_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Default_Categories_Of_Articles_Min_Fields = {
  __typename?: 'default_categories_of_articles_min_fields'
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Min_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** response of any mutation on the table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Mutation_Response = {
  __typename?: 'default_categories_of_articles_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Default_Categories_Of_Articles>
}

/** input type for inserting object relation for remote table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Obj_Rel_Insert_Input = {
  data: Default_Categories_Of_Articles_Insert_Input
  on_conflict?: Maybe<Default_Categories_Of_Articles_On_Conflict>
}

/** on conflict condition type for table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_On_Conflict = {
  constraint: Default_Categories_Of_Articles_Constraint
  update_columns: Array<Default_Categories_Of_Articles_Update_Column>
  where?: Maybe<Default_Categories_Of_Articles_Bool_Exp>
}

/** ordering options when selecting data from "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** primary key columns input for table: "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "default_categories_of_articles" */
export enum Default_Categories_Of_Articles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order'
}

/** input type for updating data in table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Default_Categories_Of_Articles_Stddev_Fields = {
  __typename?: 'default_categories_of_articles_stddev_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Stddev_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Default_Categories_Of_Articles_Stddev_Pop_Fields = {
  __typename?: 'default_categories_of_articles_stddev_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Default_Categories_Of_Articles_Stddev_Samp_Fields = {
  __typename?: 'default_categories_of_articles_stddev_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Default_Categories_Of_Articles_Sum_Fields = {
  __typename?: 'default_categories_of_articles_sum_fields'
  order?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Sum_Order_By = {
  order?: Maybe<Order_By>
}

/** update columns of table "default_categories_of_articles" */
export enum Default_Categories_Of_Articles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order'
}

/** aggregate var_pop on columns */
export type Default_Categories_Of_Articles_Var_Pop_Fields = {
  __typename?: 'default_categories_of_articles_var_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Var_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Default_Categories_Of_Articles_Var_Samp_Fields = {
  __typename?: 'default_categories_of_articles_var_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Var_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Default_Categories_Of_Articles_Variance_Fields = {
  __typename?: 'default_categories_of_articles_variance_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "default_categories_of_articles" */
export type Default_Categories_Of_Articles_Variance_Order_By = {
  order?: Maybe<Order_By>
}

/**
 * Отделы при создании базы
 *
 *
 * columns and relationships of "default_departments"
 */
export type Default_Departments = {
  __typename?: 'default_departments'
  id: Scalars['uuid']
  name: Scalars['String']
  order: Scalars['Int']
}

/** aggregated selection of "default_departments" */
export type Default_Departments_Aggregate = {
  __typename?: 'default_departments_aggregate'
  aggregate?: Maybe<Default_Departments_Aggregate_Fields>
  nodes: Array<Default_Departments>
}

/** aggregate fields of "default_departments" */
export type Default_Departments_Aggregate_Fields = {
  __typename?: 'default_departments_aggregate_fields'
  avg?: Maybe<Default_Departments_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Default_Departments_Max_Fields>
  min?: Maybe<Default_Departments_Min_Fields>
  stddev?: Maybe<Default_Departments_Stddev_Fields>
  stddev_pop?: Maybe<Default_Departments_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Default_Departments_Stddev_Samp_Fields>
  sum?: Maybe<Default_Departments_Sum_Fields>
  var_pop?: Maybe<Default_Departments_Var_Pop_Fields>
  var_samp?: Maybe<Default_Departments_Var_Samp_Fields>
  variance?: Maybe<Default_Departments_Variance_Fields>
}

/** aggregate fields of "default_departments" */
export type Default_Departments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Default_Departments_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "default_departments" */
export type Default_Departments_Aggregate_Order_By = {
  avg?: Maybe<Default_Departments_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Default_Departments_Max_Order_By>
  min?: Maybe<Default_Departments_Min_Order_By>
  stddev?: Maybe<Default_Departments_Stddev_Order_By>
  stddev_pop?: Maybe<Default_Departments_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Default_Departments_Stddev_Samp_Order_By>
  sum?: Maybe<Default_Departments_Sum_Order_By>
  var_pop?: Maybe<Default_Departments_Var_Pop_Order_By>
  var_samp?: Maybe<Default_Departments_Var_Samp_Order_By>
  variance?: Maybe<Default_Departments_Variance_Order_By>
}

/** input type for inserting array relation for remote table "default_departments" */
export type Default_Departments_Arr_Rel_Insert_Input = {
  data: Array<Default_Departments_Insert_Input>
  on_conflict?: Maybe<Default_Departments_On_Conflict>
}

/** aggregate avg on columns */
export type Default_Departments_Avg_Fields = {
  __typename?: 'default_departments_avg_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "default_departments" */
export type Default_Departments_Avg_Order_By = {
  order?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "default_departments". All fields are combined with a logical 'AND'. */
export type Default_Departments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Default_Departments_Bool_Exp>>>
  _not?: Maybe<Default_Departments_Bool_Exp>
  _or?: Maybe<Array<Maybe<Default_Departments_Bool_Exp>>>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  order?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "default_departments" */
export enum Default_Departments_Constraint {
  /** unique or primary key constraint */
  DefaultDepartmentsNameKey = 'default_departments_name_key',
  /** unique or primary key constraint */
  DefaultDepartmentsPkey = 'default_departments_pkey'
}

/** input type for incrementing integer column in table "default_departments" */
export type Default_Departments_Inc_Input = {
  order?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "default_departments" */
export type Default_Departments_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Default_Departments_Max_Fields = {
  __typename?: 'default_departments_max_fields'
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "default_departments" */
export type Default_Departments_Max_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Default_Departments_Min_Fields = {
  __typename?: 'default_departments_min_fields'
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "default_departments" */
export type Default_Departments_Min_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** response of any mutation on the table "default_departments" */
export type Default_Departments_Mutation_Response = {
  __typename?: 'default_departments_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Default_Departments>
}

/** input type for inserting object relation for remote table "default_departments" */
export type Default_Departments_Obj_Rel_Insert_Input = {
  data: Default_Departments_Insert_Input
  on_conflict?: Maybe<Default_Departments_On_Conflict>
}

/** on conflict condition type for table "default_departments" */
export type Default_Departments_On_Conflict = {
  constraint: Default_Departments_Constraint
  update_columns: Array<Default_Departments_Update_Column>
  where?: Maybe<Default_Departments_Bool_Exp>
}

/** ordering options when selecting data from "default_departments" */
export type Default_Departments_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** primary key columns input for table: "default_departments" */
export type Default_Departments_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "default_departments" */
export enum Default_Departments_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order'
}

/** input type for updating data in table "default_departments" */
export type Default_Departments_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Default_Departments_Stddev_Fields = {
  __typename?: 'default_departments_stddev_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "default_departments" */
export type Default_Departments_Stddev_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Default_Departments_Stddev_Pop_Fields = {
  __typename?: 'default_departments_stddev_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "default_departments" */
export type Default_Departments_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Default_Departments_Stddev_Samp_Fields = {
  __typename?: 'default_departments_stddev_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "default_departments" */
export type Default_Departments_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Default_Departments_Sum_Fields = {
  __typename?: 'default_departments_sum_fields'
  order?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "default_departments" */
export type Default_Departments_Sum_Order_By = {
  order?: Maybe<Order_By>
}

/** update columns of table "default_departments" */
export enum Default_Departments_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order'
}

/** aggregate var_pop on columns */
export type Default_Departments_Var_Pop_Fields = {
  __typename?: 'default_departments_var_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "default_departments" */
export type Default_Departments_Var_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Default_Departments_Var_Samp_Fields = {
  __typename?: 'default_departments_var_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "default_departments" */
export type Default_Departments_Var_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Default_Departments_Variance_Fields = {
  __typename?: 'default_departments_variance_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "default_departments" */
export type Default_Departments_Variance_Order_By = {
  order?: Maybe<Order_By>
}

/**
 * Должности при создании базы
 *
 *
 * columns and relationships of "default_positions"
 */
export type Default_Positions = {
  __typename?: 'default_positions'
  id: Scalars['uuid']
  name: Scalars['String']
  order: Scalars['Int']
}

/** aggregated selection of "default_positions" */
export type Default_Positions_Aggregate = {
  __typename?: 'default_positions_aggregate'
  aggregate?: Maybe<Default_Positions_Aggregate_Fields>
  nodes: Array<Default_Positions>
}

/** aggregate fields of "default_positions" */
export type Default_Positions_Aggregate_Fields = {
  __typename?: 'default_positions_aggregate_fields'
  avg?: Maybe<Default_Positions_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Default_Positions_Max_Fields>
  min?: Maybe<Default_Positions_Min_Fields>
  stddev?: Maybe<Default_Positions_Stddev_Fields>
  stddev_pop?: Maybe<Default_Positions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Default_Positions_Stddev_Samp_Fields>
  sum?: Maybe<Default_Positions_Sum_Fields>
  var_pop?: Maybe<Default_Positions_Var_Pop_Fields>
  var_samp?: Maybe<Default_Positions_Var_Samp_Fields>
  variance?: Maybe<Default_Positions_Variance_Fields>
}

/** aggregate fields of "default_positions" */
export type Default_Positions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Default_Positions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "default_positions" */
export type Default_Positions_Aggregate_Order_By = {
  avg?: Maybe<Default_Positions_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Default_Positions_Max_Order_By>
  min?: Maybe<Default_Positions_Min_Order_By>
  stddev?: Maybe<Default_Positions_Stddev_Order_By>
  stddev_pop?: Maybe<Default_Positions_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Default_Positions_Stddev_Samp_Order_By>
  sum?: Maybe<Default_Positions_Sum_Order_By>
  var_pop?: Maybe<Default_Positions_Var_Pop_Order_By>
  var_samp?: Maybe<Default_Positions_Var_Samp_Order_By>
  variance?: Maybe<Default_Positions_Variance_Order_By>
}

/** input type for inserting array relation for remote table "default_positions" */
export type Default_Positions_Arr_Rel_Insert_Input = {
  data: Array<Default_Positions_Insert_Input>
  on_conflict?: Maybe<Default_Positions_On_Conflict>
}

/** aggregate avg on columns */
export type Default_Positions_Avg_Fields = {
  __typename?: 'default_positions_avg_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "default_positions" */
export type Default_Positions_Avg_Order_By = {
  order?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "default_positions". All fields are combined with a logical 'AND'. */
export type Default_Positions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Default_Positions_Bool_Exp>>>
  _not?: Maybe<Default_Positions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Default_Positions_Bool_Exp>>>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  order?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "default_positions" */
export enum Default_Positions_Constraint {
  /** unique or primary key constraint */
  DefaultPositionsNameKey = 'default_positions_name_key',
  /** unique or primary key constraint */
  DefaultPositionsPkey = 'default_positions_pkey'
}

/** input type for incrementing integer column in table "default_positions" */
export type Default_Positions_Inc_Input = {
  order?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "default_positions" */
export type Default_Positions_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Default_Positions_Max_Fields = {
  __typename?: 'default_positions_max_fields'
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "default_positions" */
export type Default_Positions_Max_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Default_Positions_Min_Fields = {
  __typename?: 'default_positions_min_fields'
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "default_positions" */
export type Default_Positions_Min_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** response of any mutation on the table "default_positions" */
export type Default_Positions_Mutation_Response = {
  __typename?: 'default_positions_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Default_Positions>
}

/** input type for inserting object relation for remote table "default_positions" */
export type Default_Positions_Obj_Rel_Insert_Input = {
  data: Default_Positions_Insert_Input
  on_conflict?: Maybe<Default_Positions_On_Conflict>
}

/** on conflict condition type for table "default_positions" */
export type Default_Positions_On_Conflict = {
  constraint: Default_Positions_Constraint
  update_columns: Array<Default_Positions_Update_Column>
  where?: Maybe<Default_Positions_Bool_Exp>
}

/** ordering options when selecting data from "default_positions" */
export type Default_Positions_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** primary key columns input for table: "default_positions" */
export type Default_Positions_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "default_positions" */
export enum Default_Positions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order'
}

/** input type for updating data in table "default_positions" */
export type Default_Positions_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Default_Positions_Stddev_Fields = {
  __typename?: 'default_positions_stddev_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "default_positions" */
export type Default_Positions_Stddev_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Default_Positions_Stddev_Pop_Fields = {
  __typename?: 'default_positions_stddev_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "default_positions" */
export type Default_Positions_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Default_Positions_Stddev_Samp_Fields = {
  __typename?: 'default_positions_stddev_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "default_positions" */
export type Default_Positions_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Default_Positions_Sum_Fields = {
  __typename?: 'default_positions_sum_fields'
  order?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "default_positions" */
export type Default_Positions_Sum_Order_By = {
  order?: Maybe<Order_By>
}

/** update columns of table "default_positions" */
export enum Default_Positions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order'
}

/** aggregate var_pop on columns */
export type Default_Positions_Var_Pop_Fields = {
  __typename?: 'default_positions_var_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "default_positions" */
export type Default_Positions_Var_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Default_Positions_Var_Samp_Fields = {
  __typename?: 'default_positions_var_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "default_positions" */
export type Default_Positions_Var_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Default_Positions_Variance_Fields = {
  __typename?: 'default_positions_variance_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "default_positions" */
export type Default_Positions_Variance_Order_By = {
  order?: Maybe<Order_By>
}

/**
 * Статусы при создании базы
 *
 *
 * columns and relationships of "default_statuses"
 */
export type Default_Statuses = {
  __typename?: 'default_statuses'
  id: Scalars['uuid']
  name: Scalars['String']
  order: Scalars['Int']
}

/** aggregated selection of "default_statuses" */
export type Default_Statuses_Aggregate = {
  __typename?: 'default_statuses_aggregate'
  aggregate?: Maybe<Default_Statuses_Aggregate_Fields>
  nodes: Array<Default_Statuses>
}

/** aggregate fields of "default_statuses" */
export type Default_Statuses_Aggregate_Fields = {
  __typename?: 'default_statuses_aggregate_fields'
  avg?: Maybe<Default_Statuses_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Default_Statuses_Max_Fields>
  min?: Maybe<Default_Statuses_Min_Fields>
  stddev?: Maybe<Default_Statuses_Stddev_Fields>
  stddev_pop?: Maybe<Default_Statuses_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Default_Statuses_Stddev_Samp_Fields>
  sum?: Maybe<Default_Statuses_Sum_Fields>
  var_pop?: Maybe<Default_Statuses_Var_Pop_Fields>
  var_samp?: Maybe<Default_Statuses_Var_Samp_Fields>
  variance?: Maybe<Default_Statuses_Variance_Fields>
}

/** aggregate fields of "default_statuses" */
export type Default_Statuses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Default_Statuses_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "default_statuses" */
export type Default_Statuses_Aggregate_Order_By = {
  avg?: Maybe<Default_Statuses_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Default_Statuses_Max_Order_By>
  min?: Maybe<Default_Statuses_Min_Order_By>
  stddev?: Maybe<Default_Statuses_Stddev_Order_By>
  stddev_pop?: Maybe<Default_Statuses_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Default_Statuses_Stddev_Samp_Order_By>
  sum?: Maybe<Default_Statuses_Sum_Order_By>
  var_pop?: Maybe<Default_Statuses_Var_Pop_Order_By>
  var_samp?: Maybe<Default_Statuses_Var_Samp_Order_By>
  variance?: Maybe<Default_Statuses_Variance_Order_By>
}

/** input type for inserting array relation for remote table "default_statuses" */
export type Default_Statuses_Arr_Rel_Insert_Input = {
  data: Array<Default_Statuses_Insert_Input>
  on_conflict?: Maybe<Default_Statuses_On_Conflict>
}

/** aggregate avg on columns */
export type Default_Statuses_Avg_Fields = {
  __typename?: 'default_statuses_avg_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "default_statuses" */
export type Default_Statuses_Avg_Order_By = {
  order?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "default_statuses". All fields are combined with a logical 'AND'. */
export type Default_Statuses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Default_Statuses_Bool_Exp>>>
  _not?: Maybe<Default_Statuses_Bool_Exp>
  _or?: Maybe<Array<Maybe<Default_Statuses_Bool_Exp>>>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  order?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "default_statuses" */
export enum Default_Statuses_Constraint {
  /** unique or primary key constraint */
  DefaultStatusesNameKey = 'default_statuses_name_key',
  /** unique or primary key constraint */
  DefaultStatusesPkey = 'default_statuses_pkey'
}

/** input type for incrementing integer column in table "default_statuses" */
export type Default_Statuses_Inc_Input = {
  order?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "default_statuses" */
export type Default_Statuses_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Default_Statuses_Max_Fields = {
  __typename?: 'default_statuses_max_fields'
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "default_statuses" */
export type Default_Statuses_Max_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Default_Statuses_Min_Fields = {
  __typename?: 'default_statuses_min_fields'
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "default_statuses" */
export type Default_Statuses_Min_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** response of any mutation on the table "default_statuses" */
export type Default_Statuses_Mutation_Response = {
  __typename?: 'default_statuses_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Default_Statuses>
}

/** input type for inserting object relation for remote table "default_statuses" */
export type Default_Statuses_Obj_Rel_Insert_Input = {
  data: Default_Statuses_Insert_Input
  on_conflict?: Maybe<Default_Statuses_On_Conflict>
}

/** on conflict condition type for table "default_statuses" */
export type Default_Statuses_On_Conflict = {
  constraint: Default_Statuses_Constraint
  update_columns: Array<Default_Statuses_Update_Column>
  where?: Maybe<Default_Statuses_Bool_Exp>
}

/** ordering options when selecting data from "default_statuses" */
export type Default_Statuses_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** primary key columns input for table: "default_statuses" */
export type Default_Statuses_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "default_statuses" */
export enum Default_Statuses_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order'
}

/** input type for updating data in table "default_statuses" */
export type Default_Statuses_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Default_Statuses_Stddev_Fields = {
  __typename?: 'default_statuses_stddev_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "default_statuses" */
export type Default_Statuses_Stddev_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Default_Statuses_Stddev_Pop_Fields = {
  __typename?: 'default_statuses_stddev_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "default_statuses" */
export type Default_Statuses_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Default_Statuses_Stddev_Samp_Fields = {
  __typename?: 'default_statuses_stddev_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "default_statuses" */
export type Default_Statuses_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Default_Statuses_Sum_Fields = {
  __typename?: 'default_statuses_sum_fields'
  order?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "default_statuses" */
export type Default_Statuses_Sum_Order_By = {
  order?: Maybe<Order_By>
}

/** update columns of table "default_statuses" */
export enum Default_Statuses_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order'
}

/** aggregate var_pop on columns */
export type Default_Statuses_Var_Pop_Fields = {
  __typename?: 'default_statuses_var_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "default_statuses" */
export type Default_Statuses_Var_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Default_Statuses_Var_Samp_Fields = {
  __typename?: 'default_statuses_var_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "default_statuses" */
export type Default_Statuses_Var_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Default_Statuses_Variance_Fields = {
  __typename?: 'default_statuses_variance_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "default_statuses" */
export type Default_Statuses_Variance_Order_By = {
  order?: Maybe<Order_By>
}

/**
 * Отделы
 *
 *
 * columns and relationships of "departments"
 */
export type Departments = {
  __typename?: 'departments'
  /** An object relationship */
  base: Bases
  base_id: Scalars['uuid']
  created_at: Scalars['timestamptz']
  id: Scalars['uuid']
  name: Scalars['String']
  updated_at: Scalars['timestamptz']
  /** An array relationship */
  users: Array<Users_Departments>
  /** An aggregated array relationship */
  users_aggregate: Users_Departments_Aggregate
}

/**
 * Отделы
 *
 *
 * columns and relationships of "departments"
 */
export type DepartmentsUsersArgs = {
  distinct_on?: Maybe<Array<Users_Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Departments_Order_By>>
  where?: Maybe<Users_Departments_Bool_Exp>
}

/**
 * Отделы
 *
 *
 * columns and relationships of "departments"
 */
export type DepartmentsUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Departments_Order_By>>
  where?: Maybe<Users_Departments_Bool_Exp>
}

/** aggregated selection of "departments" */
export type Departments_Aggregate = {
  __typename?: 'departments_aggregate'
  aggregate?: Maybe<Departments_Aggregate_Fields>
  nodes: Array<Departments>
}

/** aggregate fields of "departments" */
export type Departments_Aggregate_Fields = {
  __typename?: 'departments_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Departments_Max_Fields>
  min?: Maybe<Departments_Min_Fields>
}

/** aggregate fields of "departments" */
export type Departments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Departments_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "departments" */
export type Departments_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Departments_Max_Order_By>
  min?: Maybe<Departments_Min_Order_By>
}

/** input type for inserting array relation for remote table "departments" */
export type Departments_Arr_Rel_Insert_Input = {
  data: Array<Departments_Insert_Input>
  on_conflict?: Maybe<Departments_On_Conflict>
}

/** Boolean expression to filter rows from the table "departments". All fields are combined with a logical 'AND'. */
export type Departments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Departments_Bool_Exp>>>
  _not?: Maybe<Departments_Bool_Exp>
  _or?: Maybe<Array<Maybe<Departments_Bool_Exp>>>
  base?: Maybe<Bases_Bool_Exp>
  base_id?: Maybe<Uuid_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  users?: Maybe<Users_Departments_Bool_Exp>
}

/** unique or primary key constraints on table "departments" */
export enum Departments_Constraint {
  /** unique or primary key constraint */
  DepartmentsBaseIdNameKey = 'departments_base_id_name_key',
  /** unique or primary key constraint */
  DepartmentsPkey = 'departments_pkey'
}

/** input type for inserting data into table "departments" */
export type Departments_Insert_Input = {
  base?: Maybe<Bases_Obj_Rel_Insert_Input>
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  users?: Maybe<Users_Departments_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Departments_Max_Fields = {
  __typename?: 'departments_max_fields'
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "departments" */
export type Departments_Max_Order_By = {
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Departments_Min_Fields = {
  __typename?: 'departments_min_fields'
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "departments" */
export type Departments_Min_Order_By = {
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "departments" */
export type Departments_Mutation_Response = {
  __typename?: 'departments_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Departments>
}

/** input type for inserting object relation for remote table "departments" */
export type Departments_Obj_Rel_Insert_Input = {
  data: Departments_Insert_Input
  on_conflict?: Maybe<Departments_On_Conflict>
}

/** on conflict condition type for table "departments" */
export type Departments_On_Conflict = {
  constraint: Departments_Constraint
  update_columns: Array<Departments_Update_Column>
  where?: Maybe<Departments_Bool_Exp>
}

/** ordering options when selecting data from "departments" */
export type Departments_Order_By = {
  base?: Maybe<Bases_Order_By>
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  users_aggregate?: Maybe<Users_Departments_Aggregate_Order_By>
}

/** primary key columns input for table: "departments" */
export type Departments_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "departments" */
export enum Departments_Select_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "departments" */
export type Departments_Set_Input = {
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "departments" */
export enum Departments_Update_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/**
 * Избранное
 *
 *
 * columns and relationships of "favorites"
 */
export type Favorites = {
  __typename?: 'favorites'
  /** An object relationship */
  article: Articles
  article_id: Scalars['uuid']
  id: Scalars['uuid']
  owner_id: Scalars['uuid']
  /** An object relationship */
  user: Users
}

/** aggregated selection of "favorites" */
export type Favorites_Aggregate = {
  __typename?: 'favorites_aggregate'
  aggregate?: Maybe<Favorites_Aggregate_Fields>
  nodes: Array<Favorites>
}

/** aggregate fields of "favorites" */
export type Favorites_Aggregate_Fields = {
  __typename?: 'favorites_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Favorites_Max_Fields>
  min?: Maybe<Favorites_Min_Fields>
}

/** aggregate fields of "favorites" */
export type Favorites_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Favorites_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "favorites" */
export type Favorites_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Favorites_Max_Order_By>
  min?: Maybe<Favorites_Min_Order_By>
}

/** input type for inserting array relation for remote table "favorites" */
export type Favorites_Arr_Rel_Insert_Input = {
  data: Array<Favorites_Insert_Input>
  on_conflict?: Maybe<Favorites_On_Conflict>
}

/** Boolean expression to filter rows from the table "favorites". All fields are combined with a logical 'AND'. */
export type Favorites_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Favorites_Bool_Exp>>>
  _not?: Maybe<Favorites_Bool_Exp>
  _or?: Maybe<Array<Maybe<Favorites_Bool_Exp>>>
  article?: Maybe<Articles_Bool_Exp>
  article_id?: Maybe<Uuid_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  owner_id?: Maybe<Uuid_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "favorites" */
export enum Favorites_Constraint {
  /** unique or primary key constraint */
  FavoritesOwnerIdArticleIdKey = 'favorites_owner_id_article_id_key',
  /** unique or primary key constraint */
  FavoritesPkey = 'favorites_pkey'
}

/** input type for inserting data into table "favorites" */
export type Favorites_Insert_Input = {
  article?: Maybe<Articles_Obj_Rel_Insert_Input>
  article_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  owner_id?: Maybe<Scalars['uuid']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Favorites_Max_Fields = {
  __typename?: 'favorites_max_fields'
  article_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  owner_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "favorites" */
export type Favorites_Max_Order_By = {
  article_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  owner_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Favorites_Min_Fields = {
  __typename?: 'favorites_min_fields'
  article_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  owner_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "favorites" */
export type Favorites_Min_Order_By = {
  article_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  owner_id?: Maybe<Order_By>
}

/** response of any mutation on the table "favorites" */
export type Favorites_Mutation_Response = {
  __typename?: 'favorites_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Favorites>
}

/** input type for inserting object relation for remote table "favorites" */
export type Favorites_Obj_Rel_Insert_Input = {
  data: Favorites_Insert_Input
  on_conflict?: Maybe<Favorites_On_Conflict>
}

/** on conflict condition type for table "favorites" */
export type Favorites_On_Conflict = {
  constraint: Favorites_Constraint
  update_columns: Array<Favorites_Update_Column>
  where?: Maybe<Favorites_Bool_Exp>
}

/** ordering options when selecting data from "favorites" */
export type Favorites_Order_By = {
  article?: Maybe<Articles_Order_By>
  article_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  owner_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
}

/** primary key columns input for table: "favorites" */
export type Favorites_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "favorites" */
export enum Favorites_Select_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'owner_id'
}

/** input type for updating data in table "favorites" */
export type Favorites_Set_Input = {
  article_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  owner_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "favorites" */
export enum Favorites_Update_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'owner_id'
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/**
 * Инвайты
 *
 *
 * columns and relationships of "invites"
 */
export type Invites = {
  __typename?: 'invites'
  /** An object relationship */
  base: Bases
  base_id: Scalars['uuid']
  created_at: Scalars['timestamptz']
  email?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  permission: Permission_Enum
  /** An object relationship */
  permission_item: Permission
  updated_at: Scalars['timestamptz']
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregated selection of "invites" */
export type Invites_Aggregate = {
  __typename?: 'invites_aggregate'
  aggregate?: Maybe<Invites_Aggregate_Fields>
  nodes: Array<Invites>
}

/** aggregate fields of "invites" */
export type Invites_Aggregate_Fields = {
  __typename?: 'invites_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Invites_Max_Fields>
  min?: Maybe<Invites_Min_Fields>
}

/** aggregate fields of "invites" */
export type Invites_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Invites_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "invites" */
export type Invites_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Invites_Max_Order_By>
  min?: Maybe<Invites_Min_Order_By>
}

/** input type for inserting array relation for remote table "invites" */
export type Invites_Arr_Rel_Insert_Input = {
  data: Array<Invites_Insert_Input>
  on_conflict?: Maybe<Invites_On_Conflict>
}

/** Boolean expression to filter rows from the table "invites". All fields are combined with a logical 'AND'. */
export type Invites_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Invites_Bool_Exp>>>
  _not?: Maybe<Invites_Bool_Exp>
  _or?: Maybe<Array<Maybe<Invites_Bool_Exp>>>
  base?: Maybe<Bases_Bool_Exp>
  base_id?: Maybe<Uuid_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  permission?: Maybe<Permission_Enum_Comparison_Exp>
  permission_item?: Maybe<Permission_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "invites" */
export enum Invites_Constraint {
  /** unique or primary key constraint */
  InvitesEmailBaseIdKey = 'invites_email_base_id_key',
  /** unique or primary key constraint */
  InvitesPkey = 'invites_pkey',
  /** unique or primary key constraint */
  InvitesUserIdBaseIdKey = 'invites_user_id_base_id_key'
}

/** input type for inserting data into table "invites" */
export type Invites_Insert_Input = {
  base?: Maybe<Bases_Obj_Rel_Insert_Input>
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  permission?: Maybe<Permission_Enum>
  permission_item?: Maybe<Permission_Obj_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Invites_Max_Fields = {
  __typename?: 'invites_max_fields'
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "invites" */
export type Invites_Max_Order_By = {
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Invites_Min_Fields = {
  __typename?: 'invites_min_fields'
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "invites" */
export type Invites_Min_Order_By = {
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "invites" */
export type Invites_Mutation_Response = {
  __typename?: 'invites_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Invites>
}

/** input type for inserting object relation for remote table "invites" */
export type Invites_Obj_Rel_Insert_Input = {
  data: Invites_Insert_Input
  on_conflict?: Maybe<Invites_On_Conflict>
}

/** on conflict condition type for table "invites" */
export type Invites_On_Conflict = {
  constraint: Invites_Constraint
  update_columns: Array<Invites_Update_Column>
  where?: Maybe<Invites_Bool_Exp>
}

/** ordering options when selecting data from "invites" */
export type Invites_Order_By = {
  base?: Maybe<Bases_Order_By>
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  permission?: Maybe<Order_By>
  permission_item?: Maybe<Permission_Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: "invites" */
export type Invites_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "invites" */
export enum Invites_Select_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Permission = 'permission',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "invites" */
export type Invites_Set_Input = {
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  permission?: Maybe<Permission_Enum>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "invites" */
export enum Invites_Update_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Permission = 'permission',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>
  _eq?: Maybe<Scalars['jsonb']>
  _gt?: Maybe<Scalars['jsonb']>
  _gte?: Maybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>
  _in?: Maybe<Array<Scalars['jsonb']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['jsonb']>
  _lte?: Maybe<Scalars['jsonb']>
  _neq?: Maybe<Scalars['jsonb']>
  _nin?: Maybe<Array<Scalars['jsonb']>>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "access" */
  delete_access?: Maybe<Access_Mutation_Response>
  /** delete single row from the table: "access" */
  delete_access_by_pk?: Maybe<Access>
  /** delete data from the table: "article_type" */
  delete_article_type?: Maybe<Article_Type_Mutation_Response>
  /** delete single row from the table: "article_type" */
  delete_article_type_by_pk?: Maybe<Article_Type>
  /** delete data from the table: "articles" */
  delete_articles?: Maybe<Articles_Mutation_Response>
  /** delete single row from the table: "articles" */
  delete_articles_by_pk?: Maybe<Articles>
  /** delete data from the table: "articles_tags" */
  delete_articles_tags?: Maybe<Articles_Tags_Mutation_Response>
  /** delete single row from the table: "articles_tags" */
  delete_articles_tags_by_pk?: Maybe<Articles_Tags>
  /** delete data from the table: "auth.account_providers" */
  delete_auth_account_providers?: Maybe<
    Auth_Account_Providers_Mutation_Response
  >
  /** delete single row from the table: "auth.account_providers" */
  delete_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>
  /** delete data from the table: "auth.account_roles" */
  delete_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>
  /** delete single row from the table: "auth.account_roles" */
  delete_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>
  /** delete data from the table: "auth.accounts" */
  delete_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>
  /** delete single row from the table: "auth.accounts" */
  delete_auth_accounts_by_pk?: Maybe<Auth_Accounts>
  /** delete data from the table: "auth.providers" */
  delete_auth_providers?: Maybe<Auth_Providers_Mutation_Response>
  /** delete single row from the table: "auth.providers" */
  delete_auth_providers_by_pk?: Maybe<Auth_Providers>
  /** delete data from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>
  /** delete single row from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>
  /** delete data from the table: "auth.roles" */
  delete_auth_roles?: Maybe<Auth_Roles_Mutation_Response>
  /** delete single row from the table: "auth.roles" */
  delete_auth_roles_by_pk?: Maybe<Auth_Roles>
  /** delete data from the table: "bases" */
  delete_bases?: Maybe<Bases_Mutation_Response>
  /** delete single row from the table: "bases" */
  delete_bases_by_pk?: Maybe<Bases>
  /** delete data from the table: "categories_of_articles" */
  delete_categories_of_articles?: Maybe<
    Categories_Of_Articles_Mutation_Response
  >
  /** delete single row from the table: "categories_of_articles" */
  delete_categories_of_articles_by_pk?: Maybe<Categories_Of_Articles>
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>
  /** delete data from the table: "default_categories_of_articles" */
  delete_default_categories_of_articles?: Maybe<
    Default_Categories_Of_Articles_Mutation_Response
  >
  /** delete single row from the table: "default_categories_of_articles" */
  delete_default_categories_of_articles_by_pk?: Maybe<
    Default_Categories_Of_Articles
  >
  /** delete data from the table: "default_departments" */
  delete_default_departments?: Maybe<Default_Departments_Mutation_Response>
  /** delete single row from the table: "default_departments" */
  delete_default_departments_by_pk?: Maybe<Default_Departments>
  /** delete data from the table: "default_positions" */
  delete_default_positions?: Maybe<Default_Positions_Mutation_Response>
  /** delete single row from the table: "default_positions" */
  delete_default_positions_by_pk?: Maybe<Default_Positions>
  /** delete data from the table: "default_statuses" */
  delete_default_statuses?: Maybe<Default_Statuses_Mutation_Response>
  /** delete single row from the table: "default_statuses" */
  delete_default_statuses_by_pk?: Maybe<Default_Statuses>
  /** delete data from the table: "departments" */
  delete_departments?: Maybe<Departments_Mutation_Response>
  /** delete single row from the table: "departments" */
  delete_departments_by_pk?: Maybe<Departments>
  /** delete data from the table: "favorites" */
  delete_favorites?: Maybe<Favorites_Mutation_Response>
  /** delete single row from the table: "favorites" */
  delete_favorites_by_pk?: Maybe<Favorites>
  /** delete data from the table: "invites" */
  delete_invites?: Maybe<Invites_Mutation_Response>
  /** delete single row from the table: "invites" */
  delete_invites_by_pk?: Maybe<Invites>
  /** delete data from the table: "permission" */
  delete_permission?: Maybe<Permission_Mutation_Response>
  /** delete single row from the table: "permission" */
  delete_permission_by_pk?: Maybe<Permission>
  /** delete data from the table: "positions" */
  delete_positions?: Maybe<Positions_Mutation_Response>
  /** delete single row from the table: "positions" */
  delete_positions_by_pk?: Maybe<Positions>
  /** delete data from the table: "statuses" */
  delete_statuses?: Maybe<Statuses_Mutation_Response>
  /** delete single row from the table: "statuses" */
  delete_statuses_by_pk?: Maybe<Statuses>
  /** delete data from the table: "tags" */
  delete_tags?: Maybe<Tags_Mutation_Response>
  /** delete single row from the table: "tags" */
  delete_tags_by_pk?: Maybe<Tags>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** delete data from the table: "users_departments" */
  delete_users_departments?: Maybe<Users_Departments_Mutation_Response>
  /** delete single row from the table: "users_departments" */
  delete_users_departments_by_pk?: Maybe<Users_Departments>
  /** delete data from the table: "users_in_bases" */
  delete_users_in_bases?: Maybe<Users_In_Bases_Mutation_Response>
  /** delete single row from the table: "users_in_bases" */
  delete_users_in_bases_by_pk?: Maybe<Users_In_Bases>
  /** delete data from the table: "users_permissions" */
  delete_users_permissions?: Maybe<Users_Permissions_Mutation_Response>
  /** delete single row from the table: "users_permissions" */
  delete_users_permissions_by_pk?: Maybe<Users_Permissions>
  /** delete data from the table: "users_positions" */
  delete_users_positions?: Maybe<Users_Positions_Mutation_Response>
  /** delete single row from the table: "users_positions" */
  delete_users_positions_by_pk?: Maybe<Users_Positions>
  /** delete data from the table: "users_read_articles" */
  delete_users_read_articles?: Maybe<Users_Read_Articles_Mutation_Response>
  /** delete single row from the table: "users_read_articles" */
  delete_users_read_articles_by_pk?: Maybe<Users_Read_Articles>
  /** delete data from the table: "users_statuses" */
  delete_users_statuses?: Maybe<Users_Statuses_Mutation_Response>
  /** delete single row from the table: "users_statuses" */
  delete_users_statuses_by_pk?: Maybe<Users_Statuses>
  /** insert data into the table: "access" */
  insert_access?: Maybe<Access_Mutation_Response>
  /** insert a single row into the table: "access" */
  insert_access_one?: Maybe<Access>
  /** insert data into the table: "article_type" */
  insert_article_type?: Maybe<Article_Type_Mutation_Response>
  /** insert a single row into the table: "article_type" */
  insert_article_type_one?: Maybe<Article_Type>
  /** insert data into the table: "articles" */
  insert_articles?: Maybe<Articles_Mutation_Response>
  /** insert a single row into the table: "articles" */
  insert_articles_one?: Maybe<Articles>
  /** insert data into the table: "articles_tags" */
  insert_articles_tags?: Maybe<Articles_Tags_Mutation_Response>
  /** insert a single row into the table: "articles_tags" */
  insert_articles_tags_one?: Maybe<Articles_Tags>
  /** insert data into the table: "auth.account_providers" */
  insert_auth_account_providers?: Maybe<
    Auth_Account_Providers_Mutation_Response
  >
  /** insert a single row into the table: "auth.account_providers" */
  insert_auth_account_providers_one?: Maybe<Auth_Account_Providers>
  /** insert data into the table: "auth.account_roles" */
  insert_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>
  /** insert a single row into the table: "auth.account_roles" */
  insert_auth_account_roles_one?: Maybe<Auth_Account_Roles>
  /** insert data into the table: "auth.accounts" */
  insert_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>
  /** insert a single row into the table: "auth.accounts" */
  insert_auth_accounts_one?: Maybe<Auth_Accounts>
  /** insert data into the table: "auth.providers" */
  insert_auth_providers?: Maybe<Auth_Providers_Mutation_Response>
  /** insert a single row into the table: "auth.providers" */
  insert_auth_providers_one?: Maybe<Auth_Providers>
  /** insert data into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>
  /** insert a single row into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens_one?: Maybe<Auth_Refresh_Tokens>
  /** insert data into the table: "auth.roles" */
  insert_auth_roles?: Maybe<Auth_Roles_Mutation_Response>
  /** insert a single row into the table: "auth.roles" */
  insert_auth_roles_one?: Maybe<Auth_Roles>
  /** insert data into the table: "bases" */
  insert_bases?: Maybe<Bases_Mutation_Response>
  /** insert a single row into the table: "bases" */
  insert_bases_one?: Maybe<Bases>
  /** insert data into the table: "categories_of_articles" */
  insert_categories_of_articles?: Maybe<
    Categories_Of_Articles_Mutation_Response
  >
  /** insert a single row into the table: "categories_of_articles" */
  insert_categories_of_articles_one?: Maybe<Categories_Of_Articles>
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>
  /** insert data into the table: "default_categories_of_articles" */
  insert_default_categories_of_articles?: Maybe<
    Default_Categories_Of_Articles_Mutation_Response
  >
  /** insert a single row into the table: "default_categories_of_articles" */
  insert_default_categories_of_articles_one?: Maybe<
    Default_Categories_Of_Articles
  >
  /** insert data into the table: "default_departments" */
  insert_default_departments?: Maybe<Default_Departments_Mutation_Response>
  /** insert a single row into the table: "default_departments" */
  insert_default_departments_one?: Maybe<Default_Departments>
  /** insert data into the table: "default_positions" */
  insert_default_positions?: Maybe<Default_Positions_Mutation_Response>
  /** insert a single row into the table: "default_positions" */
  insert_default_positions_one?: Maybe<Default_Positions>
  /** insert data into the table: "default_statuses" */
  insert_default_statuses?: Maybe<Default_Statuses_Mutation_Response>
  /** insert a single row into the table: "default_statuses" */
  insert_default_statuses_one?: Maybe<Default_Statuses>
  /** insert data into the table: "departments" */
  insert_departments?: Maybe<Departments_Mutation_Response>
  /** insert a single row into the table: "departments" */
  insert_departments_one?: Maybe<Departments>
  /** insert data into the table: "favorites" */
  insert_favorites?: Maybe<Favorites_Mutation_Response>
  /** insert a single row into the table: "favorites" */
  insert_favorites_one?: Maybe<Favorites>
  /** insert data into the table: "invites" */
  insert_invites?: Maybe<Invites_Mutation_Response>
  /** insert a single row into the table: "invites" */
  insert_invites_one?: Maybe<Invites>
  /** insert data into the table: "permission" */
  insert_permission?: Maybe<Permission_Mutation_Response>
  /** insert a single row into the table: "permission" */
  insert_permission_one?: Maybe<Permission>
  /** insert data into the table: "positions" */
  insert_positions?: Maybe<Positions_Mutation_Response>
  /** insert a single row into the table: "positions" */
  insert_positions_one?: Maybe<Positions>
  /** insert data into the table: "statuses" */
  insert_statuses?: Maybe<Statuses_Mutation_Response>
  /** insert a single row into the table: "statuses" */
  insert_statuses_one?: Maybe<Statuses>
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<Tags_Mutation_Response>
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert data into the table: "users_departments" */
  insert_users_departments?: Maybe<Users_Departments_Mutation_Response>
  /** insert a single row into the table: "users_departments" */
  insert_users_departments_one?: Maybe<Users_Departments>
  /** insert data into the table: "users_in_bases" */
  insert_users_in_bases?: Maybe<Users_In_Bases_Mutation_Response>
  /** insert a single row into the table: "users_in_bases" */
  insert_users_in_bases_one?: Maybe<Users_In_Bases>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** insert data into the table: "users_permissions" */
  insert_users_permissions?: Maybe<Users_Permissions_Mutation_Response>
  /** insert a single row into the table: "users_permissions" */
  insert_users_permissions_one?: Maybe<Users_Permissions>
  /** insert data into the table: "users_positions" */
  insert_users_positions?: Maybe<Users_Positions_Mutation_Response>
  /** insert a single row into the table: "users_positions" */
  insert_users_positions_one?: Maybe<Users_Positions>
  /** insert data into the table: "users_read_articles" */
  insert_users_read_articles?: Maybe<Users_Read_Articles_Mutation_Response>
  /** insert a single row into the table: "users_read_articles" */
  insert_users_read_articles_one?: Maybe<Users_Read_Articles>
  /** insert data into the table: "users_statuses" */
  insert_users_statuses?: Maybe<Users_Statuses_Mutation_Response>
  /** insert a single row into the table: "users_statuses" */
  insert_users_statuses_one?: Maybe<Users_Statuses>
  /** update data of the table: "access" */
  update_access?: Maybe<Access_Mutation_Response>
  /** update single row of the table: "access" */
  update_access_by_pk?: Maybe<Access>
  /** update data of the table: "article_type" */
  update_article_type?: Maybe<Article_Type_Mutation_Response>
  /** update single row of the table: "article_type" */
  update_article_type_by_pk?: Maybe<Article_Type>
  /** update data of the table: "articles" */
  update_articles?: Maybe<Articles_Mutation_Response>
  /** update single row of the table: "articles" */
  update_articles_by_pk?: Maybe<Articles>
  /** update data of the table: "articles_tags" */
  update_articles_tags?: Maybe<Articles_Tags_Mutation_Response>
  /** update single row of the table: "articles_tags" */
  update_articles_tags_by_pk?: Maybe<Articles_Tags>
  /** update data of the table: "auth.account_providers" */
  update_auth_account_providers?: Maybe<
    Auth_Account_Providers_Mutation_Response
  >
  /** update single row of the table: "auth.account_providers" */
  update_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>
  /** update data of the table: "auth.account_roles" */
  update_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>
  /** update single row of the table: "auth.account_roles" */
  update_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>
  /** update data of the table: "auth.accounts" */
  update_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>
  /** update single row of the table: "auth.accounts" */
  update_auth_accounts_by_pk?: Maybe<Auth_Accounts>
  /** update data of the table: "auth.providers" */
  update_auth_providers?: Maybe<Auth_Providers_Mutation_Response>
  /** update single row of the table: "auth.providers" */
  update_auth_providers_by_pk?: Maybe<Auth_Providers>
  /** update data of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>
  /** update single row of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>
  /** update data of the table: "auth.roles" */
  update_auth_roles?: Maybe<Auth_Roles_Mutation_Response>
  /** update single row of the table: "auth.roles" */
  update_auth_roles_by_pk?: Maybe<Auth_Roles>
  /** update data of the table: "bases" */
  update_bases?: Maybe<Bases_Mutation_Response>
  /** update single row of the table: "bases" */
  update_bases_by_pk?: Maybe<Bases>
  /** update data of the table: "categories_of_articles" */
  update_categories_of_articles?: Maybe<
    Categories_Of_Articles_Mutation_Response
  >
  /** update single row of the table: "categories_of_articles" */
  update_categories_of_articles_by_pk?: Maybe<Categories_Of_Articles>
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>
  /** update data of the table: "default_categories_of_articles" */
  update_default_categories_of_articles?: Maybe<
    Default_Categories_Of_Articles_Mutation_Response
  >
  /** update single row of the table: "default_categories_of_articles" */
  update_default_categories_of_articles_by_pk?: Maybe<
    Default_Categories_Of_Articles
  >
  /** update data of the table: "default_departments" */
  update_default_departments?: Maybe<Default_Departments_Mutation_Response>
  /** update single row of the table: "default_departments" */
  update_default_departments_by_pk?: Maybe<Default_Departments>
  /** update data of the table: "default_positions" */
  update_default_positions?: Maybe<Default_Positions_Mutation_Response>
  /** update single row of the table: "default_positions" */
  update_default_positions_by_pk?: Maybe<Default_Positions>
  /** update data of the table: "default_statuses" */
  update_default_statuses?: Maybe<Default_Statuses_Mutation_Response>
  /** update single row of the table: "default_statuses" */
  update_default_statuses_by_pk?: Maybe<Default_Statuses>
  /** update data of the table: "departments" */
  update_departments?: Maybe<Departments_Mutation_Response>
  /** update single row of the table: "departments" */
  update_departments_by_pk?: Maybe<Departments>
  /** update data of the table: "favorites" */
  update_favorites?: Maybe<Favorites_Mutation_Response>
  /** update single row of the table: "favorites" */
  update_favorites_by_pk?: Maybe<Favorites>
  /** update data of the table: "invites" */
  update_invites?: Maybe<Invites_Mutation_Response>
  /** update single row of the table: "invites" */
  update_invites_by_pk?: Maybe<Invites>
  /** update data of the table: "permission" */
  update_permission?: Maybe<Permission_Mutation_Response>
  /** update single row of the table: "permission" */
  update_permission_by_pk?: Maybe<Permission>
  /** update data of the table: "positions" */
  update_positions?: Maybe<Positions_Mutation_Response>
  /** update single row of the table: "positions" */
  update_positions_by_pk?: Maybe<Positions>
  /** update data of the table: "statuses" */
  update_statuses?: Maybe<Statuses_Mutation_Response>
  /** update single row of the table: "statuses" */
  update_statuses_by_pk?: Maybe<Statuses>
  /** update data of the table: "tags" */
  update_tags?: Maybe<Tags_Mutation_Response>
  /** update single row of the table: "tags" */
  update_tags_by_pk?: Maybe<Tags>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
  /** update data of the table: "users_departments" */
  update_users_departments?: Maybe<Users_Departments_Mutation_Response>
  /** update single row of the table: "users_departments" */
  update_users_departments_by_pk?: Maybe<Users_Departments>
  /** update data of the table: "users_in_bases" */
  update_users_in_bases?: Maybe<Users_In_Bases_Mutation_Response>
  /** update single row of the table: "users_in_bases" */
  update_users_in_bases_by_pk?: Maybe<Users_In_Bases>
  /** update data of the table: "users_permissions" */
  update_users_permissions?: Maybe<Users_Permissions_Mutation_Response>
  /** update single row of the table: "users_permissions" */
  update_users_permissions_by_pk?: Maybe<Users_Permissions>
  /** update data of the table: "users_positions" */
  update_users_positions?: Maybe<Users_Positions_Mutation_Response>
  /** update single row of the table: "users_positions" */
  update_users_positions_by_pk?: Maybe<Users_Positions>
  /** update data of the table: "users_read_articles" */
  update_users_read_articles?: Maybe<Users_Read_Articles_Mutation_Response>
  /** update single row of the table: "users_read_articles" */
  update_users_read_articles_by_pk?: Maybe<Users_Read_Articles>
  /** update data of the table: "users_statuses" */
  update_users_statuses?: Maybe<Users_Statuses_Mutation_Response>
  /** update single row of the table: "users_statuses" */
  update_users_statuses_by_pk?: Maybe<Users_Statuses>
}

/** mutation root */
export type Mutation_RootDelete_AccessArgs = {
  where: Access_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Access_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Article_TypeArgs = {
  where: Article_Type_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Article_Type_By_PkArgs = {
  type: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_ArticlesArgs = {
  where: Articles_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Articles_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Articles_TagsArgs = {
  where: Articles_Tags_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Articles_Tags_By_PkArgs = {
  article_id: Scalars['uuid']
  tag: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Auth_Account_ProvidersArgs = {
  where: Auth_Account_Providers_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Auth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Auth_Account_RolesArgs = {
  where: Auth_Account_Roles_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Auth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Auth_AccountsArgs = {
  where: Auth_Accounts_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Auth_Accounts_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Auth_ProvidersArgs = {
  where: Auth_Providers_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Auth_Providers_By_PkArgs = {
  provider: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_TokensArgs = {
  where: Auth_Refresh_Tokens_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Auth_RolesArgs = {
  where: Auth_Roles_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Auth_Roles_By_PkArgs = {
  role: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_BasesArgs = {
  where: Bases_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Bases_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Categories_Of_ArticlesArgs = {
  where: Categories_Of_Articles_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Categories_Of_Articles_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Default_Categories_Of_ArticlesArgs = {
  where: Default_Categories_Of_Articles_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Default_Categories_Of_Articles_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Default_DepartmentsArgs = {
  where: Default_Departments_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Default_Departments_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Default_PositionsArgs = {
  where: Default_Positions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Default_Positions_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Default_StatusesArgs = {
  where: Default_Statuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Default_Statuses_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_DepartmentsArgs = {
  where: Departments_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Departments_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_FavoritesArgs = {
  where: Favorites_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Favorites_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_InvitesArgs = {
  where: Invites_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Invites_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_PermissionArgs = {
  where: Permission_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Permission_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_PositionsArgs = {
  where: Positions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Positions_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_StatusesArgs = {
  where: Statuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Statuses_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_TagsArgs = {
  where: Tags_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tags_By_PkArgs = {
  tag: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Users_DepartmentsArgs = {
  where: Users_Departments_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_Departments_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Users_In_BasesArgs = {
  where: Users_In_Bases_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_In_Bases_By_PkArgs = {
  base_id: Scalars['uuid']
  user_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Users_PermissionsArgs = {
  where: Users_Permissions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_Permissions_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Users_PositionsArgs = {
  where: Users_Positions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_Positions_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Users_Read_ArticlesArgs = {
  where: Users_Read_Articles_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_Read_Articles_By_PkArgs = {
  article_id: Scalars['uuid']
  user_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Users_StatusesArgs = {
  where: Users_Statuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_Statuses_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootInsert_AccessArgs = {
  objects: Array<Access_Insert_Input>
  on_conflict?: Maybe<Access_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Access_OneArgs = {
  object: Access_Insert_Input
  on_conflict?: Maybe<Access_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Article_TypeArgs = {
  objects: Array<Article_Type_Insert_Input>
  on_conflict?: Maybe<Article_Type_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Article_Type_OneArgs = {
  object: Article_Type_Insert_Input
  on_conflict?: Maybe<Article_Type_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ArticlesArgs = {
  objects: Array<Articles_Insert_Input>
  on_conflict?: Maybe<Articles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Articles_OneArgs = {
  object: Articles_Insert_Input
  on_conflict?: Maybe<Articles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Articles_TagsArgs = {
  objects: Array<Articles_Tags_Insert_Input>
  on_conflict?: Maybe<Articles_Tags_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Articles_Tags_OneArgs = {
  object: Articles_Tags_Insert_Input
  on_conflict?: Maybe<Articles_Tags_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Auth_Account_ProvidersArgs = {
  objects: Array<Auth_Account_Providers_Insert_Input>
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Auth_Account_Providers_OneArgs = {
  object: Auth_Account_Providers_Insert_Input
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Auth_Account_RolesArgs = {
  objects: Array<Auth_Account_Roles_Insert_Input>
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Auth_Account_Roles_OneArgs = {
  object: Auth_Account_Roles_Insert_Input
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Auth_AccountsArgs = {
  objects: Array<Auth_Accounts_Insert_Input>
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Auth_Accounts_OneArgs = {
  object: Auth_Accounts_Insert_Input
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Auth_ProvidersArgs = {
  objects: Array<Auth_Providers_Insert_Input>
  on_conflict?: Maybe<Auth_Providers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Auth_Providers_OneArgs = {
  object: Auth_Providers_Insert_Input
  on_conflict?: Maybe<Auth_Providers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_TokensArgs = {
  objects: Array<Auth_Refresh_Tokens_Insert_Input>
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_Tokens_OneArgs = {
  object: Auth_Refresh_Tokens_Insert_Input
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Auth_RolesArgs = {
  objects: Array<Auth_Roles_Insert_Input>
  on_conflict?: Maybe<Auth_Roles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Auth_Roles_OneArgs = {
  object: Auth_Roles_Insert_Input
  on_conflict?: Maybe<Auth_Roles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BasesArgs = {
  objects: Array<Bases_Insert_Input>
  on_conflict?: Maybe<Bases_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Bases_OneArgs = {
  object: Bases_Insert_Input
  on_conflict?: Maybe<Bases_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Categories_Of_ArticlesArgs = {
  objects: Array<Categories_Of_Articles_Insert_Input>
  on_conflict?: Maybe<Categories_Of_Articles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Categories_Of_Articles_OneArgs = {
  object: Categories_Of_Articles_Insert_Input
  on_conflict?: Maybe<Categories_Of_Articles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>
  on_conflict?: Maybe<Comments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input
  on_conflict?: Maybe<Comments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Default_Categories_Of_ArticlesArgs = {
  objects: Array<Default_Categories_Of_Articles_Insert_Input>
  on_conflict?: Maybe<Default_Categories_Of_Articles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Default_Categories_Of_Articles_OneArgs = {
  object: Default_Categories_Of_Articles_Insert_Input
  on_conflict?: Maybe<Default_Categories_Of_Articles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Default_DepartmentsArgs = {
  objects: Array<Default_Departments_Insert_Input>
  on_conflict?: Maybe<Default_Departments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Default_Departments_OneArgs = {
  object: Default_Departments_Insert_Input
  on_conflict?: Maybe<Default_Departments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Default_PositionsArgs = {
  objects: Array<Default_Positions_Insert_Input>
  on_conflict?: Maybe<Default_Positions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Default_Positions_OneArgs = {
  object: Default_Positions_Insert_Input
  on_conflict?: Maybe<Default_Positions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Default_StatusesArgs = {
  objects: Array<Default_Statuses_Insert_Input>
  on_conflict?: Maybe<Default_Statuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Default_Statuses_OneArgs = {
  object: Default_Statuses_Insert_Input
  on_conflict?: Maybe<Default_Statuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_DepartmentsArgs = {
  objects: Array<Departments_Insert_Input>
  on_conflict?: Maybe<Departments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Departments_OneArgs = {
  object: Departments_Insert_Input
  on_conflict?: Maybe<Departments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_FavoritesArgs = {
  objects: Array<Favorites_Insert_Input>
  on_conflict?: Maybe<Favorites_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Favorites_OneArgs = {
  object: Favorites_Insert_Input
  on_conflict?: Maybe<Favorites_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_InvitesArgs = {
  objects: Array<Invites_Insert_Input>
  on_conflict?: Maybe<Invites_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Invites_OneArgs = {
  object: Invites_Insert_Input
  on_conflict?: Maybe<Invites_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PermissionArgs = {
  objects: Array<Permission_Insert_Input>
  on_conflict?: Maybe<Permission_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Permission_OneArgs = {
  object: Permission_Insert_Input
  on_conflict?: Maybe<Permission_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PositionsArgs = {
  objects: Array<Positions_Insert_Input>
  on_conflict?: Maybe<Positions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Positions_OneArgs = {
  object: Positions_Insert_Input
  on_conflict?: Maybe<Positions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_StatusesArgs = {
  objects: Array<Statuses_Insert_Input>
  on_conflict?: Maybe<Statuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Statuses_OneArgs = {
  object: Statuses_Insert_Input
  on_conflict?: Maybe<Statuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TagsArgs = {
  objects: Array<Tags_Insert_Input>
  on_conflict?: Maybe<Tags_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tags_OneArgs = {
  object: Tags_Insert_Input
  on_conflict?: Maybe<Tags_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_DepartmentsArgs = {
  objects: Array<Users_Departments_Insert_Input>
  on_conflict?: Maybe<Users_Departments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_Departments_OneArgs = {
  object: Users_Departments_Insert_Input
  on_conflict?: Maybe<Users_Departments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_In_BasesArgs = {
  objects: Array<Users_In_Bases_Insert_Input>
  on_conflict?: Maybe<Users_In_Bases_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_In_Bases_OneArgs = {
  object: Users_In_Bases_Insert_Input
  on_conflict?: Maybe<Users_In_Bases_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_PermissionsArgs = {
  objects: Array<Users_Permissions_Insert_Input>
  on_conflict?: Maybe<Users_Permissions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_Permissions_OneArgs = {
  object: Users_Permissions_Insert_Input
  on_conflict?: Maybe<Users_Permissions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_PositionsArgs = {
  objects: Array<Users_Positions_Insert_Input>
  on_conflict?: Maybe<Users_Positions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_Positions_OneArgs = {
  object: Users_Positions_Insert_Input
  on_conflict?: Maybe<Users_Positions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_Read_ArticlesArgs = {
  objects: Array<Users_Read_Articles_Insert_Input>
  on_conflict?: Maybe<Users_Read_Articles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_Read_Articles_OneArgs = {
  object: Users_Read_Articles_Insert_Input
  on_conflict?: Maybe<Users_Read_Articles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_StatusesArgs = {
  objects: Array<Users_Statuses_Insert_Input>
  on_conflict?: Maybe<Users_Statuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_Statuses_OneArgs = {
  object: Users_Statuses_Insert_Input
  on_conflict?: Maybe<Users_Statuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_AccessArgs = {
  _set?: Maybe<Access_Set_Input>
  where: Access_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Access_By_PkArgs = {
  _set?: Maybe<Access_Set_Input>
  pk_columns: Access_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Article_TypeArgs = {
  _set?: Maybe<Article_Type_Set_Input>
  where: Article_Type_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Article_Type_By_PkArgs = {
  _set?: Maybe<Article_Type_Set_Input>
  pk_columns: Article_Type_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_ArticlesArgs = {
  _inc?: Maybe<Articles_Inc_Input>
  _set?: Maybe<Articles_Set_Input>
  where: Articles_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Articles_By_PkArgs = {
  _inc?: Maybe<Articles_Inc_Input>
  _set?: Maybe<Articles_Set_Input>
  pk_columns: Articles_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Articles_TagsArgs = {
  _set?: Maybe<Articles_Tags_Set_Input>
  where: Articles_Tags_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Articles_Tags_By_PkArgs = {
  _set?: Maybe<Articles_Tags_Set_Input>
  pk_columns: Articles_Tags_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Auth_Account_ProvidersArgs = {
  _set?: Maybe<Auth_Account_Providers_Set_Input>
  where: Auth_Account_Providers_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Account_Providers_Set_Input>
  pk_columns: Auth_Account_Providers_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Auth_Account_RolesArgs = {
  _set?: Maybe<Auth_Account_Roles_Set_Input>
  where: Auth_Account_Roles_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Roles_By_PkArgs = {
  _set?: Maybe<Auth_Account_Roles_Set_Input>
  pk_columns: Auth_Account_Roles_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Auth_AccountsArgs = {
  _append?: Maybe<Auth_Accounts_Append_Input>
  _delete_at_path?: Maybe<Auth_Accounts_Delete_At_Path_Input>
  _delete_elem?: Maybe<Auth_Accounts_Delete_Elem_Input>
  _delete_key?: Maybe<Auth_Accounts_Delete_Key_Input>
  _prepend?: Maybe<Auth_Accounts_Prepend_Input>
  _set?: Maybe<Auth_Accounts_Set_Input>
  where: Auth_Accounts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Auth_Accounts_By_PkArgs = {
  _append?: Maybe<Auth_Accounts_Append_Input>
  _delete_at_path?: Maybe<Auth_Accounts_Delete_At_Path_Input>
  _delete_elem?: Maybe<Auth_Accounts_Delete_Elem_Input>
  _delete_key?: Maybe<Auth_Accounts_Delete_Key_Input>
  _prepend?: Maybe<Auth_Accounts_Prepend_Input>
  _set?: Maybe<Auth_Accounts_Set_Input>
  pk_columns: Auth_Accounts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Auth_ProvidersArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>
  where: Auth_Providers_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Auth_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>
  pk_columns: Auth_Providers_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_TokensArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>
  where: Auth_Refresh_Tokens_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_Tokens_By_PkArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>
  pk_columns: Auth_Refresh_Tokens_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Auth_RolesArgs = {
  _set?: Maybe<Auth_Roles_Set_Input>
  where: Auth_Roles_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Auth_Roles_By_PkArgs = {
  _set?: Maybe<Auth_Roles_Set_Input>
  pk_columns: Auth_Roles_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_BasesArgs = {
  _set?: Maybe<Bases_Set_Input>
  where: Bases_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Bases_By_PkArgs = {
  _set?: Maybe<Bases_Set_Input>
  pk_columns: Bases_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Categories_Of_ArticlesArgs = {
  _inc?: Maybe<Categories_Of_Articles_Inc_Input>
  _set?: Maybe<Categories_Of_Articles_Set_Input>
  where: Categories_Of_Articles_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Categories_Of_Articles_By_PkArgs = {
  _inc?: Maybe<Categories_Of_Articles_Inc_Input>
  _set?: Maybe<Categories_Of_Articles_Set_Input>
  pk_columns: Categories_Of_Articles_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _inc?: Maybe<Comments_Inc_Input>
  _set?: Maybe<Comments_Set_Input>
  where: Comments_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _inc?: Maybe<Comments_Inc_Input>
  _set?: Maybe<Comments_Set_Input>
  pk_columns: Comments_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Default_Categories_Of_ArticlesArgs = {
  _inc?: Maybe<Default_Categories_Of_Articles_Inc_Input>
  _set?: Maybe<Default_Categories_Of_Articles_Set_Input>
  where: Default_Categories_Of_Articles_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Default_Categories_Of_Articles_By_PkArgs = {
  _inc?: Maybe<Default_Categories_Of_Articles_Inc_Input>
  _set?: Maybe<Default_Categories_Of_Articles_Set_Input>
  pk_columns: Default_Categories_Of_Articles_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Default_DepartmentsArgs = {
  _inc?: Maybe<Default_Departments_Inc_Input>
  _set?: Maybe<Default_Departments_Set_Input>
  where: Default_Departments_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Default_Departments_By_PkArgs = {
  _inc?: Maybe<Default_Departments_Inc_Input>
  _set?: Maybe<Default_Departments_Set_Input>
  pk_columns: Default_Departments_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Default_PositionsArgs = {
  _inc?: Maybe<Default_Positions_Inc_Input>
  _set?: Maybe<Default_Positions_Set_Input>
  where: Default_Positions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Default_Positions_By_PkArgs = {
  _inc?: Maybe<Default_Positions_Inc_Input>
  _set?: Maybe<Default_Positions_Set_Input>
  pk_columns: Default_Positions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Default_StatusesArgs = {
  _inc?: Maybe<Default_Statuses_Inc_Input>
  _set?: Maybe<Default_Statuses_Set_Input>
  where: Default_Statuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Default_Statuses_By_PkArgs = {
  _inc?: Maybe<Default_Statuses_Inc_Input>
  _set?: Maybe<Default_Statuses_Set_Input>
  pk_columns: Default_Statuses_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_DepartmentsArgs = {
  _set?: Maybe<Departments_Set_Input>
  where: Departments_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Departments_By_PkArgs = {
  _set?: Maybe<Departments_Set_Input>
  pk_columns: Departments_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_FavoritesArgs = {
  _set?: Maybe<Favorites_Set_Input>
  where: Favorites_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Favorites_By_PkArgs = {
  _set?: Maybe<Favorites_Set_Input>
  pk_columns: Favorites_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_InvitesArgs = {
  _set?: Maybe<Invites_Set_Input>
  where: Invites_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Invites_By_PkArgs = {
  _set?: Maybe<Invites_Set_Input>
  pk_columns: Invites_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_PermissionArgs = {
  _set?: Maybe<Permission_Set_Input>
  where: Permission_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Permission_By_PkArgs = {
  _set?: Maybe<Permission_Set_Input>
  pk_columns: Permission_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_PositionsArgs = {
  _set?: Maybe<Positions_Set_Input>
  where: Positions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Positions_By_PkArgs = {
  _set?: Maybe<Positions_Set_Input>
  pk_columns: Positions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_StatusesArgs = {
  _set?: Maybe<Statuses_Set_Input>
  where: Statuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Statuses_By_PkArgs = {
  _set?: Maybe<Statuses_Set_Input>
  pk_columns: Statuses_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TagsArgs = {
  _set?: Maybe<Tags_Set_Input>
  where: Tags_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tags_By_PkArgs = {
  _set?: Maybe<Tags_Set_Input>
  pk_columns: Tags_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Users_DepartmentsArgs = {
  _set?: Maybe<Users_Departments_Set_Input>
  where: Users_Departments_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_Departments_By_PkArgs = {
  _set?: Maybe<Users_Departments_Set_Input>
  pk_columns: Users_Departments_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Users_In_BasesArgs = {
  _set?: Maybe<Users_In_Bases_Set_Input>
  where: Users_In_Bases_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_In_Bases_By_PkArgs = {
  _set?: Maybe<Users_In_Bases_Set_Input>
  pk_columns: Users_In_Bases_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Users_PermissionsArgs = {
  _set?: Maybe<Users_Permissions_Set_Input>
  where: Users_Permissions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_Permissions_By_PkArgs = {
  _set?: Maybe<Users_Permissions_Set_Input>
  pk_columns: Users_Permissions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Users_PositionsArgs = {
  _set?: Maybe<Users_Positions_Set_Input>
  where: Users_Positions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_Positions_By_PkArgs = {
  _set?: Maybe<Users_Positions_Set_Input>
  pk_columns: Users_Positions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Users_Read_ArticlesArgs = {
  _set?: Maybe<Users_Read_Articles_Set_Input>
  where: Users_Read_Articles_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_Read_Articles_By_PkArgs = {
  _set?: Maybe<Users_Read_Articles_Set_Input>
  pk_columns: Users_Read_Articles_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Users_StatusesArgs = {
  _set?: Maybe<Users_Statuses_Set_Input>
  where: Users_Statuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_Statuses_By_PkArgs = {
  _set?: Maybe<Users_Statuses_Set_Input>
  pk_columns: Users_Statuses_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/**
 * Права доступа
 *
 *
 * columns and relationships of "permission"
 */
export type Permission = {
  __typename?: 'permission'
  id: Scalars['String']
  /** An array relationship */
  invites: Array<Invites>
  /** An aggregated array relationship */
  invites_aggregate: Invites_Aggregate
  name: Scalars['String']
}

/**
 * Права доступа
 *
 *
 * columns and relationships of "permission"
 */
export type PermissionInvitesArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Invites_Order_By>>
  where?: Maybe<Invites_Bool_Exp>
}

/**
 * Права доступа
 *
 *
 * columns and relationships of "permission"
 */
export type PermissionInvites_AggregateArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Invites_Order_By>>
  where?: Maybe<Invites_Bool_Exp>
}

/** aggregated selection of "permission" */
export type Permission_Aggregate = {
  __typename?: 'permission_aggregate'
  aggregate?: Maybe<Permission_Aggregate_Fields>
  nodes: Array<Permission>
}

/** aggregate fields of "permission" */
export type Permission_Aggregate_Fields = {
  __typename?: 'permission_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Permission_Max_Fields>
  min?: Maybe<Permission_Min_Fields>
}

/** aggregate fields of "permission" */
export type Permission_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Permission_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "permission" */
export type Permission_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Permission_Max_Order_By>
  min?: Maybe<Permission_Min_Order_By>
}

/** input type for inserting array relation for remote table "permission" */
export type Permission_Arr_Rel_Insert_Input = {
  data: Array<Permission_Insert_Input>
  on_conflict?: Maybe<Permission_On_Conflict>
}

/** Boolean expression to filter rows from the table "permission". All fields are combined with a logical 'AND'. */
export type Permission_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Permission_Bool_Exp>>>
  _not?: Maybe<Permission_Bool_Exp>
  _or?: Maybe<Array<Maybe<Permission_Bool_Exp>>>
  id?: Maybe<String_Comparison_Exp>
  invites?: Maybe<Invites_Bool_Exp>
  name?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "permission" */
export enum Permission_Constraint {
  /** unique or primary key constraint */
  PermissionsPkey = 'permissions_pkey'
}

export enum Permission_Enum {
  /** Администратор */
  Admin = 'ADMIN',
  /** Автор */
  Author = 'AUTHOR',
  /** Модератор */
  Moderator = 'MODERATOR',
  /** Супер администратор */
  SuperAdmin = 'SUPER_ADMIN',
  /** Пользователь */
  User = 'USER',
  /** Без доступа */
  WithoutAccess = 'WITHOUT_ACCESS'
}

/** expression to compare columns of type permission_enum. All fields are combined with logical 'AND'. */
export type Permission_Enum_Comparison_Exp = {
  _eq?: Maybe<Permission_Enum>
  _in?: Maybe<Array<Permission_Enum>>
  _is_null?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Permission_Enum>
  _nin?: Maybe<Array<Permission_Enum>>
}

/** input type for inserting data into table "permission" */
export type Permission_Insert_Input = {
  id?: Maybe<Scalars['String']>
  invites?: Maybe<Invites_Arr_Rel_Insert_Input>
  name?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Permission_Max_Fields = {
  __typename?: 'permission_max_fields'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "permission" */
export type Permission_Max_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Permission_Min_Fields = {
  __typename?: 'permission_min_fields'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "permission" */
export type Permission_Min_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** response of any mutation on the table "permission" */
export type Permission_Mutation_Response = {
  __typename?: 'permission_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Permission>
}

/** input type for inserting object relation for remote table "permission" */
export type Permission_Obj_Rel_Insert_Input = {
  data: Permission_Insert_Input
  on_conflict?: Maybe<Permission_On_Conflict>
}

/** on conflict condition type for table "permission" */
export type Permission_On_Conflict = {
  constraint: Permission_Constraint
  update_columns: Array<Permission_Update_Column>
  where?: Maybe<Permission_Bool_Exp>
}

/** ordering options when selecting data from "permission" */
export type Permission_Order_By = {
  id?: Maybe<Order_By>
  invites_aggregate?: Maybe<Invites_Aggregate_Order_By>
  name?: Maybe<Order_By>
}

/** primary key columns input for table: "permission" */
export type Permission_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "permission" */
export enum Permission_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "permission" */
export type Permission_Set_Input = {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** update columns of table "permission" */
export enum Permission_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/**
 * Должности
 *
 *
 * columns and relationships of "positions"
 */
export type Positions = {
  __typename?: 'positions'
  /** An object relationship */
  base: Bases
  base_id: Scalars['uuid']
  created_at: Scalars['timestamptz']
  id: Scalars['uuid']
  name: Scalars['String']
  updated_at: Scalars['timestamptz']
  /** An array relationship */
  users: Array<Users_Positions>
  /** An aggregated array relationship */
  users_aggregate: Users_Positions_Aggregate
}

/**
 * Должности
 *
 *
 * columns and relationships of "positions"
 */
export type PositionsUsersArgs = {
  distinct_on?: Maybe<Array<Users_Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Positions_Order_By>>
  where?: Maybe<Users_Positions_Bool_Exp>
}

/**
 * Должности
 *
 *
 * columns and relationships of "positions"
 */
export type PositionsUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Positions_Order_By>>
  where?: Maybe<Users_Positions_Bool_Exp>
}

/** aggregated selection of "positions" */
export type Positions_Aggregate = {
  __typename?: 'positions_aggregate'
  aggregate?: Maybe<Positions_Aggregate_Fields>
  nodes: Array<Positions>
}

/** aggregate fields of "positions" */
export type Positions_Aggregate_Fields = {
  __typename?: 'positions_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Positions_Max_Fields>
  min?: Maybe<Positions_Min_Fields>
}

/** aggregate fields of "positions" */
export type Positions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Positions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "positions" */
export type Positions_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Positions_Max_Order_By>
  min?: Maybe<Positions_Min_Order_By>
}

/** input type for inserting array relation for remote table "positions" */
export type Positions_Arr_Rel_Insert_Input = {
  data: Array<Positions_Insert_Input>
  on_conflict?: Maybe<Positions_On_Conflict>
}

/** Boolean expression to filter rows from the table "positions". All fields are combined with a logical 'AND'. */
export type Positions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Positions_Bool_Exp>>>
  _not?: Maybe<Positions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Positions_Bool_Exp>>>
  base?: Maybe<Bases_Bool_Exp>
  base_id?: Maybe<Uuid_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  users?: Maybe<Users_Positions_Bool_Exp>
}

/** unique or primary key constraints on table "positions" */
export enum Positions_Constraint {
  /** unique or primary key constraint */
  PositionsBaseIdNameKey = 'positions_base_id_name_key',
  /** unique or primary key constraint */
  PositionsPkey = 'positions_pkey'
}

/** input type for inserting data into table "positions" */
export type Positions_Insert_Input = {
  base?: Maybe<Bases_Obj_Rel_Insert_Input>
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  users?: Maybe<Users_Positions_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Positions_Max_Fields = {
  __typename?: 'positions_max_fields'
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "positions" */
export type Positions_Max_Order_By = {
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Positions_Min_Fields = {
  __typename?: 'positions_min_fields'
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "positions" */
export type Positions_Min_Order_By = {
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "positions" */
export type Positions_Mutation_Response = {
  __typename?: 'positions_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Positions>
}

/** input type for inserting object relation for remote table "positions" */
export type Positions_Obj_Rel_Insert_Input = {
  data: Positions_Insert_Input
  on_conflict?: Maybe<Positions_On_Conflict>
}

/** on conflict condition type for table "positions" */
export type Positions_On_Conflict = {
  constraint: Positions_Constraint
  update_columns: Array<Positions_Update_Column>
  where?: Maybe<Positions_Bool_Exp>
}

/** ordering options when selecting data from "positions" */
export type Positions_Order_By = {
  base?: Maybe<Bases_Order_By>
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  users_aggregate?: Maybe<Users_Positions_Aggregate_Order_By>
}

/** primary key columns input for table: "positions" */
export type Positions_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "positions" */
export enum Positions_Select_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "positions" */
export type Positions_Set_Input = {
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "positions" */
export enum Positions_Update_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Query = {
  __typename?: 'Query'
  get_google_document_content: StatusOutput
}

export type QueryGet_Google_Document_ContentArgs = {
  url: Scalars['String']
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "access" */
  access: Array<Access>
  /** fetch aggregated fields from the table: "access" */
  access_aggregate: Access_Aggregate
  /** fetch data from the table: "access" using primary key columns */
  access_by_pk?: Maybe<Access>
  /** fetch data from the table: "article_type" */
  article_type: Array<Article_Type>
  /** fetch aggregated fields from the table: "article_type" */
  article_type_aggregate: Article_Type_Aggregate
  /** fetch data from the table: "article_type" using primary key columns */
  article_type_by_pk?: Maybe<Article_Type>
  /** fetch data from the table: "articles" */
  articles: Array<Articles>
  /** fetch aggregated fields from the table: "articles" */
  articles_aggregate: Articles_Aggregate
  /** fetch data from the table: "articles" using primary key columns */
  articles_by_pk?: Maybe<Articles>
  /** fetch data from the table: "articles_tags" */
  articles_tags: Array<Articles_Tags>
  /** fetch aggregated fields from the table: "articles_tags" */
  articles_tags_aggregate: Articles_Tags_Aggregate
  /** fetch data from the table: "articles_tags" using primary key columns */
  articles_tags_by_pk?: Maybe<Articles_Tags>
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>
  /** fetch data from the table: "bases" */
  bases: Array<Bases>
  /** fetch aggregated fields from the table: "bases" */
  bases_aggregate: Bases_Aggregate
  /** fetch data from the table: "bases" using primary key columns */
  bases_by_pk?: Maybe<Bases>
  /** fetch data from the table: "categories_of_articles" */
  categories_of_articles: Array<Categories_Of_Articles>
  /** fetch aggregated fields from the table: "categories_of_articles" */
  categories_of_articles_aggregate: Categories_Of_Articles_Aggregate
  /** fetch data from the table: "categories_of_articles" using primary key columns */
  categories_of_articles_by_pk?: Maybe<Categories_Of_Articles>
  /** fetch data from the table: "comments" */
  comments: Array<Comments>
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>
  /** fetch data from the table: "default_categories_of_articles" */
  default_categories_of_articles: Array<Default_Categories_Of_Articles>
  /** fetch aggregated fields from the table: "default_categories_of_articles" */
  default_categories_of_articles_aggregate: Default_Categories_Of_Articles_Aggregate
  /** fetch data from the table: "default_categories_of_articles" using primary key columns */
  default_categories_of_articles_by_pk?: Maybe<Default_Categories_Of_Articles>
  /** fetch data from the table: "default_departments" */
  default_departments: Array<Default_Departments>
  /** fetch aggregated fields from the table: "default_departments" */
  default_departments_aggregate: Default_Departments_Aggregate
  /** fetch data from the table: "default_departments" using primary key columns */
  default_departments_by_pk?: Maybe<Default_Departments>
  /** fetch data from the table: "default_positions" */
  default_positions: Array<Default_Positions>
  /** fetch aggregated fields from the table: "default_positions" */
  default_positions_aggregate: Default_Positions_Aggregate
  /** fetch data from the table: "default_positions" using primary key columns */
  default_positions_by_pk?: Maybe<Default_Positions>
  /** fetch data from the table: "default_statuses" */
  default_statuses: Array<Default_Statuses>
  /** fetch aggregated fields from the table: "default_statuses" */
  default_statuses_aggregate: Default_Statuses_Aggregate
  /** fetch data from the table: "default_statuses" using primary key columns */
  default_statuses_by_pk?: Maybe<Default_Statuses>
  /** fetch data from the table: "departments" */
  departments: Array<Departments>
  /** fetch aggregated fields from the table: "departments" */
  departments_aggregate: Departments_Aggregate
  /** fetch data from the table: "departments" using primary key columns */
  departments_by_pk?: Maybe<Departments>
  /** fetch data from the table: "favorites" */
  favorites: Array<Favorites>
  /** fetch aggregated fields from the table: "favorites" */
  favorites_aggregate: Favorites_Aggregate
  /** fetch data from the table: "favorites" using primary key columns */
  favorites_by_pk?: Maybe<Favorites>
  get_google_document_content: StatusOutput
  /** fetch data from the table: "invites" */
  invites: Array<Invites>
  /** fetch aggregated fields from the table: "invites" */
  invites_aggregate: Invites_Aggregate
  /** fetch data from the table: "invites" using primary key columns */
  invites_by_pk?: Maybe<Invites>
  /** fetch data from the table: "permission" */
  permission: Array<Permission>
  /** fetch aggregated fields from the table: "permission" */
  permission_aggregate: Permission_Aggregate
  /** fetch data from the table: "permission" using primary key columns */
  permission_by_pk?: Maybe<Permission>
  /** fetch data from the table: "positions" */
  positions: Array<Positions>
  /** fetch aggregated fields from the table: "positions" */
  positions_aggregate: Positions_Aggregate
  /** fetch data from the table: "positions" using primary key columns */
  positions_by_pk?: Maybe<Positions>
  /** fetch data from the table: "statuses" */
  statuses: Array<Statuses>
  /** fetch aggregated fields from the table: "statuses" */
  statuses_aggregate: Statuses_Aggregate
  /** fetch data from the table: "statuses" using primary key columns */
  statuses_by_pk?: Maybe<Statuses>
  /** fetch data from the table: "tags" */
  tags: Array<Tags>
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** fetch data from the table: "users_departments" */
  users_departments: Array<Users_Departments>
  /** fetch aggregated fields from the table: "users_departments" */
  users_departments_aggregate: Users_Departments_Aggregate
  /** fetch data from the table: "users_departments" using primary key columns */
  users_departments_by_pk?: Maybe<Users_Departments>
  /** fetch data from the table: "users_in_bases" */
  users_in_bases: Array<Users_In_Bases>
  /** fetch aggregated fields from the table: "users_in_bases" */
  users_in_bases_aggregate: Users_In_Bases_Aggregate
  /** fetch data from the table: "users_in_bases" using primary key columns */
  users_in_bases_by_pk?: Maybe<Users_In_Bases>
  /** fetch data from the table: "users_permissions" */
  users_permissions: Array<Users_Permissions>
  /** fetch aggregated fields from the table: "users_permissions" */
  users_permissions_aggregate: Users_Permissions_Aggregate
  /** fetch data from the table: "users_permissions" using primary key columns */
  users_permissions_by_pk?: Maybe<Users_Permissions>
  /** fetch data from the table: "users_positions" */
  users_positions: Array<Users_Positions>
  /** fetch aggregated fields from the table: "users_positions" */
  users_positions_aggregate: Users_Positions_Aggregate
  /** fetch data from the table: "users_positions" using primary key columns */
  users_positions_by_pk?: Maybe<Users_Positions>
  /** fetch data from the table: "users_read_articles" */
  users_read_articles: Array<Users_Read_Articles>
  /** fetch aggregated fields from the table: "users_read_articles" */
  users_read_articles_aggregate: Users_Read_Articles_Aggregate
  /** fetch data from the table: "users_read_articles" using primary key columns */
  users_read_articles_by_pk?: Maybe<Users_Read_Articles>
  /** fetch data from the table: "users_statuses" */
  users_statuses: Array<Users_Statuses>
  /** fetch aggregated fields from the table: "users_statuses" */
  users_statuses_aggregate: Users_Statuses_Aggregate
  /** fetch data from the table: "users_statuses" using primary key columns */
  users_statuses_by_pk?: Maybe<Users_Statuses>
}

/** query root */
export type Query_RootAccessArgs = {
  distinct_on?: Maybe<Array<Access_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Access_Order_By>>
  where?: Maybe<Access_Bool_Exp>
}

/** query root */
export type Query_RootAccess_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Access_Order_By>>
  where?: Maybe<Access_Bool_Exp>
}

/** query root */
export type Query_RootAccess_By_PkArgs = {
  id: Scalars['String']
}

/** query root */
export type Query_RootArticle_TypeArgs = {
  distinct_on?: Maybe<Array<Article_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Article_Type_Order_By>>
  where?: Maybe<Article_Type_Bool_Exp>
}

/** query root */
export type Query_RootArticle_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Article_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Article_Type_Order_By>>
  where?: Maybe<Article_Type_Bool_Exp>
}

/** query root */
export type Query_RootArticle_Type_By_PkArgs = {
  type: Scalars['String']
}

/** query root */
export type Query_RootArticlesArgs = {
  distinct_on?: Maybe<Array<Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Order_By>>
  where?: Maybe<Articles_Bool_Exp>
}

/** query root */
export type Query_RootArticles_AggregateArgs = {
  distinct_on?: Maybe<Array<Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Order_By>>
  where?: Maybe<Articles_Bool_Exp>
}

/** query root */
export type Query_RootArticles_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootArticles_TagsArgs = {
  distinct_on?: Maybe<Array<Articles_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Tags_Order_By>>
  where?: Maybe<Articles_Tags_Bool_Exp>
}

/** query root */
export type Query_RootArticles_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Articles_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Tags_Order_By>>
  where?: Maybe<Articles_Tags_Bool_Exp>
}

/** query root */
export type Query_RootArticles_Tags_By_PkArgs = {
  article_id: Scalars['uuid']
  tag: Scalars['String']
}

/** query root */
export type Query_RootAuth_Account_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>
  where?: Maybe<Auth_Account_Providers_Bool_Exp>
}

/** query root */
export type Query_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>
  where?: Maybe<Auth_Account_Providers_Bool_Exp>
}

/** query root */
export type Query_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootAuth_Account_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>
  where?: Maybe<Auth_Account_Roles_Bool_Exp>
}

/** query root */
export type Query_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>
  where?: Maybe<Auth_Account_Roles_Bool_Exp>
}

/** query root */
export type Query_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>
  where?: Maybe<Auth_Accounts_Bool_Exp>
}

/** query root */
export type Query_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>
  where?: Maybe<Auth_Accounts_Bool_Exp>
}

/** query root */
export type Query_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Providers_Order_By>>
  where?: Maybe<Auth_Providers_Bool_Exp>
}

/** query root */
export type Query_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Providers_Order_By>>
  where?: Maybe<Auth_Providers_Bool_Exp>
}

/** query root */
export type Query_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String']
}

/** query root */
export type Query_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>
}

/** query root */
export type Query_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>
}

/** query root */
export type Query_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid']
}

/** query root */
export type Query_RootAuth_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Roles_Order_By>>
  where?: Maybe<Auth_Roles_Bool_Exp>
}

/** query root */
export type Query_RootAuth_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Roles_Order_By>>
  where?: Maybe<Auth_Roles_Bool_Exp>
}

/** query root */
export type Query_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String']
}

/** query root */
export type Query_RootBasesArgs = {
  distinct_on?: Maybe<Array<Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bases_Order_By>>
  where?: Maybe<Bases_Bool_Exp>
}

/** query root */
export type Query_RootBases_AggregateArgs = {
  distinct_on?: Maybe<Array<Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bases_Order_By>>
  where?: Maybe<Bases_Bool_Exp>
}

/** query root */
export type Query_RootBases_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootCategories_Of_ArticlesArgs = {
  distinct_on?: Maybe<Array<Categories_Of_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Of_Articles_Order_By>>
  where?: Maybe<Categories_Of_Articles_Bool_Exp>
}

/** query root */
export type Query_RootCategories_Of_Articles_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Of_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Of_Articles_Order_By>>
  where?: Maybe<Categories_Of_Articles_Bool_Exp>
}

/** query root */
export type Query_RootCategories_Of_Articles_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** query root */
export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** query root */
export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootDefault_Categories_Of_ArticlesArgs = {
  distinct_on?: Maybe<Array<Default_Categories_Of_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Categories_Of_Articles_Order_By>>
  where?: Maybe<Default_Categories_Of_Articles_Bool_Exp>
}

/** query root */
export type Query_RootDefault_Categories_Of_Articles_AggregateArgs = {
  distinct_on?: Maybe<Array<Default_Categories_Of_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Categories_Of_Articles_Order_By>>
  where?: Maybe<Default_Categories_Of_Articles_Bool_Exp>
}

/** query root */
export type Query_RootDefault_Categories_Of_Articles_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootDefault_DepartmentsArgs = {
  distinct_on?: Maybe<Array<Default_Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Departments_Order_By>>
  where?: Maybe<Default_Departments_Bool_Exp>
}

/** query root */
export type Query_RootDefault_Departments_AggregateArgs = {
  distinct_on?: Maybe<Array<Default_Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Departments_Order_By>>
  where?: Maybe<Default_Departments_Bool_Exp>
}

/** query root */
export type Query_RootDefault_Departments_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootDefault_PositionsArgs = {
  distinct_on?: Maybe<Array<Default_Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Positions_Order_By>>
  where?: Maybe<Default_Positions_Bool_Exp>
}

/** query root */
export type Query_RootDefault_Positions_AggregateArgs = {
  distinct_on?: Maybe<Array<Default_Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Positions_Order_By>>
  where?: Maybe<Default_Positions_Bool_Exp>
}

/** query root */
export type Query_RootDefault_Positions_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootDefault_StatusesArgs = {
  distinct_on?: Maybe<Array<Default_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Statuses_Order_By>>
  where?: Maybe<Default_Statuses_Bool_Exp>
}

/** query root */
export type Query_RootDefault_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Default_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Statuses_Order_By>>
  where?: Maybe<Default_Statuses_Bool_Exp>
}

/** query root */
export type Query_RootDefault_Statuses_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootDepartmentsArgs = {
  distinct_on?: Maybe<Array<Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Departments_Order_By>>
  where?: Maybe<Departments_Bool_Exp>
}

/** query root */
export type Query_RootDepartments_AggregateArgs = {
  distinct_on?: Maybe<Array<Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Departments_Order_By>>
  where?: Maybe<Departments_Bool_Exp>
}

/** query root */
export type Query_RootDepartments_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootFavoritesArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Favorites_Order_By>>
  where?: Maybe<Favorites_Bool_Exp>
}

/** query root */
export type Query_RootFavorites_AggregateArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Favorites_Order_By>>
  where?: Maybe<Favorites_Bool_Exp>
}

/** query root */
export type Query_RootFavorites_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootGet_Google_Document_ContentArgs = {
  url: Scalars['String']
}

/** query root */
export type Query_RootInvitesArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Invites_Order_By>>
  where?: Maybe<Invites_Bool_Exp>
}

/** query root */
export type Query_RootInvites_AggregateArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Invites_Order_By>>
  where?: Maybe<Invites_Bool_Exp>
}

/** query root */
export type Query_RootInvites_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootPermissionArgs = {
  distinct_on?: Maybe<Array<Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Permission_Order_By>>
  where?: Maybe<Permission_Bool_Exp>
}

/** query root */
export type Query_RootPermission_AggregateArgs = {
  distinct_on?: Maybe<Array<Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Permission_Order_By>>
  where?: Maybe<Permission_Bool_Exp>
}

/** query root */
export type Query_RootPermission_By_PkArgs = {
  id: Scalars['String']
}

/** query root */
export type Query_RootPositionsArgs = {
  distinct_on?: Maybe<Array<Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Positions_Order_By>>
  where?: Maybe<Positions_Bool_Exp>
}

/** query root */
export type Query_RootPositions_AggregateArgs = {
  distinct_on?: Maybe<Array<Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Positions_Order_By>>
  where?: Maybe<Positions_Bool_Exp>
}

/** query root */
export type Query_RootPositions_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootStatusesArgs = {
  distinct_on?: Maybe<Array<Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Statuses_Order_By>>
  where?: Maybe<Statuses_Bool_Exp>
}

/** query root */
export type Query_RootStatuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Statuses_Order_By>>
  where?: Maybe<Statuses_Bool_Exp>
}

/** query root */
export type Query_RootStatuses_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootTagsArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tags_Order_By>>
  where?: Maybe<Tags_Bool_Exp>
}

/** query root */
export type Query_RootTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tags_Order_By>>
  where?: Maybe<Tags_Bool_Exp>
}

/** query root */
export type Query_RootTags_By_PkArgs = {
  tag: Scalars['String']
}

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootUsers_DepartmentsArgs = {
  distinct_on?: Maybe<Array<Users_Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Departments_Order_By>>
  where?: Maybe<Users_Departments_Bool_Exp>
}

/** query root */
export type Query_RootUsers_Departments_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Departments_Order_By>>
  where?: Maybe<Users_Departments_Bool_Exp>
}

/** query root */
export type Query_RootUsers_Departments_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootUsers_In_BasesArgs = {
  distinct_on?: Maybe<Array<Users_In_Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_In_Bases_Order_By>>
  where?: Maybe<Users_In_Bases_Bool_Exp>
}

/** query root */
export type Query_RootUsers_In_Bases_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_In_Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_In_Bases_Order_By>>
  where?: Maybe<Users_In_Bases_Bool_Exp>
}

/** query root */
export type Query_RootUsers_In_Bases_By_PkArgs = {
  base_id: Scalars['uuid']
  user_id: Scalars['uuid']
}

/** query root */
export type Query_RootUsers_PermissionsArgs = {
  distinct_on?: Maybe<Array<Users_Permissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Permissions_Order_By>>
  where?: Maybe<Users_Permissions_Bool_Exp>
}

/** query root */
export type Query_RootUsers_Permissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Permissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Permissions_Order_By>>
  where?: Maybe<Users_Permissions_Bool_Exp>
}

/** query root */
export type Query_RootUsers_Permissions_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootUsers_PositionsArgs = {
  distinct_on?: Maybe<Array<Users_Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Positions_Order_By>>
  where?: Maybe<Users_Positions_Bool_Exp>
}

/** query root */
export type Query_RootUsers_Positions_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Positions_Order_By>>
  where?: Maybe<Users_Positions_Bool_Exp>
}

/** query root */
export type Query_RootUsers_Positions_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootUsers_Read_ArticlesArgs = {
  distinct_on?: Maybe<Array<Users_Read_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Read_Articles_Order_By>>
  where?: Maybe<Users_Read_Articles_Bool_Exp>
}

/** query root */
export type Query_RootUsers_Read_Articles_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Read_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Read_Articles_Order_By>>
  where?: Maybe<Users_Read_Articles_Bool_Exp>
}

/** query root */
export type Query_RootUsers_Read_Articles_By_PkArgs = {
  article_id: Scalars['uuid']
  user_id: Scalars['uuid']
}

/** query root */
export type Query_RootUsers_StatusesArgs = {
  distinct_on?: Maybe<Array<Users_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Statuses_Order_By>>
  where?: Maybe<Users_Statuses_Bool_Exp>
}

/** query root */
export type Query_RootUsers_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Statuses_Order_By>>
  where?: Maybe<Users_Statuses_Bool_Exp>
}

/** query root */
export type Query_RootUsers_Statuses_By_PkArgs = {
  id: Scalars['uuid']
}

/**
 * Статусы
 *
 *
 * columns and relationships of "statuses"
 */
export type Statuses = {
  __typename?: 'statuses'
  /** An object relationship */
  base: Bases
  base_id: Scalars['uuid']
  created_at: Scalars['timestamptz']
  id: Scalars['uuid']
  name: Scalars['String']
  updated_at: Scalars['timestamptz']
  /** An array relationship */
  users: Array<Users_Statuses>
  /** An aggregated array relationship */
  users_aggregate: Users_Statuses_Aggregate
}

/**
 * Статусы
 *
 *
 * columns and relationships of "statuses"
 */
export type StatusesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Statuses_Order_By>>
  where?: Maybe<Users_Statuses_Bool_Exp>
}

/**
 * Статусы
 *
 *
 * columns and relationships of "statuses"
 */
export type StatusesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Statuses_Order_By>>
  where?: Maybe<Users_Statuses_Bool_Exp>
}

/** aggregated selection of "statuses" */
export type Statuses_Aggregate = {
  __typename?: 'statuses_aggregate'
  aggregate?: Maybe<Statuses_Aggregate_Fields>
  nodes: Array<Statuses>
}

/** aggregate fields of "statuses" */
export type Statuses_Aggregate_Fields = {
  __typename?: 'statuses_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Statuses_Max_Fields>
  min?: Maybe<Statuses_Min_Fields>
}

/** aggregate fields of "statuses" */
export type Statuses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Statuses_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "statuses" */
export type Statuses_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Statuses_Max_Order_By>
  min?: Maybe<Statuses_Min_Order_By>
}

/** input type for inserting array relation for remote table "statuses" */
export type Statuses_Arr_Rel_Insert_Input = {
  data: Array<Statuses_Insert_Input>
  on_conflict?: Maybe<Statuses_On_Conflict>
}

/** Boolean expression to filter rows from the table "statuses". All fields are combined with a logical 'AND'. */
export type Statuses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Statuses_Bool_Exp>>>
  _not?: Maybe<Statuses_Bool_Exp>
  _or?: Maybe<Array<Maybe<Statuses_Bool_Exp>>>
  base?: Maybe<Bases_Bool_Exp>
  base_id?: Maybe<Uuid_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  users?: Maybe<Users_Statuses_Bool_Exp>
}

/** unique or primary key constraints on table "statuses" */
export enum Statuses_Constraint {
  /** unique or primary key constraint */
  StatusesBaseIdNameKey = 'statuses_base_id_name_key',
  /** unique or primary key constraint */
  StatusesPkey = 'statuses_pkey'
}

/** input type for inserting data into table "statuses" */
export type Statuses_Insert_Input = {
  base?: Maybe<Bases_Obj_Rel_Insert_Input>
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  users?: Maybe<Users_Statuses_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Statuses_Max_Fields = {
  __typename?: 'statuses_max_fields'
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "statuses" */
export type Statuses_Max_Order_By = {
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Statuses_Min_Fields = {
  __typename?: 'statuses_min_fields'
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "statuses" */
export type Statuses_Min_Order_By = {
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "statuses" */
export type Statuses_Mutation_Response = {
  __typename?: 'statuses_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Statuses>
}

/** input type for inserting object relation for remote table "statuses" */
export type Statuses_Obj_Rel_Insert_Input = {
  data: Statuses_Insert_Input
  on_conflict?: Maybe<Statuses_On_Conflict>
}

/** on conflict condition type for table "statuses" */
export type Statuses_On_Conflict = {
  constraint: Statuses_Constraint
  update_columns: Array<Statuses_Update_Column>
  where?: Maybe<Statuses_Bool_Exp>
}

/** ordering options when selecting data from "statuses" */
export type Statuses_Order_By = {
  base?: Maybe<Bases_Order_By>
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  users_aggregate?: Maybe<Users_Statuses_Aggregate_Order_By>
}

/** primary key columns input for table: "statuses" */
export type Statuses_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "statuses" */
export enum Statuses_Select_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "statuses" */
export type Statuses_Set_Input = {
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "statuses" */
export enum Statuses_Update_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type StatusOutput = {
  __typename?: 'StatusOutput'
  data?: Maybe<Scalars['jsonb']>
  status: Scalars['Boolean']
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "access" */
  access: Array<Access>
  /** fetch aggregated fields from the table: "access" */
  access_aggregate: Access_Aggregate
  /** fetch data from the table: "access" using primary key columns */
  access_by_pk?: Maybe<Access>
  /** fetch data from the table: "article_type" */
  article_type: Array<Article_Type>
  /** fetch aggregated fields from the table: "article_type" */
  article_type_aggregate: Article_Type_Aggregate
  /** fetch data from the table: "article_type" using primary key columns */
  article_type_by_pk?: Maybe<Article_Type>
  /** fetch data from the table: "articles" */
  articles: Array<Articles>
  /** fetch aggregated fields from the table: "articles" */
  articles_aggregate: Articles_Aggregate
  /** fetch data from the table: "articles" using primary key columns */
  articles_by_pk?: Maybe<Articles>
  /** fetch data from the table: "articles_tags" */
  articles_tags: Array<Articles_Tags>
  /** fetch aggregated fields from the table: "articles_tags" */
  articles_tags_aggregate: Articles_Tags_Aggregate
  /** fetch data from the table: "articles_tags" using primary key columns */
  articles_tags_by_pk?: Maybe<Articles_Tags>
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>
  /** fetch data from the table: "bases" */
  bases: Array<Bases>
  /** fetch aggregated fields from the table: "bases" */
  bases_aggregate: Bases_Aggregate
  /** fetch data from the table: "bases" using primary key columns */
  bases_by_pk?: Maybe<Bases>
  /** fetch data from the table: "categories_of_articles" */
  categories_of_articles: Array<Categories_Of_Articles>
  /** fetch aggregated fields from the table: "categories_of_articles" */
  categories_of_articles_aggregate: Categories_Of_Articles_Aggregate
  /** fetch data from the table: "categories_of_articles" using primary key columns */
  categories_of_articles_by_pk?: Maybe<Categories_Of_Articles>
  /** fetch data from the table: "comments" */
  comments: Array<Comments>
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>
  /** fetch data from the table: "default_categories_of_articles" */
  default_categories_of_articles: Array<Default_Categories_Of_Articles>
  /** fetch aggregated fields from the table: "default_categories_of_articles" */
  default_categories_of_articles_aggregate: Default_Categories_Of_Articles_Aggregate
  /** fetch data from the table: "default_categories_of_articles" using primary key columns */
  default_categories_of_articles_by_pk?: Maybe<Default_Categories_Of_Articles>
  /** fetch data from the table: "default_departments" */
  default_departments: Array<Default_Departments>
  /** fetch aggregated fields from the table: "default_departments" */
  default_departments_aggregate: Default_Departments_Aggregate
  /** fetch data from the table: "default_departments" using primary key columns */
  default_departments_by_pk?: Maybe<Default_Departments>
  /** fetch data from the table: "default_positions" */
  default_positions: Array<Default_Positions>
  /** fetch aggregated fields from the table: "default_positions" */
  default_positions_aggregate: Default_Positions_Aggregate
  /** fetch data from the table: "default_positions" using primary key columns */
  default_positions_by_pk?: Maybe<Default_Positions>
  /** fetch data from the table: "default_statuses" */
  default_statuses: Array<Default_Statuses>
  /** fetch aggregated fields from the table: "default_statuses" */
  default_statuses_aggregate: Default_Statuses_Aggregate
  /** fetch data from the table: "default_statuses" using primary key columns */
  default_statuses_by_pk?: Maybe<Default_Statuses>
  /** fetch data from the table: "departments" */
  departments: Array<Departments>
  /** fetch aggregated fields from the table: "departments" */
  departments_aggregate: Departments_Aggregate
  /** fetch data from the table: "departments" using primary key columns */
  departments_by_pk?: Maybe<Departments>
  /** fetch data from the table: "favorites" */
  favorites: Array<Favorites>
  /** fetch aggregated fields from the table: "favorites" */
  favorites_aggregate: Favorites_Aggregate
  /** fetch data from the table: "favorites" using primary key columns */
  favorites_by_pk?: Maybe<Favorites>
  /** fetch data from the table: "invites" */
  invites: Array<Invites>
  /** fetch aggregated fields from the table: "invites" */
  invites_aggregate: Invites_Aggregate
  /** fetch data from the table: "invites" using primary key columns */
  invites_by_pk?: Maybe<Invites>
  /** fetch data from the table: "permission" */
  permission: Array<Permission>
  /** fetch aggregated fields from the table: "permission" */
  permission_aggregate: Permission_Aggregate
  /** fetch data from the table: "permission" using primary key columns */
  permission_by_pk?: Maybe<Permission>
  /** fetch data from the table: "positions" */
  positions: Array<Positions>
  /** fetch aggregated fields from the table: "positions" */
  positions_aggregate: Positions_Aggregate
  /** fetch data from the table: "positions" using primary key columns */
  positions_by_pk?: Maybe<Positions>
  /** fetch data from the table: "statuses" */
  statuses: Array<Statuses>
  /** fetch aggregated fields from the table: "statuses" */
  statuses_aggregate: Statuses_Aggregate
  /** fetch data from the table: "statuses" using primary key columns */
  statuses_by_pk?: Maybe<Statuses>
  /** fetch data from the table: "tags" */
  tags: Array<Tags>
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** fetch data from the table: "users_departments" */
  users_departments: Array<Users_Departments>
  /** fetch aggregated fields from the table: "users_departments" */
  users_departments_aggregate: Users_Departments_Aggregate
  /** fetch data from the table: "users_departments" using primary key columns */
  users_departments_by_pk?: Maybe<Users_Departments>
  /** fetch data from the table: "users_in_bases" */
  users_in_bases: Array<Users_In_Bases>
  /** fetch aggregated fields from the table: "users_in_bases" */
  users_in_bases_aggregate: Users_In_Bases_Aggregate
  /** fetch data from the table: "users_in_bases" using primary key columns */
  users_in_bases_by_pk?: Maybe<Users_In_Bases>
  /** fetch data from the table: "users_permissions" */
  users_permissions: Array<Users_Permissions>
  /** fetch aggregated fields from the table: "users_permissions" */
  users_permissions_aggregate: Users_Permissions_Aggregate
  /** fetch data from the table: "users_permissions" using primary key columns */
  users_permissions_by_pk?: Maybe<Users_Permissions>
  /** fetch data from the table: "users_positions" */
  users_positions: Array<Users_Positions>
  /** fetch aggregated fields from the table: "users_positions" */
  users_positions_aggregate: Users_Positions_Aggregate
  /** fetch data from the table: "users_positions" using primary key columns */
  users_positions_by_pk?: Maybe<Users_Positions>
  /** fetch data from the table: "users_read_articles" */
  users_read_articles: Array<Users_Read_Articles>
  /** fetch aggregated fields from the table: "users_read_articles" */
  users_read_articles_aggregate: Users_Read_Articles_Aggregate
  /** fetch data from the table: "users_read_articles" using primary key columns */
  users_read_articles_by_pk?: Maybe<Users_Read_Articles>
  /** fetch data from the table: "users_statuses" */
  users_statuses: Array<Users_Statuses>
  /** fetch aggregated fields from the table: "users_statuses" */
  users_statuses_aggregate: Users_Statuses_Aggregate
  /** fetch data from the table: "users_statuses" using primary key columns */
  users_statuses_by_pk?: Maybe<Users_Statuses>
}

/** subscription root */
export type Subscription_RootAccessArgs = {
  distinct_on?: Maybe<Array<Access_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Access_Order_By>>
  where?: Maybe<Access_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAccess_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Access_Order_By>>
  where?: Maybe<Access_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAccess_By_PkArgs = {
  id: Scalars['String']
}

/** subscription root */
export type Subscription_RootArticle_TypeArgs = {
  distinct_on?: Maybe<Array<Article_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Article_Type_Order_By>>
  where?: Maybe<Article_Type_Bool_Exp>
}

/** subscription root */
export type Subscription_RootArticle_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Article_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Article_Type_Order_By>>
  where?: Maybe<Article_Type_Bool_Exp>
}

/** subscription root */
export type Subscription_RootArticle_Type_By_PkArgs = {
  type: Scalars['String']
}

/** subscription root */
export type Subscription_RootArticlesArgs = {
  distinct_on?: Maybe<Array<Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Order_By>>
  where?: Maybe<Articles_Bool_Exp>
}

/** subscription root */
export type Subscription_RootArticles_AggregateArgs = {
  distinct_on?: Maybe<Array<Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Order_By>>
  where?: Maybe<Articles_Bool_Exp>
}

/** subscription root */
export type Subscription_RootArticles_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootArticles_TagsArgs = {
  distinct_on?: Maybe<Array<Articles_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Tags_Order_By>>
  where?: Maybe<Articles_Tags_Bool_Exp>
}

/** subscription root */
export type Subscription_RootArticles_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Articles_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Tags_Order_By>>
  where?: Maybe<Articles_Tags_Bool_Exp>
}

/** subscription root */
export type Subscription_RootArticles_Tags_By_PkArgs = {
  article_id: Scalars['uuid']
  tag: Scalars['String']
}

/** subscription root */
export type Subscription_RootAuth_Account_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>
  where?: Maybe<Auth_Account_Providers_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>
  where?: Maybe<Auth_Account_Providers_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootAuth_Account_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>
  where?: Maybe<Auth_Account_Roles_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>
  where?: Maybe<Auth_Account_Roles_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>
  where?: Maybe<Auth_Accounts_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>
  where?: Maybe<Auth_Accounts_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Providers_Order_By>>
  where?: Maybe<Auth_Providers_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Providers_Order_By>>
  where?: Maybe<Auth_Providers_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String']
}

/** subscription root */
export type Subscription_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootAuth_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Roles_Order_By>>
  where?: Maybe<Auth_Roles_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAuth_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Auth_Roles_Order_By>>
  where?: Maybe<Auth_Roles_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String']
}

/** subscription root */
export type Subscription_RootBasesArgs = {
  distinct_on?: Maybe<Array<Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bases_Order_By>>
  where?: Maybe<Bases_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBases_AggregateArgs = {
  distinct_on?: Maybe<Array<Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bases_Order_By>>
  where?: Maybe<Bases_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBases_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootCategories_Of_ArticlesArgs = {
  distinct_on?: Maybe<Array<Categories_Of_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Of_Articles_Order_By>>
  where?: Maybe<Categories_Of_Articles_Bool_Exp>
}

/** subscription root */
export type Subscription_RootCategories_Of_Articles_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Of_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Of_Articles_Order_By>>
  where?: Maybe<Categories_Of_Articles_Bool_Exp>
}

/** subscription root */
export type Subscription_RootCategories_Of_Articles_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** subscription root */
export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** subscription root */
export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootDefault_Categories_Of_ArticlesArgs = {
  distinct_on?: Maybe<Array<Default_Categories_Of_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Categories_Of_Articles_Order_By>>
  where?: Maybe<Default_Categories_Of_Articles_Bool_Exp>
}

/** subscription root */
export type Subscription_RootDefault_Categories_Of_Articles_AggregateArgs = {
  distinct_on?: Maybe<Array<Default_Categories_Of_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Categories_Of_Articles_Order_By>>
  where?: Maybe<Default_Categories_Of_Articles_Bool_Exp>
}

/** subscription root */
export type Subscription_RootDefault_Categories_Of_Articles_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootDefault_DepartmentsArgs = {
  distinct_on?: Maybe<Array<Default_Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Departments_Order_By>>
  where?: Maybe<Default_Departments_Bool_Exp>
}

/** subscription root */
export type Subscription_RootDefault_Departments_AggregateArgs = {
  distinct_on?: Maybe<Array<Default_Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Departments_Order_By>>
  where?: Maybe<Default_Departments_Bool_Exp>
}

/** subscription root */
export type Subscription_RootDefault_Departments_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootDefault_PositionsArgs = {
  distinct_on?: Maybe<Array<Default_Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Positions_Order_By>>
  where?: Maybe<Default_Positions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootDefault_Positions_AggregateArgs = {
  distinct_on?: Maybe<Array<Default_Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Positions_Order_By>>
  where?: Maybe<Default_Positions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootDefault_Positions_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootDefault_StatusesArgs = {
  distinct_on?: Maybe<Array<Default_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Statuses_Order_By>>
  where?: Maybe<Default_Statuses_Bool_Exp>
}

/** subscription root */
export type Subscription_RootDefault_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Default_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Default_Statuses_Order_By>>
  where?: Maybe<Default_Statuses_Bool_Exp>
}

/** subscription root */
export type Subscription_RootDefault_Statuses_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootDepartmentsArgs = {
  distinct_on?: Maybe<Array<Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Departments_Order_By>>
  where?: Maybe<Departments_Bool_Exp>
}

/** subscription root */
export type Subscription_RootDepartments_AggregateArgs = {
  distinct_on?: Maybe<Array<Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Departments_Order_By>>
  where?: Maybe<Departments_Bool_Exp>
}

/** subscription root */
export type Subscription_RootDepartments_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootFavoritesArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Favorites_Order_By>>
  where?: Maybe<Favorites_Bool_Exp>
}

/** subscription root */
export type Subscription_RootFavorites_AggregateArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Favorites_Order_By>>
  where?: Maybe<Favorites_Bool_Exp>
}

/** subscription root */
export type Subscription_RootFavorites_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootInvitesArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Invites_Order_By>>
  where?: Maybe<Invites_Bool_Exp>
}

/** subscription root */
export type Subscription_RootInvites_AggregateArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Invites_Order_By>>
  where?: Maybe<Invites_Bool_Exp>
}

/** subscription root */
export type Subscription_RootInvites_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootPermissionArgs = {
  distinct_on?: Maybe<Array<Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Permission_Order_By>>
  where?: Maybe<Permission_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPermission_AggregateArgs = {
  distinct_on?: Maybe<Array<Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Permission_Order_By>>
  where?: Maybe<Permission_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPermission_By_PkArgs = {
  id: Scalars['String']
}

/** subscription root */
export type Subscription_RootPositionsArgs = {
  distinct_on?: Maybe<Array<Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Positions_Order_By>>
  where?: Maybe<Positions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPositions_AggregateArgs = {
  distinct_on?: Maybe<Array<Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Positions_Order_By>>
  where?: Maybe<Positions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPositions_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootStatusesArgs = {
  distinct_on?: Maybe<Array<Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Statuses_Order_By>>
  where?: Maybe<Statuses_Bool_Exp>
}

/** subscription root */
export type Subscription_RootStatuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Statuses_Order_By>>
  where?: Maybe<Statuses_Bool_Exp>
}

/** subscription root */
export type Subscription_RootStatuses_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootTagsArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tags_Order_By>>
  where?: Maybe<Tags_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tags_Order_By>>
  where?: Maybe<Tags_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTags_By_PkArgs = {
  tag: Scalars['String']
}

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootUsers_DepartmentsArgs = {
  distinct_on?: Maybe<Array<Users_Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Departments_Order_By>>
  where?: Maybe<Users_Departments_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_Departments_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Departments_Order_By>>
  where?: Maybe<Users_Departments_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_Departments_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootUsers_In_BasesArgs = {
  distinct_on?: Maybe<Array<Users_In_Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_In_Bases_Order_By>>
  where?: Maybe<Users_In_Bases_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_In_Bases_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_In_Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_In_Bases_Order_By>>
  where?: Maybe<Users_In_Bases_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_In_Bases_By_PkArgs = {
  base_id: Scalars['uuid']
  user_id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootUsers_PermissionsArgs = {
  distinct_on?: Maybe<Array<Users_Permissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Permissions_Order_By>>
  where?: Maybe<Users_Permissions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_Permissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Permissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Permissions_Order_By>>
  where?: Maybe<Users_Permissions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_Permissions_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootUsers_PositionsArgs = {
  distinct_on?: Maybe<Array<Users_Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Positions_Order_By>>
  where?: Maybe<Users_Positions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_Positions_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Positions_Order_By>>
  where?: Maybe<Users_Positions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_Positions_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootUsers_Read_ArticlesArgs = {
  distinct_on?: Maybe<Array<Users_Read_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Read_Articles_Order_By>>
  where?: Maybe<Users_Read_Articles_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_Read_Articles_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Read_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Read_Articles_Order_By>>
  where?: Maybe<Users_Read_Articles_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_Read_Articles_By_PkArgs = {
  article_id: Scalars['uuid']
  user_id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootUsers_StatusesArgs = {
  distinct_on?: Maybe<Array<Users_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Statuses_Order_By>>
  where?: Maybe<Users_Statuses_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Statuses_Order_By>>
  where?: Maybe<Users_Statuses_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_Statuses_By_PkArgs = {
  id: Scalars['uuid']
}

/**
 * Теги
 *
 *
 * columns and relationships of "tags"
 */
export type Tags = {
  __typename?: 'tags'
  /** An array relationship */
  articles: Array<Articles_Tags>
  /** An aggregated array relationship */
  articles_aggregate: Articles_Tags_Aggregate
  tag: Scalars['String']
}

/**
 * Теги
 *
 *
 * columns and relationships of "tags"
 */
export type TagsArticlesArgs = {
  distinct_on?: Maybe<Array<Articles_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Tags_Order_By>>
  where?: Maybe<Articles_Tags_Bool_Exp>
}

/**
 * Теги
 *
 *
 * columns and relationships of "tags"
 */
export type TagsArticles_AggregateArgs = {
  distinct_on?: Maybe<Array<Articles_Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Tags_Order_By>>
  where?: Maybe<Articles_Tags_Bool_Exp>
}

/** aggregated selection of "tags" */
export type Tags_Aggregate = {
  __typename?: 'tags_aggregate'
  aggregate?: Maybe<Tags_Aggregate_Fields>
  nodes: Array<Tags>
}

/** aggregate fields of "tags" */
export type Tags_Aggregate_Fields = {
  __typename?: 'tags_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Tags_Max_Fields>
  min?: Maybe<Tags_Min_Fields>
}

/** aggregate fields of "tags" */
export type Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tags_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tags" */
export type Tags_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Tags_Max_Order_By>
  min?: Maybe<Tags_Min_Order_By>
}

/** input type for inserting array relation for remote table "tags" */
export type Tags_Arr_Rel_Insert_Input = {
  data: Array<Tags_Insert_Input>
  on_conflict?: Maybe<Tags_On_Conflict>
}

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tags_Bool_Exp>>>
  _not?: Maybe<Tags_Bool_Exp>
  _or?: Maybe<Array<Maybe<Tags_Bool_Exp>>>
  articles?: Maybe<Articles_Tags_Bool_Exp>
  tag?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "tags" */
export enum Tags_Constraint {
  /** unique or primary key constraint */
  TagsPkey = 'tags_pkey'
}

/** input type for inserting data into table "tags" */
export type Tags_Insert_Input = {
  articles?: Maybe<Articles_Tags_Arr_Rel_Insert_Input>
  tag?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Tags_Max_Fields = {
  __typename?: 'tags_max_fields'
  tag?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "tags" */
export type Tags_Max_Order_By = {
  tag?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tags_Min_Fields = {
  __typename?: 'tags_min_fields'
  tag?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "tags" */
export type Tags_Min_Order_By = {
  tag?: Maybe<Order_By>
}

/** response of any mutation on the table "tags" */
export type Tags_Mutation_Response = {
  __typename?: 'tags_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Tags>
}

/** input type for inserting object relation for remote table "tags" */
export type Tags_Obj_Rel_Insert_Input = {
  data: Tags_Insert_Input
  on_conflict?: Maybe<Tags_On_Conflict>
}

/** on conflict condition type for table "tags" */
export type Tags_On_Conflict = {
  constraint: Tags_Constraint
  update_columns: Array<Tags_Update_Column>
  where?: Maybe<Tags_Bool_Exp>
}

/** ordering options when selecting data from "tags" */
export type Tags_Order_By = {
  articles_aggregate?: Maybe<Articles_Tags_Aggregate_Order_By>
  tag?: Maybe<Order_By>
}

/** primary key columns input for table: "tags" */
export type Tags_Pk_Columns_Input = {
  tag: Scalars['String']
}

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  Tag = 'tag'
}

/** input type for updating data in table "tags" */
export type Tags_Set_Input = {
  tag?: Maybe<Scalars['String']>
}

/** update columns of table "tags" */
export enum Tags_Update_Column {
  /** column name */
  Tag = 'tag'
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type Users = {
  __typename?: 'users'
  /** An object relationship */
  account?: Maybe<Auth_Accounts>
  /** An array relationship */
  articles: Array<Articles>
  /** An aggregated array relationship */
  articles_aggregate: Articles_Aggregate
  avatar_url?: Maybe<Scalars['String']>
  /** An array relationship */
  bases: Array<Users_In_Bases>
  /** An aggregated array relationship */
  bases_aggregate: Users_In_Bases_Aggregate
  /** An array relationship */
  comments: Array<Comments>
  /** An aggregated array relationship */
  comments_aggregate: Comments_Aggregate
  created_at: Scalars['timestamptz']
  /** An array relationship */
  departments: Array<Users_Departments>
  /** An aggregated array relationship */
  departments_aggregate: Users_Departments_Aggregate
  display_name?: Maybe<Scalars['String']>
  /** An array relationship */
  favorites: Array<Favorites>
  /** An aggregated array relationship */
  favorites_aggregate: Favorites_Aggregate
  first_name?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  last_name?: Maybe<Scalars['String']>
  middle_name?: Maybe<Scalars['String']>
  /** An array relationship */
  my_bases: Array<Bases>
  /** An aggregated array relationship */
  my_bases_aggregate: Bases_Aggregate
  /** An array relationship */
  permissions: Array<Users_Permissions>
  /** An aggregated array relationship */
  permissions_aggregate: Users_Permissions_Aggregate
  phone_number?: Maybe<Scalars['String']>
  /** An array relationship */
  positions: Array<Users_Positions>
  /** An aggregated array relationship */
  positions_aggregate: Users_Positions_Aggregate
  /** An array relationship */
  read_articles: Array<Users_Read_Articles>
  /** An aggregated array relationship */
  read_articles_aggregate: Users_Read_Articles_Aggregate
  /** An array relationship */
  statuses: Array<Users_Statuses>
  /** An aggregated array relationship */
  statuses_aggregate: Users_Statuses_Aggregate
  updated_at: Scalars['timestamptz']
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersArticlesArgs = {
  distinct_on?: Maybe<Array<Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Order_By>>
  where?: Maybe<Articles_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersArticles_AggregateArgs = {
  distinct_on?: Maybe<Array<Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Articles_Order_By>>
  where?: Maybe<Articles_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersBasesArgs = {
  distinct_on?: Maybe<Array<Users_In_Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_In_Bases_Order_By>>
  where?: Maybe<Users_In_Bases_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersBases_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_In_Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_In_Bases_Order_By>>
  where?: Maybe<Users_In_Bases_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersDepartmentsArgs = {
  distinct_on?: Maybe<Array<Users_Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Departments_Order_By>>
  where?: Maybe<Users_Departments_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersDepartments_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Departments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Departments_Order_By>>
  where?: Maybe<Users_Departments_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersFavoritesArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Favorites_Order_By>>
  where?: Maybe<Favorites_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersFavorites_AggregateArgs = {
  distinct_on?: Maybe<Array<Favorites_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Favorites_Order_By>>
  where?: Maybe<Favorites_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersMy_BasesArgs = {
  distinct_on?: Maybe<Array<Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bases_Order_By>>
  where?: Maybe<Bases_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersMy_Bases_AggregateArgs = {
  distinct_on?: Maybe<Array<Bases_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bases_Order_By>>
  where?: Maybe<Bases_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersPermissionsArgs = {
  distinct_on?: Maybe<Array<Users_Permissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Permissions_Order_By>>
  where?: Maybe<Users_Permissions_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersPermissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Permissions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Permissions_Order_By>>
  where?: Maybe<Users_Permissions_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersPositionsArgs = {
  distinct_on?: Maybe<Array<Users_Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Positions_Order_By>>
  where?: Maybe<Users_Positions_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersPositions_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Positions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Positions_Order_By>>
  where?: Maybe<Users_Positions_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersRead_ArticlesArgs = {
  distinct_on?: Maybe<Array<Users_Read_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Read_Articles_Order_By>>
  where?: Maybe<Users_Read_Articles_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersRead_Articles_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Read_Articles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Read_Articles_Order_By>>
  where?: Maybe<Users_Read_Articles_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersStatusesArgs = {
  distinct_on?: Maybe<Array<Users_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Statuses_Order_By>>
  where?: Maybe<Users_Statuses_Bool_Exp>
}

/**
 * Пользователи
 *
 *
 * columns and relationships of "users"
 */
export type UsersStatuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Statuses_Order_By>>
  where?: Maybe<Users_Statuses_Bool_Exp>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Users_Max_Order_By>
  min?: Maybe<Users_Min_Order_By>
}

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>
  _not?: Maybe<Users_Bool_Exp>
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>
  account?: Maybe<Auth_Accounts_Bool_Exp>
  articles?: Maybe<Articles_Bool_Exp>
  avatar_url?: Maybe<String_Comparison_Exp>
  bases?: Maybe<Users_In_Bases_Bool_Exp>
  comments?: Maybe<Comments_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  departments?: Maybe<Users_Departments_Bool_Exp>
  display_name?: Maybe<String_Comparison_Exp>
  favorites?: Maybe<Favorites_Bool_Exp>
  first_name?: Maybe<String_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  last_name?: Maybe<String_Comparison_Exp>
  middle_name?: Maybe<String_Comparison_Exp>
  my_bases?: Maybe<Bases_Bool_Exp>
  permissions?: Maybe<Users_Permissions_Bool_Exp>
  phone_number?: Maybe<String_Comparison_Exp>
  positions?: Maybe<Users_Positions_Bool_Exp>
  read_articles?: Maybe<Users_Read_Articles_Bool_Exp>
  statuses?: Maybe<Users_Statuses_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/**
 * Пользователи в отделах
 *
 *
 * columns and relationships of "users_departments"
 */
export type Users_Departments = {
  __typename?: 'users_departments'
  created_at: Scalars['timestamptz']
  /** An object relationship */
  department: Departments
  department_id: Scalars['uuid']
  id: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Users
  user_id: Scalars['uuid']
}

/** aggregated selection of "users_departments" */
export type Users_Departments_Aggregate = {
  __typename?: 'users_departments_aggregate'
  aggregate?: Maybe<Users_Departments_Aggregate_Fields>
  nodes: Array<Users_Departments>
}

/** aggregate fields of "users_departments" */
export type Users_Departments_Aggregate_Fields = {
  __typename?: 'users_departments_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Users_Departments_Max_Fields>
  min?: Maybe<Users_Departments_Min_Fields>
}

/** aggregate fields of "users_departments" */
export type Users_Departments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Departments_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users_departments" */
export type Users_Departments_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Users_Departments_Max_Order_By>
  min?: Maybe<Users_Departments_Min_Order_By>
}

/** input type for inserting array relation for remote table "users_departments" */
export type Users_Departments_Arr_Rel_Insert_Input = {
  data: Array<Users_Departments_Insert_Input>
  on_conflict?: Maybe<Users_Departments_On_Conflict>
}

/** Boolean expression to filter rows from the table "users_departments". All fields are combined with a logical 'AND'. */
export type Users_Departments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Departments_Bool_Exp>>>
  _not?: Maybe<Users_Departments_Bool_Exp>
  _or?: Maybe<Array<Maybe<Users_Departments_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  department?: Maybe<Departments_Bool_Exp>
  department_id?: Maybe<Uuid_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "users_departments" */
export enum Users_Departments_Constraint {
  /** unique or primary key constraint */
  UsersDepartmentsPkey = 'users_departments_pkey',
  /** unique or primary key constraint */
  UsersDepartmentsUserIdDepartmentIdKey = 'users_departments_user_id_department_id_key'
}

/** input type for inserting data into table "users_departments" */
export type Users_Departments_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  department?: Maybe<Departments_Obj_Rel_Insert_Input>
  department_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Users_Departments_Max_Fields = {
  __typename?: 'users_departments_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  department_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "users_departments" */
export type Users_Departments_Max_Order_By = {
  created_at?: Maybe<Order_By>
  department_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_Departments_Min_Fields = {
  __typename?: 'users_departments_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  department_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "users_departments" */
export type Users_Departments_Min_Order_By = {
  created_at?: Maybe<Order_By>
  department_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "users_departments" */
export type Users_Departments_Mutation_Response = {
  __typename?: 'users_departments_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Users_Departments>
}

/** input type for inserting object relation for remote table "users_departments" */
export type Users_Departments_Obj_Rel_Insert_Input = {
  data: Users_Departments_Insert_Input
  on_conflict?: Maybe<Users_Departments_On_Conflict>
}

/** on conflict condition type for table "users_departments" */
export type Users_Departments_On_Conflict = {
  constraint: Users_Departments_Constraint
  update_columns: Array<Users_Departments_Update_Column>
  where?: Maybe<Users_Departments_Bool_Exp>
}

/** ordering options when selecting data from "users_departments" */
export type Users_Departments_Order_By = {
  created_at?: Maybe<Order_By>
  department?: Maybe<Departments_Order_By>
  department_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: "users_departments" */
export type Users_Departments_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "users_departments" */
export enum Users_Departments_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentId = 'department_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_departments" */
export type Users_Departments_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  department_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "users_departments" */
export enum Users_Departments_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentId = 'department_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "users_in_bases" */
export type Users_In_Bases = {
  __typename?: 'users_in_bases'
  /** An object relationship */
  base: Bases
  base_id: Scalars['uuid']
  /** An object relationship */
  user: Users
  user_id: Scalars['uuid']
}

/** aggregated selection of "users_in_bases" */
export type Users_In_Bases_Aggregate = {
  __typename?: 'users_in_bases_aggregate'
  aggregate?: Maybe<Users_In_Bases_Aggregate_Fields>
  nodes: Array<Users_In_Bases>
}

/** aggregate fields of "users_in_bases" */
export type Users_In_Bases_Aggregate_Fields = {
  __typename?: 'users_in_bases_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Users_In_Bases_Max_Fields>
  min?: Maybe<Users_In_Bases_Min_Fields>
}

/** aggregate fields of "users_in_bases" */
export type Users_In_Bases_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_In_Bases_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users_in_bases" */
export type Users_In_Bases_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Users_In_Bases_Max_Order_By>
  min?: Maybe<Users_In_Bases_Min_Order_By>
}

/** input type for inserting array relation for remote table "users_in_bases" */
export type Users_In_Bases_Arr_Rel_Insert_Input = {
  data: Array<Users_In_Bases_Insert_Input>
  on_conflict?: Maybe<Users_In_Bases_On_Conflict>
}

/** Boolean expression to filter rows from the table "users_in_bases". All fields are combined with a logical 'AND'. */
export type Users_In_Bases_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_In_Bases_Bool_Exp>>>
  _not?: Maybe<Users_In_Bases_Bool_Exp>
  _or?: Maybe<Array<Maybe<Users_In_Bases_Bool_Exp>>>
  base?: Maybe<Bases_Bool_Exp>
  base_id?: Maybe<Uuid_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "users_in_bases" */
export enum Users_In_Bases_Constraint {
  /** unique or primary key constraint */
  UsersInBasesPkey = 'users_in_bases_pkey'
}

/** input type for inserting data into table "users_in_bases" */
export type Users_In_Bases_Insert_Input = {
  base?: Maybe<Bases_Obj_Rel_Insert_Input>
  base_id?: Maybe<Scalars['uuid']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Users_In_Bases_Max_Fields = {
  __typename?: 'users_in_bases_max_fields'
  base_id?: Maybe<Scalars['uuid']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "users_in_bases" */
export type Users_In_Bases_Max_Order_By = {
  base_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_In_Bases_Min_Fields = {
  __typename?: 'users_in_bases_min_fields'
  base_id?: Maybe<Scalars['uuid']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "users_in_bases" */
export type Users_In_Bases_Min_Order_By = {
  base_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "users_in_bases" */
export type Users_In_Bases_Mutation_Response = {
  __typename?: 'users_in_bases_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Users_In_Bases>
}

/** input type for inserting object relation for remote table "users_in_bases" */
export type Users_In_Bases_Obj_Rel_Insert_Input = {
  data: Users_In_Bases_Insert_Input
  on_conflict?: Maybe<Users_In_Bases_On_Conflict>
}

/** on conflict condition type for table "users_in_bases" */
export type Users_In_Bases_On_Conflict = {
  constraint: Users_In_Bases_Constraint
  update_columns: Array<Users_In_Bases_Update_Column>
  where?: Maybe<Users_In_Bases_Bool_Exp>
}

/** ordering options when selecting data from "users_in_bases" */
export type Users_In_Bases_Order_By = {
  base?: Maybe<Bases_Order_By>
  base_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: "users_in_bases" */
export type Users_In_Bases_Pk_Columns_Input = {
  base_id: Scalars['uuid']
  user_id: Scalars['uuid']
}

/** select columns of table "users_in_bases" */
export enum Users_In_Bases_Select_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_in_bases" */
export type Users_In_Bases_Set_Input = {
  base_id?: Maybe<Scalars['uuid']>
  user_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "users_in_bases" */
export enum Users_In_Bases_Update_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>
  articles?: Maybe<Articles_Arr_Rel_Insert_Input>
  avatar_url?: Maybe<Scalars['String']>
  bases?: Maybe<Users_In_Bases_Arr_Rel_Insert_Input>
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  departments?: Maybe<Users_Departments_Arr_Rel_Insert_Input>
  display_name?: Maybe<Scalars['String']>
  favorites?: Maybe<Favorites_Arr_Rel_Insert_Input>
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  last_name?: Maybe<Scalars['String']>
  middle_name?: Maybe<Scalars['String']>
  my_bases?: Maybe<Bases_Arr_Rel_Insert_Input>
  permissions?: Maybe<Users_Permissions_Arr_Rel_Insert_Input>
  phone_number?: Maybe<Scalars['String']>
  positions?: Maybe<Users_Positions_Arr_Rel_Insert_Input>
  read_articles?: Maybe<Users_Read_Articles_Arr_Rel_Insert_Input>
  statuses?: Maybe<Users_Statuses_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  avatar_url?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  display_name?: Maybe<Scalars['String']>
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  last_name?: Maybe<Scalars['String']>
  middle_name?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  avatar_url?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  display_name?: Maybe<Order_By>
  first_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_name?: Maybe<Order_By>
  middle_name?: Maybe<Order_By>
  phone_number?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  avatar_url?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  display_name?: Maybe<Scalars['String']>
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  last_name?: Maybe<Scalars['String']>
  middle_name?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  avatar_url?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  display_name?: Maybe<Order_By>
  first_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_name?: Maybe<Order_By>
  middle_name?: Maybe<Order_By>
  phone_number?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns: Array<Users_Update_Column>
  where?: Maybe<Users_Bool_Exp>
}

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>
  articles_aggregate?: Maybe<Articles_Aggregate_Order_By>
  avatar_url?: Maybe<Order_By>
  bases_aggregate?: Maybe<Users_In_Bases_Aggregate_Order_By>
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>
  created_at?: Maybe<Order_By>
  departments_aggregate?: Maybe<Users_Departments_Aggregate_Order_By>
  display_name?: Maybe<Order_By>
  favorites_aggregate?: Maybe<Favorites_Aggregate_Order_By>
  first_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_name?: Maybe<Order_By>
  middle_name?: Maybe<Order_By>
  my_bases_aggregate?: Maybe<Bases_Aggregate_Order_By>
  permissions_aggregate?: Maybe<Users_Permissions_Aggregate_Order_By>
  phone_number?: Maybe<Order_By>
  positions_aggregate?: Maybe<Users_Positions_Aggregate_Order_By>
  read_articles_aggregate?: Maybe<Users_Read_Articles_Aggregate_Order_By>
  statuses_aggregate?: Maybe<Users_Statuses_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/**
 * Права доступа пользователей
 *
 *
 * columns and relationships of "users_permissions"
 */
export type Users_Permissions = {
  __typename?: 'users_permissions'
  /** An object relationship */
  base: Bases
  base_id: Scalars['uuid']
  created_at: Scalars['timestamptz']
  id: Scalars['uuid']
  permission: Scalars['String']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Users
  user_id: Scalars['uuid']
}

/** aggregated selection of "users_permissions" */
export type Users_Permissions_Aggregate = {
  __typename?: 'users_permissions_aggregate'
  aggregate?: Maybe<Users_Permissions_Aggregate_Fields>
  nodes: Array<Users_Permissions>
}

/** aggregate fields of "users_permissions" */
export type Users_Permissions_Aggregate_Fields = {
  __typename?: 'users_permissions_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Users_Permissions_Max_Fields>
  min?: Maybe<Users_Permissions_Min_Fields>
}

/** aggregate fields of "users_permissions" */
export type Users_Permissions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Permissions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users_permissions" */
export type Users_Permissions_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Users_Permissions_Max_Order_By>
  min?: Maybe<Users_Permissions_Min_Order_By>
}

/** input type for inserting array relation for remote table "users_permissions" */
export type Users_Permissions_Arr_Rel_Insert_Input = {
  data: Array<Users_Permissions_Insert_Input>
  on_conflict?: Maybe<Users_Permissions_On_Conflict>
}

/** Boolean expression to filter rows from the table "users_permissions". All fields are combined with a logical 'AND'. */
export type Users_Permissions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Permissions_Bool_Exp>>>
  _not?: Maybe<Users_Permissions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Users_Permissions_Bool_Exp>>>
  base?: Maybe<Bases_Bool_Exp>
  base_id?: Maybe<Uuid_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  permission?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "users_permissions" */
export enum Users_Permissions_Constraint {
  /** unique or primary key constraint */
  UsersPermissionsPkey = 'users_permissions_pkey',
  /** unique or primary key constraint */
  UsersPermissionsUserIdBaseIdPermissionKey = 'users_permissions_user_id_base_id_permission_key'
}

/** input type for inserting data into table "users_permissions" */
export type Users_Permissions_Insert_Input = {
  base?: Maybe<Bases_Obj_Rel_Insert_Input>
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  permission?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Users_Permissions_Max_Fields = {
  __typename?: 'users_permissions_max_fields'
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  permission?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "users_permissions" */
export type Users_Permissions_Max_Order_By = {
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  permission?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_Permissions_Min_Fields = {
  __typename?: 'users_permissions_min_fields'
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  permission?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "users_permissions" */
export type Users_Permissions_Min_Order_By = {
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  permission?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "users_permissions" */
export type Users_Permissions_Mutation_Response = {
  __typename?: 'users_permissions_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Users_Permissions>
}

/** input type for inserting object relation for remote table "users_permissions" */
export type Users_Permissions_Obj_Rel_Insert_Input = {
  data: Users_Permissions_Insert_Input
  on_conflict?: Maybe<Users_Permissions_On_Conflict>
}

/** on conflict condition type for table "users_permissions" */
export type Users_Permissions_On_Conflict = {
  constraint: Users_Permissions_Constraint
  update_columns: Array<Users_Permissions_Update_Column>
  where?: Maybe<Users_Permissions_Bool_Exp>
}

/** ordering options when selecting data from "users_permissions" */
export type Users_Permissions_Order_By = {
  base?: Maybe<Bases_Order_By>
  base_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  permission?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: "users_permissions" */
export type Users_Permissions_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "users_permissions" */
export enum Users_Permissions_Select_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Permission = 'permission',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_permissions" */
export type Users_Permissions_Set_Input = {
  base_id?: Maybe<Scalars['uuid']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  permission?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "users_permissions" */
export enum Users_Permissions_Update_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Permission = 'permission',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/**
 * Должности пользователей
 *
 *
 * columns and relationships of "users_positions"
 */
export type Users_Positions = {
  __typename?: 'users_positions'
  created_at: Scalars['timestamptz']
  id: Scalars['uuid']
  /** An object relationship */
  position: Positions
  position_id: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Users
  user_id: Scalars['uuid']
}

/** aggregated selection of "users_positions" */
export type Users_Positions_Aggregate = {
  __typename?: 'users_positions_aggregate'
  aggregate?: Maybe<Users_Positions_Aggregate_Fields>
  nodes: Array<Users_Positions>
}

/** aggregate fields of "users_positions" */
export type Users_Positions_Aggregate_Fields = {
  __typename?: 'users_positions_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Users_Positions_Max_Fields>
  min?: Maybe<Users_Positions_Min_Fields>
}

/** aggregate fields of "users_positions" */
export type Users_Positions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Positions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users_positions" */
export type Users_Positions_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Users_Positions_Max_Order_By>
  min?: Maybe<Users_Positions_Min_Order_By>
}

/** input type for inserting array relation for remote table "users_positions" */
export type Users_Positions_Arr_Rel_Insert_Input = {
  data: Array<Users_Positions_Insert_Input>
  on_conflict?: Maybe<Users_Positions_On_Conflict>
}

/** Boolean expression to filter rows from the table "users_positions". All fields are combined with a logical 'AND'. */
export type Users_Positions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Positions_Bool_Exp>>>
  _not?: Maybe<Users_Positions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Users_Positions_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  position?: Maybe<Positions_Bool_Exp>
  position_id?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "users_positions" */
export enum Users_Positions_Constraint {
  /** unique or primary key constraint */
  UsersPositionsPkey = 'users_positions_pkey',
  /** unique or primary key constraint */
  UsersPositionsUserIdPositionIdKey = 'users_positions_user_id_position_id_key'
}

/** input type for inserting data into table "users_positions" */
export type Users_Positions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  position?: Maybe<Positions_Obj_Rel_Insert_Input>
  position_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Users_Positions_Max_Fields = {
  __typename?: 'users_positions_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  position_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "users_positions" */
export type Users_Positions_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  position_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_Positions_Min_Fields = {
  __typename?: 'users_positions_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  position_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "users_positions" */
export type Users_Positions_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  position_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "users_positions" */
export type Users_Positions_Mutation_Response = {
  __typename?: 'users_positions_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Users_Positions>
}

/** input type for inserting object relation for remote table "users_positions" */
export type Users_Positions_Obj_Rel_Insert_Input = {
  data: Users_Positions_Insert_Input
  on_conflict?: Maybe<Users_Positions_On_Conflict>
}

/** on conflict condition type for table "users_positions" */
export type Users_Positions_On_Conflict = {
  constraint: Users_Positions_Constraint
  update_columns: Array<Users_Positions_Update_Column>
  where?: Maybe<Users_Positions_Bool_Exp>
}

/** ordering options when selecting data from "users_positions" */
export type Users_Positions_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  position?: Maybe<Positions_Order_By>
  position_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: "users_positions" */
export type Users_Positions_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "users_positions" */
export enum Users_Positions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PositionId = 'position_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_positions" */
export type Users_Positions_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  position_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "users_positions" */
export enum Users_Positions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PositionId = 'position_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/**
 * Прочитанные статьи
 *
 *
 * columns and relationships of "users_read_articles"
 */
export type Users_Read_Articles = {
  __typename?: 'users_read_articles'
  /** An object relationship */
  article: Articles
  article_id: Scalars['uuid']
  /** An object relationship */
  user: Users
  user_id: Scalars['uuid']
}

/** aggregated selection of "users_read_articles" */
export type Users_Read_Articles_Aggregate = {
  __typename?: 'users_read_articles_aggregate'
  aggregate?: Maybe<Users_Read_Articles_Aggregate_Fields>
  nodes: Array<Users_Read_Articles>
}

/** aggregate fields of "users_read_articles" */
export type Users_Read_Articles_Aggregate_Fields = {
  __typename?: 'users_read_articles_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Users_Read_Articles_Max_Fields>
  min?: Maybe<Users_Read_Articles_Min_Fields>
}

/** aggregate fields of "users_read_articles" */
export type Users_Read_Articles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Read_Articles_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users_read_articles" */
export type Users_Read_Articles_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Users_Read_Articles_Max_Order_By>
  min?: Maybe<Users_Read_Articles_Min_Order_By>
}

/** input type for inserting array relation for remote table "users_read_articles" */
export type Users_Read_Articles_Arr_Rel_Insert_Input = {
  data: Array<Users_Read_Articles_Insert_Input>
  on_conflict?: Maybe<Users_Read_Articles_On_Conflict>
}

/** Boolean expression to filter rows from the table "users_read_articles". All fields are combined with a logical 'AND'. */
export type Users_Read_Articles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Read_Articles_Bool_Exp>>>
  _not?: Maybe<Users_Read_Articles_Bool_Exp>
  _or?: Maybe<Array<Maybe<Users_Read_Articles_Bool_Exp>>>
  article?: Maybe<Articles_Bool_Exp>
  article_id?: Maybe<Uuid_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "users_read_articles" */
export enum Users_Read_Articles_Constraint {
  /** unique or primary key constraint */
  ReadArticlesPkey = 'read_articles_pkey'
}

/** input type for inserting data into table "users_read_articles" */
export type Users_Read_Articles_Insert_Input = {
  article?: Maybe<Articles_Obj_Rel_Insert_Input>
  article_id?: Maybe<Scalars['uuid']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Users_Read_Articles_Max_Fields = {
  __typename?: 'users_read_articles_max_fields'
  article_id?: Maybe<Scalars['uuid']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "users_read_articles" */
export type Users_Read_Articles_Max_Order_By = {
  article_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_Read_Articles_Min_Fields = {
  __typename?: 'users_read_articles_min_fields'
  article_id?: Maybe<Scalars['uuid']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "users_read_articles" */
export type Users_Read_Articles_Min_Order_By = {
  article_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "users_read_articles" */
export type Users_Read_Articles_Mutation_Response = {
  __typename?: 'users_read_articles_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Users_Read_Articles>
}

/** input type for inserting object relation for remote table "users_read_articles" */
export type Users_Read_Articles_Obj_Rel_Insert_Input = {
  data: Users_Read_Articles_Insert_Input
  on_conflict?: Maybe<Users_Read_Articles_On_Conflict>
}

/** on conflict condition type for table "users_read_articles" */
export type Users_Read_Articles_On_Conflict = {
  constraint: Users_Read_Articles_Constraint
  update_columns: Array<Users_Read_Articles_Update_Column>
  where?: Maybe<Users_Read_Articles_Bool_Exp>
}

/** ordering options when selecting data from "users_read_articles" */
export type Users_Read_Articles_Order_By = {
  article?: Maybe<Articles_Order_By>
  article_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: "users_read_articles" */
export type Users_Read_Articles_Pk_Columns_Input = {
  article_id: Scalars['uuid']
  user_id: Scalars['uuid']
}

/** select columns of table "users_read_articles" */
export enum Users_Read_Articles_Select_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_read_articles" */
export type Users_Read_Articles_Set_Input = {
  article_id?: Maybe<Scalars['uuid']>
  user_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "users_read_articles" */
export enum Users_Read_Articles_Update_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  UserId = 'user_id'
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_url?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  display_name?: Maybe<Scalars['String']>
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  last_name?: Maybe<Scalars['String']>
  middle_name?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/**
 * Статусы пользователей
 *
 *
 * columns and relationships of "users_statuses"
 */
export type Users_Statuses = {
  __typename?: 'users_statuses'
  created_at: Scalars['timestamptz']
  id: Scalars['uuid']
  /** An object relationship */
  status: Statuses
  status_id: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Users
  user_id: Scalars['uuid']
}

/** aggregated selection of "users_statuses" */
export type Users_Statuses_Aggregate = {
  __typename?: 'users_statuses_aggregate'
  aggregate?: Maybe<Users_Statuses_Aggregate_Fields>
  nodes: Array<Users_Statuses>
}

/** aggregate fields of "users_statuses" */
export type Users_Statuses_Aggregate_Fields = {
  __typename?: 'users_statuses_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Users_Statuses_Max_Fields>
  min?: Maybe<Users_Statuses_Min_Fields>
}

/** aggregate fields of "users_statuses" */
export type Users_Statuses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Statuses_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users_statuses" */
export type Users_Statuses_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Users_Statuses_Max_Order_By>
  min?: Maybe<Users_Statuses_Min_Order_By>
}

/** input type for inserting array relation for remote table "users_statuses" */
export type Users_Statuses_Arr_Rel_Insert_Input = {
  data: Array<Users_Statuses_Insert_Input>
  on_conflict?: Maybe<Users_Statuses_On_Conflict>
}

/** Boolean expression to filter rows from the table "users_statuses". All fields are combined with a logical 'AND'. */
export type Users_Statuses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Statuses_Bool_Exp>>>
  _not?: Maybe<Users_Statuses_Bool_Exp>
  _or?: Maybe<Array<Maybe<Users_Statuses_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  status?: Maybe<Statuses_Bool_Exp>
  status_id?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "users_statuses" */
export enum Users_Statuses_Constraint {
  /** unique or primary key constraint */
  UsersStatusesPkey = 'users_statuses_pkey'
}

/** input type for inserting data into table "users_statuses" */
export type Users_Statuses_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  status?: Maybe<Statuses_Obj_Rel_Insert_Input>
  status_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Users_Statuses_Max_Fields = {
  __typename?: 'users_statuses_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  status_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "users_statuses" */
export type Users_Statuses_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  status_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_Statuses_Min_Fields = {
  __typename?: 'users_statuses_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  status_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "users_statuses" */
export type Users_Statuses_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  status_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "users_statuses" */
export type Users_Statuses_Mutation_Response = {
  __typename?: 'users_statuses_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Users_Statuses>
}

/** input type for inserting object relation for remote table "users_statuses" */
export type Users_Statuses_Obj_Rel_Insert_Input = {
  data: Users_Statuses_Insert_Input
  on_conflict?: Maybe<Users_Statuses_On_Conflict>
}

/** on conflict condition type for table "users_statuses" */
export type Users_Statuses_On_Conflict = {
  constraint: Users_Statuses_Constraint
  update_columns: Array<Users_Statuses_Update_Column>
  where?: Maybe<Users_Statuses_Bool_Exp>
}

/** ordering options when selecting data from "users_statuses" */
export type Users_Statuses_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  status?: Maybe<Statuses_Order_By>
  status_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: "users_statuses" */
export type Users_Statuses_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "users_statuses" */
export enum Users_Statuses_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_statuses" */
export type Users_Statuses_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  status_id?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "users_statuses" */
export enum Users_Statuses_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>
  _gt?: Maybe<Scalars['uuid']>
  _gte?: Maybe<Scalars['uuid']>
  _in?: Maybe<Array<Scalars['uuid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['uuid']>
  _lte?: Maybe<Scalars['uuid']>
  _neq?: Maybe<Scalars['uuid']>
  _nin?: Maybe<Array<Scalars['uuid']>>
}

export type UserFragment = { __typename: 'users' } & Pick<
  Users,
  'id' | 'display_name' | 'avatar_url' | 'phone_number'
> & { account?: Maybe<{ __typename?: 'auth_accounts' } & UserAccountFragment> }

export type UserAccountFragment = { __typename: 'auth_accounts' } & Pick<
  Auth_Accounts,
  'id' | 'email' | 'user_id'
>

export type CurrentUserFragment = { __typename?: 'users' } & UserFragment

export type UpdateCurrentUserMutationVariables = Exact<{
  userId: Scalars['uuid']
  user: Users_Set_Input
  account: Auth_Accounts_Set_Input
}>

export type UpdateCurrentUserMutation = { __typename?: 'mutation_root' } & {
  user?: Maybe<{ __typename?: 'users' } & CurrentUserFragment>
  account?: Maybe<
    { __typename?: 'auth_accounts_mutation_response' } & {
      returning: Array<{ __typename?: 'auth_accounts' } & UserAccountFragment>
    }
  >
}

export type GetCurrentUserQueryVariables = Exact<{
  userId: Scalars['uuid']
}>

export type GetCurrentUserQuery = { __typename?: 'query_root' } & {
  user?: Maybe<{ __typename?: 'users' } & CurrentUserFragment>
}

export type CurrentUserSubscriptionVariables = Exact<{
  userId: Scalars['uuid']
}>

export type CurrentUserSubscription = { __typename?: 'subscription_root' } & {
  user?: Maybe<{ __typename?: 'users' } & CurrentUserFragment>
}
