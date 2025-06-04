import { IBaseResponse } from "./IBaseAPIResponse";

export enum DocumentTypeEnum {

  AUTH_SIGN = "AUTH_SIGN"
}

export interface IDocumentGeneratorRequestBase {

  document_from: "HEATMAP";
  document_data: any;
}

export interface IDocumentResponseBase {

  data: any;
  description: string;
  name: string;
  ip: string;
  document_type: DocumentTypeEnum;
}

export interface IDocumentRequestBase {

  generator_request: IDocumentGeneratorRequestBase;
  document_data: IDocumentResponseBase;
}

export interface IDocumentResponse extends IBaseResponse<{
  token: string;
  document: IDocumentResponseBase;
}> { }
// export interface IJWTResponse extends IBaseResponse<IJWTResponseBase> { };
