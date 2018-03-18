import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoincheckTicker } from '../model/coincheck-ticker';
import { Observable } from 'rxjs/Observable';

const URLS = {
  BASE: 'https://coincheck.com',
  TICKER: '/api/ticker'
};

@Injectable()
export class CoincheckService {

  constructor(
    private http: HttpClient,
  ) { }

  getTicker = (): Observable<CoincheckTicker> =>
    this.http
      .get(`${URLS.BASE}${URLS.TICKER}`)
      .map(response => response as CoincheckTicker)

}
