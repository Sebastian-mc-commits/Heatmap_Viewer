
export type IDBase = string | number | null;

export interface IBaseResponse<T> {

  message: string;
  status: number;
  is_successful: boolean;
  data?: T
}