import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BitbankTickerResponse } from '../../state/bitbank-ticker/bitbank-ticker.model';
import { BitbankTickerActions } from '../../state/bitbank-ticker/bitbank-ticker.action';

const URLS = {
  BASE: 'https://public.bitbank.cc',
  TICKER: '/btc_jpy/ticker'
};

@Injectable()
export class BitbankService {
  constructor(private http: HttpClient, private action: BitbankTickerActions) {}

  getTicker = (): void => {
    this.http
      .get(`${URLS.BASE}${URLS.TICKER}`)
      .map(response => response as BitbankTickerResponse)
      .subscribe(response => this.action.setTicker(response.data));
  };
}
