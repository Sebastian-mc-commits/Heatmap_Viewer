import { IBaseResponse, IDBase } from "./IBaseAPIResponse";
import { IGridResponseWithPointsBase } from "./IGridAPIResponse";
import { GridPointsParam, GridSpacingMeasurementParam, MarkerStyle } from "./IHeatMapAPIResponse";
import { ITokenUsageBase } from "./TokenusageFeeAPIResponse";

export enum ReportState {

  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CORRUPTED = "CORRUPTED",
  FAILED = "FAILED",
}

export enum HeatMapRequestState {
  EXTERNAL = "EXTERNAL",
  SELF = "SELF"
};

export interface IReportItem {
  average_rank: number;
  business_description: string;
  business_name: string;
  grid_measurement: GridSpacingMeasurementParam;
  grid_points: string;
  grid_points_type: GridPointsParam;
  marker_style: MarkerStyle;
  scan_size: number;
  is_keyword_grouped: boolean;
  created_at: string;
  id: IDBase;
  heatmap_generation_state: ReportState;
  heatmap_request_type: HeatMapRequestState;
  location_id?: string;
  token_fee_id: IDBase;
  user_id: IDBase;
  token_fee: ITokenUsageBase;
}

export interface IReportsResponseBase {
  reports: IReportItem[];
}

export interface IReportsResponse extends IBaseResponse<IReportItem[]> { };
export interface IFullReportResponse extends IBaseResponse<IReportItem & IGridResponseWithPointsBase> { };