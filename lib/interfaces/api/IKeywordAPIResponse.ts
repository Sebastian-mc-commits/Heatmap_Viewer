
export interface IKeywordResponse {

  primary_local_keywords: string[],
  natural_language_local_queries: string[],
  maps_short_keywords: string[],
  high_relevance_business_keywords: string[],
  image_prompt: string[],
}

export interface IKeywordRequest {
  business_services: string;
  business_name: string;
  business_description: string;
  address: string;
  main_keyword?: string
  excluded_keywords?: string[]
  reviews?: string[]
  keywords_amount?: number
  city: string
  language_code?: string
}