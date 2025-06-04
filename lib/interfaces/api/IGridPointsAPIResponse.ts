import { IBaseResponse, IDBase } from "./IBaseAPIResponse";

export interface IGridPointItemData {

  keyword: string;
  location_rank: {
    percentage: number;
    rank: number;
  }
};

export interface IGridPointItem {
  average_percentage: number;
  data: IGridPointItemData[];
  final_rank: number;
  global_analysis_id: IDBase;
  id: IDBase;
  is_corrupted: boolean;
  lat: number;
  lng: number;
}

export interface IGridPointResponseBase {
  grid_points: IGridPointItem[];
}

export interface IGridPointResponse extends IBaseResponse<IGridPointResponseBase> { };