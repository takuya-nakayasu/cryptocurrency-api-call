import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoincheckService {

  bitFlyerUrl = 'https://coincheck.com';
  getTickerPath = '/api/ticker';

  constructor(
    private http: HttpClient,
  ) { }

}
