import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitflyerTickerModel } from '../../state/bitflyer-ticker/bitflyer-ticker.model';
import { BitflyerTickerActions } from '../../state/bitflyer-ticker/bitflyer-ticker.action';

const URLS = {
  BASE: 'https://api.bitflyer.jp',
  TICKER: '/v1/getticker'
};

@Injectable()
export class BitflyerService {
  constructor(
    private http: HttpClient,
    private action: BitflyerTickerActions
  ) {}

  getTicker = (): void => {
    // getメソッドの型パラメータでレスポンスの型を指定
    this.http
      .get<BitflyerTickerModel>(`${URLS.BASE}${URLS.TICKER}`)
      .subscribe(ticker => this.action.setTicker(ticker));
  };
}
