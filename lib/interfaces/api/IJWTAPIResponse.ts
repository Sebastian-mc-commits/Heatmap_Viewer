import { IBaseResponse } from "./IBaseAPIResponse";

export interface IJWTResponseBase {

  access_token: string;
  token_type: string;
}

export interface IJWTResponse extends IBaseResponse<IJWTResponseBase> { };
