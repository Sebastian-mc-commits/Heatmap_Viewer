import { IBaseResponse, IDBase } from "./IBaseAPIResponse";
import { IGridPointResponseBase } from "./IGridPointsAPIResponse";

export interface IGridItem {
  average_rank_percentage_between: number;
  average_rank_value_between: number;
  business_report_id: IDBase;
  high_relevance: number;
  id: IDBase;
  file_path_id: string;
  unique_file_id: string;
  keyword_grouping: {
    [k: string]: string
  };

  low_relevance: number;
  medium_relevance: number;
  total_ranks: number;
}

export interface IGridResponseBase {
  global_analysis: IGridItem[];
}

export type MergedGridPoints = (IGridItem & IGridPointResponseBase)
export interface IGridResponseWithPointsBase {
  global_analysis: MergedGridPoints[];
}

export interface IGridResponse extends IBaseResponse<IGridResponseBase> { };
