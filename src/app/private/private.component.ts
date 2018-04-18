import { Component, OnInit } from '@angular/core';

export interface PrivateAPIKeySet {
  key: string;
  secret: string;
}

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  keySet: PrivateAPIKeySet;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('submit');
  }
}
