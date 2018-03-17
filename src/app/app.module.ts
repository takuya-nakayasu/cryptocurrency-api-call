import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BitFlyerService } from './services/bit-flyer.service';

import 'rxjs/add/operator/map';
import { CoincheckService } from './services/coincheck.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    BitFlyerService,
    CoincheckService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
