import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExchangeModel } from '../../state/exchange-list/exchange-list.model';
import { Subscription } from 'rxjs/Subscription';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { BitflyerService } from '../services/bitflyer.service';
import { CoincheckService } from '../services/coincheck.service';
import { ExchangeListService } from '../services/exchange-list.service';
import { ZaifService } from '../services/zaif.service';
import { BitbankService } from '../services/bitbank.service';
import { QuoinexService } from '../services/quoinex.service';

@Component({
  selector: 'app-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.scss']
})
export class ExchangeListComponent implements OnInit, OnDestroy {
  displayedColumns = ['name', 'btcPrice'];
  dataSource: ExchangeModel[];
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
      .filter(value => value.length === 5)
      .subscribe(value => (this.dataSource = value));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
