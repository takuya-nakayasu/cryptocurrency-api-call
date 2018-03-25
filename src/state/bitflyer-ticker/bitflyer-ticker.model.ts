export interface BitflyerTickerModel {
  best_ask: number;
  best_ask_size: number;
  best_bid: number;
  best_bid_size: number;
  ltp: number;
  product_code: string;
  tick_id: number;
  timestamp: string;
  total_ask_depth: number;
  total_bid_depth: number;
  volume: number;
  volume_by_product: number;
}
