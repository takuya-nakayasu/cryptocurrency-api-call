import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { ZaifTickerModel } from './zaif-ticker.model';

export type ZaifTickerAction = FluxStandardAction<ZaifTickerModel, void>;

@Injectable()
export class ZaifTickerActions {
  static ZAIF_SET_TICKER = 'ZAIF_SET_TICKER';

  @dispatch()
  setTicker = (ticker: ZaifTickerModel): ZaifTickerAction => ({
    type: ZaifTickerActions.ZAIF_SET_TICKER,
    payload: ticker,
    meta: undefined
  });
}
