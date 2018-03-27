export interface BitbankTickerModel {
  sell?: string;
  buy?: string;
  high?: string;
  low?: string;
  last?: string;
  vol?: string;
  timestamp?: number;
}

export interface BitbankTickerResponse {
  success: number;
  data: BitbankTickerModel;
}
