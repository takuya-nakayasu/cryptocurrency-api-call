import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitflyerService } from './services/bitflyer.service';
import { CoincheckService } from './services/coincheck.service';
import { select } from '@angular-redux/store';
import { BitflyerTickerModel } from '../state/bitflyer-ticker/bitflyer-ticker.model';
import { CoincheckTickerModel } from '../state/coincheck-ticker/coincheck-ticker.model';
import { ZaifService } from './services/zaif.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @select(['bitflyerTicker', 'ltp'])
  readonly bitflyerLtp$: Observable<number>;
  @select(['coincheckTicker', 'last'])
  readonly coincheckLast$: Observable<number>;
  @select(['zaifTicker', 'last'])
  readonly zaifLast$: Observable<number>;

  constructor(
    private bitflyerService: BitflyerService,
    private coincheckService: CoincheckService,
    private zaifService: ZaifService
  ) {}

  ngOnInit() {
    this.bitflyerService.getTicker();
    this.coincheckService.getTicker();
    this.zaifService.getTicker();
  }
}
