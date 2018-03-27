import { BitbankTickerModel } from './bitbank-ticker.model';
import { Action } from 'redux';
import {
  BitbankTickerActions,
  BitbankTickerAction
} from './bitbank-ticker.action';

export function bitbankTickerReducer(
  lastState: BitbankTickerModel = null,
  action: Action
): BitbankTickerModel {
  switch (action.type) {
    case BitbankTickerActions.BITBANK_SET_TICKER:
      return (action as BitbankTickerAction).payload;
    default:
      return lastState;
  }
}
