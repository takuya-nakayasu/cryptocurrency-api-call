import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.keySet);
  }
}
