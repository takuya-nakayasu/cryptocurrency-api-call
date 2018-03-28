import { Component, OnInit } from '@angular/core';
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

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

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

  constructor(
    private bitflyerService: BitflyerService,
    private coincheckService: CoincheckService,
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
  }
}
