import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitFlyerService } from './services/bit-flyer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  response: Observable<string>;

  constructor(
    private bitFlyerService: BitFlyerService,
  )  {}

  ngOnInit() {
    // this.response = this.bitFlyerService.getBoard();
    this.bitFlyerService.getRealtimeTicker();
  }

}
