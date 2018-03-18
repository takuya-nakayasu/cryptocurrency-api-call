import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitFlyerTicker } from '../model/bit-flyer-ticker';

const URLS = {
  BASE: 'https://api.bitflyer.jp',
  TICKER: '/v1/getticker',
};

@Injectable()
export class BitFlyerService {

  constructor(
    private http: HttpClient,
  ) {}

  getTicker = (): Observable<BitFlyerTicker> =>
    this.http
      .get(`${URLS.BASE}${URLS.TICKER}`)
      .map(response => response as BitFlyerTicker)

}
