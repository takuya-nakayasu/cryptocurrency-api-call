import { IAppState } from './store';
import { Action, combineReducers } from 'redux';
import { CriptoCurrencyActions, BitflyerTickerAction, CoincheckTickerAction } from '../action';

export function rootReducer(
    lastState: IAppState,
    action: Action
): IAppState {
  switch (action.type) {
    case CriptoCurrencyActions.BITFLYER_SET_TICKER:
      return {
        bitflyerTicker: (action as BitflyerTickerAction).payload,
        coincheckTicker: lastState.coincheckTicker
      };
    case CriptoCurrencyActions.COINCHECK_SET_TICKER:
      return {
        bitflyerTicker: lastState.bitflyerTicker,
        coincheckTicker: (action as CoincheckTickerAction).payload
      };
    default:
      return lastState;
  }
}
