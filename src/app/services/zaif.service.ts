import { ZaifTickerActions } from '../../state/zaif-ticker/zaif-ticker.action';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ZaifTickerModel } from '../../state/zaif-ticker/zaif-ticker.model';

const URLS = {
  BASE: 'https://api.zaif.jp/api/1',
  TICKER: '/ticker/btc_jpy'
};

@Injectable()
export class ZaifService {
  constructor(private http: HttpClient, private action: ZaifTickerActions) {}

  getTicker = (): void => {
    this.http
      .get(`${URLS.BASE}${URLS.TICKER}`)
      .map(response => response as ZaifTickerModel)
      .subscribe(ticker => this.action.setTicker(ticker));
  };
}
