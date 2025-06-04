import { IBaseResponse, IDBase } from "./IBaseAPIResponse";

export enum IUserLoggedByEnum {

  GOOGLE = "GOOGLE",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

export interface IUserTokenBase {

  id: IDBase;
  user_id: IDBase;
  total_tokens: number;
  reserved_tokens: number;
  last_updated: string;
}

export interface ITokenTransactionBase {

  id: IDBase;
  user_id: IDBase;
  change: number;
  reason: string;
  related_id: string;
  source: string;
  timestamp: string;
  is_subtracted: boolean;
}

export interface IUserTokenResponse extends IBaseResponse<IUserTokenBase> { };
export interface ITokenTransactionResponse extends IBaseResponse<ITokenTransactionBase> { };
export interface ITokenTransactionsResponse extends IBaseResponse<ITokenTransactionBase[]> { };
