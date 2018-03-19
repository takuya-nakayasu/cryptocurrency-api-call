import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { CoincheckTicker } from '../app/model/coincheck-ticker';
import { BitflyerTicker } from '../app/model/bitflyer-ticker';

export type VoidAction = FluxStandardAction<void, void>;
export type CoincheckTickerAction = FluxStandardAction<CoincheckTicker, void>;
export type BitflyerTickerAction = FluxStandardAction<BitflyerTicker, void>;


@Injectable()
export class CriptoCurrencyActions {
  static COINCHECK_SET_TICKER = 'COINCHECK_SET_TICKER';
  static BITFLYER_SET_TICKER = 'BITFLYER_SET_TICKER';

  @dispatch() coincheckSetTicker = (ticker: CoincheckTicker): CoincheckTickerAction => ({
    type: CriptoCurrencyActions.COINCHECK_SET_TICKER,
    payload: ticker,
    meta: undefined
  })

  @dispatch() bitflyerSetTicker = (ticker: BitflyerTicker): BitflyerTickerAction => ({
    type: CriptoCurrencyActions.BITFLYER_SET_TICKER,
    payload: ticker,
    meta: undefined
  })
}
