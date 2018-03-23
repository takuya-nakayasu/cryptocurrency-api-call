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
  // 2層目のltpプロパティを参照
  @select(['bitflyerTicker', 'ltp']) readonly bitflyerLtp$: Observable<number>;

  // 1層目のcoincheckTickerプロパティを参照
  // プロパティ名と変数名が同じため、selectorオプションは省略されている
  @select() readonly coincheckTicker$: Observable<CoincheckTickerModel>;

  // 1層目のbitflyerTickerプロパティを参照
  @select('bitflyerTicker') readonly ticker$: Observable<BitflyerTickerModel>;

  constructor(
    private bitflyerService: BitflyerService,
    private coincheckService: CoincheckService
  )  {}

  ngOnInit() {
    this.bitflyerService.getTicker();
    this.coincheckService.getTicker();
  }

}
