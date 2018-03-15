import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BitFlyerService } from './services/bit-flyer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: Observable<Object>;
  constructor(
    private bitFlyerService: BitFlyerService,
  )  {
    this.value = this.bitFlyerService.getBoard();
  }

}
