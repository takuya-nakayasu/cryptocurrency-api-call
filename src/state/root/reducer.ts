import { IAppState } from './store';
import { Action, combineReducers } from 'redux';
import { BitflyerTickerActions, BitflyerTickerAction } from '../bitflyer-ticker/bitflyer-ticker.action';
import { CoincheckTickerActions, CoincheckTickerAction } from '../coincheck-ticker/coincheck-ticker.action';

export function rootReducer(
    lastState: IAppState,
    action: Action
): IAppState {
  switch (action.type) {
    case BitflyerTickerActions.BITFLYER_SET_TICKER:
      return {
        bitflyerTicker: (action as BitflyerTickerAction).payload,
        CoincheckTickerModel: lastState.CoincheckTickerModel
      };
    case CoincheckTickerActions.COINCHECK_SET_TICKER:
      return {
        bitflyerTicker: lastState.bitflyerTicker,
        CoincheckTickerModel: (action as CoincheckTickerAction).payload
      };
    default:
      return lastState;
  }
}
