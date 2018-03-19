import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitflyerTicker } from '../model/bitflyer-ticker';

const URLS = {
  BASE: 'https://api.bitflyer.jp',
  TICKER: '/v1/getticker',
};

@Injectable()
export class BitflyerService {

  constructor(
    private http: HttpClient,
  ) {}

  getTicker = (): Observable<BitflyerTicker> =>
    this.http
      .get(`${URLS.BASE}${URLS.TICKER}`)
      .map(response => response as BitflyerTicker)

}
