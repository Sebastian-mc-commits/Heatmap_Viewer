import { IBaseResponse, IDBase } from "./IBaseAPIResponse";

export enum ApiKeyState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
  DELETED = "DELETED",
  EXPIRED = "EXPIRED",
  REVOKED = "REVOKED",
  NOT_SET = "NOT_SET"
}

export interface IApiKeyCreateRequest {

  api_key_name: string;
  api_key_description: string;
  api_key_state: ApiKeyState;
}

export interface IApiKeyResponseBase {
  id: IDBase;
  api_key: string;
  created_at: string;
  api_key_name: string;
  api_key_state: ApiKeyState;
  api_key_description: string;
  user_id: IDBase;
}

export interface IApiKeyResponse extends IBaseResponse<IApiKeyResponseBase> { };
