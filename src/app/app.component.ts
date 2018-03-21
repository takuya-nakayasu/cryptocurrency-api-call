import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitflyerService } from './services/bitflyer.service';
import { CoincheckService } from './services/coincheck.service';
import { select } from '@angular-redux/store';
import { BitflyerTickerModel } from '../state/bitflyer-ticker/bitflyer-ticker.model';
import { CoincheckTickerModel } from '../state/coincheck-ticker/coincheck-ticker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @select() readonly bitflyerTicker$: Observable<BitflyerTickerModel>;
  @select() readonly coincheckTicker$: Observable<CoincheckTickerModel>;

  constructor(
    private bitflyerService: BitflyerService,
    private coincheckService: CoincheckService
  )  {}

  ngOnInit() {
    this.bitflyerService.getTicker();
    this.coincheckService.getTicker();
  }

}
