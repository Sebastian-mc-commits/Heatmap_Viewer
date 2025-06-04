import { IBaseResponse, IDBase } from "./IBaseAPIResponse";

export type RankByParam = "scrapping" | "data_for_seo_api" |
  "nearby_places_google" | "text_search_google" | "standard_mode_dfs";

export type ResultHandlerParam = "create_html_analysis" |
  "insert_into_db_and_create_analysis" | "insert_into_db";

export type GridPointsParam = "6x6" | "7x7" | "8x8" | "9x9" |
  "10x10" | "11x11" | "12x12" | "13x13" | "";

export type GridScanParam = "CIRCLE" | "SQUARE" | "";

export type GridSpacingMeasurementParam = "ML" | "KM" | "NOT_SET";

export type MarkerStyle = "STANDARD" | "CUSTOM" | ""

export interface IHeatMapRequest {

  business_cid: string;
  coordinates: number[];
  find_business_by_name: boolean;
  grid_points: GridPointsParam;
  grid_spacing: number;
  grid_spacing_measurement: GridSpacingMeasurementParam;
  grid_type: GridScanParam;
  keywords: string[];
  custom_point_number: boolean;
  rank_by: RankByParam;
  business_name: string;
  result_handler: ResultHandlerParam;
  custom_file_name: string;
  use_keyword_grouping: boolean;
  avoid_duplicates: boolean;
  address: string
  location_id?: IDBase;
  request_from: "SELF" | "EXTERNAL"
}

export interface IHeatMapResponseBase {

  task_id: string;
  follow_up_id: {
    [k: string]: string;
  };
}

export interface IHeatMapResponse extends IBaseResponse<IHeatMapResponseBase> { }
