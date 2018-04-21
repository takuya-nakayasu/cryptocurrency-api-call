import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BitflyerService } from '../services/bitflyer.service';

export class PrivateAPIKeySet {
  constructor(public key: string, public secret: string) {}
}

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  keySet = new PrivateAPIKeySet('', '');
  hide = true;
  constructor(private bitflyerService: BitflyerService) {}

  ngOnInit() {}

  onSubmit() {
    this.bitflyerService.getBalance(this.keySet);
  }
}
