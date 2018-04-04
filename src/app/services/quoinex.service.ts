import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuoinexTickerActions } from '../../state/quoinex-ticker/quoinex-ticker.action';
import { QuoinexTickerModel } from '../../state/quoinex-ticker/quoinex-ticker.model';

const URLS = {
  BASE: 'https://api.quoine.com',
  TICKER: '/products/5'
};

@Injectable()
export class QuoinexService {
  constructor(private http: HttpClient, private action: QuoinexTickerActions) {}

  getTicker = (): void => {
    this.http
      .get<QuoinexTickerModel>(`${URLS.BASE}${URLS.TICKER}`)
      .subscribe(ticker => this.action.setTicker(ticker));
  };
}
