import { IBaseResponse } from "./IBaseAPIResponse";


export interface IOtpSendSmsRequest {

  mobile_number: string;
}

export interface IOtpVerifySmsRequest extends IOtpSendSmsRequest {
  code: string;
}

export interface IOtpSendSmsResponseBase {

  sid: string;
  to: string;
  status: string;
}

export interface IOtpVerifyResponseBase {

  is_approved: boolean;
  status_message: string;
}

export interface IOtpSendSmsResponse extends IBaseResponse<IOtpSendSmsResponseBase> { };
export interface IOtpVerifyResponse extends IBaseResponse<IOtpVerifyResponseBase> { };
export interface IPhoneNumberValidationResponse extends IBaseResponse<null> { };
