import { Action, combineReducers } from 'redux';
import { ZaifTickerModel } from './zaif-ticker.model';
import { ZaifTickerActions, ZaifTickerAction } from './zaif-ticker.action';

export function zaifTickerReducer(
  lastState: ZaifTickerModel = null,
  action: Action
): ZaifTickerModel {
  switch (action.type) {
    case ZaifTickerActions.ZAIF_SET_TICKER:
      return (action as ZaifTickerAction).payload;
    default:
      return lastState;
  }
}
