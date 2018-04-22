import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitflyerTickerModel } from '../../state/bitflyer-ticker/bitflyer-ticker.model';
import { BitflyerTickerActions } from '../../state/bitflyer-ticker/bitflyer-ticker.action';
import { PrivateAPIKeySet } from '../private/private.component';
import * as crypto from 'crypto-js';

const URLS = {
  BASE: 'https://api.bitflyer.jp',
  TICKER: '/v1/getticker',
  GET_BALANCE: '/v1/me/getbalance'
};

@Injectable()
export class BitflyerService {
  constructor(
    private http: HttpClient,
    private action: BitflyerTickerActions
  ) {}

  getTicker = (): void => {
    // getメソッドの型パラメータでレスポンスの型を指定
    this.http
      .get<BitflyerTickerModel>(`${URLS.BASE}${URLS.TICKER}`)
      .subscribe(ticker => this.action.setTicker(ticker));
  };

  getBalance = (keySet: PrivateAPIKeySet): void => {
    const timestamp = Date.now().toString();
    const method = 'GET';
    // ACCESS-TIMESTAMP, HTTP メソッド, リクエストのパス,
    // リクエストボディ を文字列として連結したもの
    const text = timestamp + method + URLS.GET_BALANCE;

    // HMAC-SHA-256で署名を作成する
    // keySet.secretはAPI secret
    const hmac = crypto.HmacSHA256(text, keySet.secret);
    // 署名をHEXでエンコード
    const sign = crypto.enc.Hex.stringify(hmac);

    const httpOptions = {
      headers: new HttpHeaders({
        // keySet.keyはAPIキー
        'ACCESS-KEY': keySet.key,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-SIGN': sign
      })
    };
    this.http
      .get(`${URLS.BASE}${URLS.GET_BALANCE}`, httpOptions)
      .subscribe(console.log);
  };
}
