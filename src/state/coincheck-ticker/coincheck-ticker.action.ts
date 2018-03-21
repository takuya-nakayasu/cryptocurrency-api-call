import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { CoincheckTicker } from './coincheck-ticker.model';

export type CoincheckTickerAction = FluxStandardAction<CoincheckTicker, void>;

@Injectable()
export class CoincheckTickerActions {
  static COINCHECK_SET_TICKER = 'COINCHECK_SET_TICKER';

  @dispatch() coincheckSetTicker = (ticker: CoincheckTicker): CoincheckTickerAction => ({
    type: CoincheckTickerActions.COINCHECK_SET_TICKER,
    payload: ticker,
    meta: undefined
  })
}
