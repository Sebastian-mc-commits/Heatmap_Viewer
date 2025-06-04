import { IBaseResponse } from './../interfaces/api/IBaseAPIResponse';

export default class AppError extends Error {
  public message: string;
  public status: number;
  public is_successful: boolean;

  constructor({ message, status, is_successful }: IBaseResponse<undefined>) {

    super(message);

    this.name = 'AppError';

    this.message = message;
    this.status = status;
    this.is_successful = is_successful;
  }
}