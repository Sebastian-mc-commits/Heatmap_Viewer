
export interface BaseSliceParams {

  errorBase: {
    message: string;
    status: number;
    serverError?: string;
    has_error: boolean;
  }
}