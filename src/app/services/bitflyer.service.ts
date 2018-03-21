import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitflyerTickerModel } from '../../state/bitflyer-ticker/bitflyer-ticker.model';
import { BitflyerTickerActions } from '../../state/bitflyer-ticker/bitflyer-ticker.action';

const URLS = {
  BASE: 'https://api.bitflyer.jp',
  TICKER: '/v1/getticker',
};

@Injectable()
export class BitflyerService {

  constructor(
    private http: HttpClient,
    private action: BitflyerTickerActions
  ) {}

  getTicker = (): void => {
    this.http
      .get(`${URLS.BASE}${URLS.TICKER}`)
      .map(response => response as BitflyerTickerModel)
      .subscribe(ticker => this.action.setTicker(ticker));
  }

}
