import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { BitflyerTicker } from './bitflyer-ticker.model';

export type BitflyerTickerAction = FluxStandardAction<BitflyerTicker, void>;

@Injectable()
export class BitflyerTickerActions {
  static BITFLYER_SET_TICKER = 'BITFLYER_SET_TICKER';

  @dispatch() setTicker = (ticker: BitflyerTicker): BitflyerTickerAction => ({
    type: BitflyerTickerActions.BITFLYER_SET_TICKER,
    payload: ticker,
    meta: undefined
  })
}
