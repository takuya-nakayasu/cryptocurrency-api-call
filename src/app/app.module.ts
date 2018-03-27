import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BitflyerService } from './services/bitflyer.service';

import { CoincheckService } from './services/coincheck.service';

import { IAppState, INITIAL_STATE } from '../state/root/store';
import { rootReducer } from '../state/root/reducer';

import {
  NgReduxModule,
  NgRedux,
  DevToolsExtension
} from '@angular-redux/store';

import { CoincheckTickerActions } from '../state/coincheck-ticker/coincheck-ticker.action';
import { BitflyerTickerActions } from '../state/bitflyer-ticker/bitflyer-ticker.action';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ZaifService } from './services/zaif.service';
import { ZaifTickerActions } from '../state/zaif-ticker/zaif-ticker.action';
import { BitbankService } from './services/bitbank.service';
import { BitbankTickerActions } from '../state/bitbank-ticker/bitbank-ticker.action';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, NgReduxModule],
  providers: [
    BitflyerService,
    CoincheckService,
    ZaifService,
    BitbankService,
    BitbankTickerActions,
    BitflyerTickerActions,
    CoincheckTickerActions,
    ZaifTickerActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], storeEnhancers);
  }
}
