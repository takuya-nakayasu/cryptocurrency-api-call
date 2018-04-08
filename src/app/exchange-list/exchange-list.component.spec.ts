import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeListComponent } from './exchange-list.component';

describe('ExchangeListComponent', () => {
  let component: ExchangeListComponent;
  let fixture: ComponentFixture<ExchangeListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ExchangeListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
