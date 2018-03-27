import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { BitbankTickerModel } from './bitbank-ticker.model';

export type BitbankTickerAction = FluxStandardAction<BitbankTickerModel, void>;

@Injectable()
export class BitbankTickerActions {
  static BITBANK_SET_TICKER = 'BITBANK_SET_TICKER';

  @dispatch()
  setTicker = (ticker: BitbankTickerModel): BitbankTickerAction => ({
    type: BitbankTickerActions.BITBANK_SET_TICKER,
    payload: ticker,
    meta: undefined
  });
}
