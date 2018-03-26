import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoincheckTickerModel } from '../../state/coincheck-ticker/coincheck-ticker.model';
import { Observable } from 'rxjs/Observable';
import { CoincheckTickerActions } from '../../state/coincheck-ticker/coincheck-ticker.action';

const URLS = {
  BASE: 'https://coincheck.com',
  TICKER: '/api/ticker'
};

@Injectable()
export class CoincheckService {
  constructor(
    private http: HttpClient,
    private action: CoincheckTickerActions
  ) {}

  getTicker = (): void => {
    this.http
      .get(`${URLS.BASE}${URLS.TICKER}`)
      .map(response => response as CoincheckTickerModel)
      .subscribe(ticker => this.action.setTicker(ticker));
  };
}
