import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitFlyerService } from './services/bit-flyer.service';
import { BitFlyerTicker } from './model/bit-flyer-ticker';
import { CoincheckTicker } from './model/coincheck-ticker';
import { CoincheckService } from './services/coincheck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bitFlyer$: Observable<BitFlyerTicker>;
  coincheck$: Observable<CoincheckTicker>;

  constructor(
    private bitFlyerService: BitFlyerService,
    private coincheckService: CoincheckService
  )  {}

  ngOnInit() {
    this.bitFlyer$ = this.bitFlyerService.getTicker();
    this.coincheck$ = this.coincheckService.getTicker();
  }

}
