import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitflyerService } from './services/bitflyer.service';
import { CoincheckService } from './services/coincheck.service';
import { select } from '@angular-redux/store';
import { BitflyerTickerModel } from '../state/bitflyer-ticker/bitflyer-ticker.model';
import { CoincheckTickerModel } from '../state/coincheck-ticker/coincheck-ticker.model';
import { ZaifService } from './services/zaif.service';
import { BitbankService } from './services/bitbank.service';
import { QuoinexService } from './services/quoinex.service';
import { ExchangeListService } from './services/exchange-list.service';
import { Subscription } from 'rxjs/Subscription';
import { ExchangeModel } from '../state/exchange-list/exchange-list.model';

export interface Element {
  exchange: string;
  price: number;
}

const ELEMENT_DATA: Element[] = [
  { exchange: 'ビットフライヤー', price: undefined },
  { exchange: 'ビットフライヤー', price: undefined },
  { exchange: 'ビットフライヤー', price: undefined },
  { exchange: 'ビットフライヤー', price: undefined },
  { exchange: 'ビットフライヤー', price: undefined }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  displayedColumns = ['exchange', 'price'];
  dataSource = ELEMENT_DATA;
  subscription: Subscription;

  @select(['bitflyerTicker', 'ltp'])
  readonly bitflyerLtp$: Observable<number>;
  @select(['coincheckTicker', 'last'])
  readonly coincheckLast$: Observable<number>;
  @select(['zaifTicker', 'last'])
  readonly zaifLast$: Observable<number>;
  @select(['bitbankTicker', 'last'])
  readonly bitbankLast$: Observable<string>;
  @select(['quoinexTicker', 'last_traded_price'])
  readonly quoinexLast$: Observable<string>;
  @select('exchangeList') readonly exchangeList$: Observable<ExchangeModel[]>;

  constructor(
    private bitflyerService: BitflyerService,
    private coincheckService: CoincheckService,
    private exchangeListService: ExchangeListService,
    private zaifService: ZaifService,
    private bitbankService: BitbankService,
    private quoinexService: QuoinexService
  ) {}

  ngOnInit() {
    this.bitflyerService.getTicker();
    this.coincheckService.getTicker();
    this.zaifService.getTicker();
    this.bitbankService.getTicker();
    this.quoinexService.getTicker();

    this.subscription = Observable.combineLatest(
      this.bitflyerLtp$,
      this.coincheckLast$,
      this.zaifLast$,
      this.bitbankLast$,
      this.quoinexLast$,
      (bitflyerLtp, coincheckLast, zaifLast, bitbankLast, quoinexLast) => {
        if (
          bitflyerLtp &&
          coincheckLast &&
          zaifLast &&
          bitbankLast &&
          quoinexLast
        ) {
          this.exchangeListService.createList(
            bitflyerLtp,
            coincheckLast,
            zaifLast,
            bitbankLast,
            quoinexLast
          );
        }
      }
    ).subscribe();

    this.exchangeList$
      .filter(value => !!value)
      // .filter(value => value.length === 5)
      .subscribe(console.log);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
