import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import PubNub = require('pubnub');

@Injectable()
export class BitFlyerService {
  pubnub = null;

  bitFlyerUrl = 'https://api.bitflyer.jp';
  getBoardPath = '/v1/getboard';

  constructor(
    private http: HttpClient,
  ) {
    this.pubnub = new PubNub({
      subscribeKey: 'sub-c-52a9ab50-291b-11e5-baaa-0619f8945a4f'
    });

    this.pubnub.addListener({
      message: message => console.log(message)
    });
  }

  getBoard = (): Observable<string> => {
    return this.http
    .get(`${this.bitFlyerUrl}${this.getBoardPath}`)
    .map(response => JSON.stringify(response));
  }

  getRealtimeTicker = (): void => {
    this.pubnub.subscribe({
      channels: ['lightning_ticker_BTC_JPY']
    });
  }
}
