import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BitFlyerService {

  bitFlyerUrl = 'https://lightning.bitflyer.jp/docs/apisubmit';
  bitFlyerPath = '/v1/getboard';

  constructor(
    private http: HttpClient,
  ) { }

  getBoard = () => {
    this.http
    .get(`${this.bitFlyerUrl}${this.bitFlyerPath}`)
    .subscribe(console.log);
  }

}
