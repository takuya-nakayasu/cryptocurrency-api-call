import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { QuoinexTickerModel } from './quoinex-ticker.model';

export type QuoinexTickerAction = FluxStandardAction<QuoinexTickerModel, void>;

@Injectable()
export class QuoinexTickerActions {
  static QUOINEX_SET_TICKER = 'QUOINEX_SET_TICKER';

  @dispatch()
  setTicker = (ticker: QuoinexTickerModel): QuoinexTickerAction => ({
    type: QuoinexTickerActions.QUOINEX_SET_TICKER,
    payload: ticker,
    meta: undefined
  });
}
