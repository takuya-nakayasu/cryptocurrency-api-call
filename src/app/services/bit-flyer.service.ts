import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitFlyerTicker } from '../model/bit-flyer-ticker';

@Injectable()
export class BitFlyerService {
  pubnub = null;

  bitFlyerUrl = 'https://api.bitflyer.jp';
  getBoardPath = '/v1/getboard';
  getTickerPath = '/v1/getticker';

  constructor(
    private http: HttpClient,
  ) {}

  getBoard = (): Observable<string> => {
    return this.http
    .get(`${this.bitFlyerUrl}${this.getBoardPath}`)
    .map(response => JSON.stringify(response));
  }

  getTicker = (): Observable<BitFlyerTicker> => {
    return this.http
    .get(`${this.bitFlyerUrl}${this.getTickerPath}`)
    .map(response => response as BitFlyerTicker);
  }
}
