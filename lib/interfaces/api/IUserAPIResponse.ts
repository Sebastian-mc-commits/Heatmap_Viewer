import { IApiKeyResponseBase } from "./IApiKeyGenerationResponse";
import { IBaseResponse, IDBase } from "./IBaseAPIResponse";
import { IDocumentResponseBase } from "./IDocumentAPIResponse";
import { IJWTResponseBase } from "./IJWTAPIResponse";
import { ITokenTransactionBase, IUserTokenBase } from "./IUserTokenAPIResponse";

export enum IUserLoggedByEnum {

  GOOGLE = "GOOGLE",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

export interface IUserRequest {
  first_name: string;
  phone_number?: string;
  email: string;
  last_name?: string;
  password: string;
}

export interface IUserLoginRequest {
  first_name: string;
  phone_number: string;
  email: string;
  last_name?: string;
  password: string;
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}

export interface IUserPayload {
  created_at: string;
  email: string;
  first_name: string;
  id: IDBase;
  is_active: string;
  is_deleted: string;
  is_verified: string;
  last_login_at: string;
  last_name?: string;
  logged_by: string;
  phone_number: string;
  relevant_token: string;
  updated_at: string;
  api_key?: IApiKeyResponseBase;
}

export interface IUserPayloadWithDocuments extends IUserPayload {

  documents: IDocumentResponseBase[]
}

export interface IUserWithDocumentsValidationResponseBase {

  auth_validated: boolean;
  user: IUserPayloadWithDocuments;
}

export interface IFullUserResponseBase extends IUserPayload {

  password_hash: string;
  last_login_ip: string;
  roles: string[];
  token_balance: IUserTokenBase;
  token_transactions: ITokenTransactionBase[];
}

export interface IFullUserResponse extends IBaseResponse<IFullUserResponseBase> { };
export interface IUserResponseWithToken extends IBaseResponse<{
  jwt: IJWTResponseBase;
  user: IUserPayload;
}> { };

export interface IUserPayloadResponse extends IBaseResponse<IUserPayload> { };
export interface IUserWithDocumentsValidationResponse extends IBaseResponse<IUserWithDocumentsValidationResponseBase> { };