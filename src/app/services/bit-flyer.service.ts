import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BitFlyerService {

  bitFlyerUrl = 'https://api.bitflyer.jp';
  bitFlyerPath = '/v1/getboard';

  constructor(
    private http: HttpClient,
  ) { }

  getBoard = (): Observable<Object> => {
    return this.http
    .get(`${this.bitFlyerUrl}${this.bitFlyerPath}`);
    // .subscribe(console.log);
  }

}
