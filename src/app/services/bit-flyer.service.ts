import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitFlyerTicker } from '../model/bit-flyer-ticker';
import { BitFlyerUrl } from '../constant';

@Injectable()
export class BitFlyerService {

  constructor(
    private http: HttpClient,
  ) {}

  getTicker = (): Observable<BitFlyerTicker> =>
    this.http
      .get(`${BitFlyerUrl.BASE}${BitFlyerUrl.TICKER}`)
      .map(response => response as BitFlyerTicker)
}
