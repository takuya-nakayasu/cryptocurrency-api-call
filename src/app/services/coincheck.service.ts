import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoincheckTicker } from '../model/coincheck-ticker';
import { Observable } from 'rxjs/Observable';
import { CriptoCurrencyActions } from '../../state/action';

const URLS = {
  BASE: 'https://coincheck.com',
  TICKER: '/api/ticker'
};

@Injectable()
export class CoincheckService {

  constructor(
    private http: HttpClient,
    private action: CriptoCurrencyActions,
  ) { }

  getTicker = (): void => {
    this.http
      .get(`${URLS.BASE}${URLS.TICKER}`)
      .map(response => response as CoincheckTicker)
      .subscribe(ticker => this.action.coincheckSetTicker(ticker));
  }

}
