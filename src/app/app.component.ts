import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitflyerService } from './services/bitflyer.service';
import { BitflyerTicker } from './model/bitflyer-ticker';
import { CoincheckTicker } from './model/coincheck-ticker';
import { CoincheckService } from './services/coincheck.service';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @select() readonly bitflyerTicker$: Observable<BitflyerTicker>;
  @select() readonly coincheckTicker$: Observable<CoincheckTicker>;

  constructor(
    private bitflyerService: BitflyerService,
    private coincheckService: CoincheckService
  )  {}

  ngOnInit() {
    this.bitflyerService.getTicker();
    this.coincheckService.getTicker();
  }

}
