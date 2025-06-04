import { IBaseResponse, IDBase } from "./IBaseAPIResponse";

export enum TokenFeeType {
  FREE = "FREE",
  PAID = "PAID",
  NOT_SET = "NOT_SET"
};

export enum TokenFeeStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  NOT_SET = "NOT_SET"
}

export interface ITokenUsageBase {
  id?: IDBase;
  token_name: string;
  token_description: string;
  token_amount: number;
  offer_in_percentage: number;
  has_offer: boolean;
  offer_expiration_date: string;
  last_updated: string;
  token_fee_type: TokenFeeType;
  token_fee_status: TokenFeeStatus;
}

export interface ITokenUsageResponse extends IBaseResponse<ITokenUsageBase> { };