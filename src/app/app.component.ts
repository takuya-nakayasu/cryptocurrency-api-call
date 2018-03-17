import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitFlyerService } from './services/bit-flyer.service';
import { BitFlyerTicker } from './model/bit-flyer-ticker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bitFlyer$: Observable<BitFlyerTicker>;

  constructor(
    private bitFlyerService: BitFlyerService,
  )  {}

  ngOnInit() {
    this.bitFlyer$ = this.bitFlyerService.getTicker();
  }

}
