import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { dispatch } from '@angular-redux/store';

export type VoidAction = FluxStandardAction<void, void>;

@Injectable()
export class CriptoCurrencyActions {
  static COINCHECK_GET_TICKER = 'COINCHECK_GET_TICKER';

  @dispatch() coincheckGetTicker = (): VoidAction => ({
    type: CriptoCurrencyActions.COINCHECK_GET_TICKER ,
    payload: undefined,
    meta: undefined
  })

  @dispatch() bitflyerGetTicker = (): VoidAction => ({
    type: CriptoCurrencyActions.COINCHECK_GET_TICKER ,
    payload: undefined,
    meta: undefined
  })
}
