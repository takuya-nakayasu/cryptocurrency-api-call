import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoincheckTicker } from '../model/coincheck-ticker';
import { Observable } from 'rxjs/Observable';
import { CoincheckUrl } from '../constant';

@Injectable()
export class CoincheckService {

  constructor(
    private http: HttpClient,
  ) { }

  getTicker = (): Observable<CoincheckTicker> =>
    this.http
    .get(`${CoincheckUrl.BASE}${CoincheckUrl.TICKER}`)
    .map(response => response as CoincheckTicker)

}
