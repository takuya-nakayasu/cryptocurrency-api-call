import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BitflyerService } from './services/bitflyer.service';

import { CoincheckService } from './services/coincheck.service';
import { CriptoCurrencyActions } from '../state/action';

import { IAppState, INITIAL_STATE } from '../state/root/store';
import { rootReducer } from '../state/root/reducer';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgReduxModule,
  ],
  providers: [
    BitflyerService,
    CoincheckService,
    CriptoCurrencyActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension) {
      const storeEnhancers = devTools.isEnabled() ?
      [ devTools.enhancer() ] :
      [];
      ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE,
        [],
        storeEnhancers);
  }
}
