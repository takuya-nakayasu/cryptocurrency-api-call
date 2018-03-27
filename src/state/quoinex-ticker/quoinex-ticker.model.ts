export interface QuoinexTickerModel {
  base_currency: string;
  btc_minimum_withdraw: string;
  code: string;
  currency: string;
  currency_pair_code: string;
  disabled: boolean;
  exchange_rate: number;
  fiat_minimum_withdraw: string;
  high_market_ask: number;
  id: string;
  indicator: number;
  last_price_24h: number;
  last_traded_price: number;
  last_traded_quantity: number;
  low_market_bid: number;
  maker_fee: number;
  market_ask: number;
  market_bid: number;
  name: string;
  product_type: string;
  pusher_channel: string;
  quoted_currency: string;
  symbol: string;
  taker_fee: number;
  volume_24h: number;
}
