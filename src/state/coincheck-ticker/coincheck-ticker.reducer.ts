import { Action, combineReducers } from "redux";
import {
  BitflyerTickerAction,
  BitflyerTickerActions
} from "../bitflyer-ticker/bitflyer-ticker.action";
import {
  CoincheckTickerAction,
  CoincheckTickerActions
} from "../coincheck-ticker/coincheck-ticker.action";
import { CoincheckTickerModel } from "./coincheck-ticker.model";

export function coincheckTickerReducer(
  lastState: CoincheckTickerModel = null,
  action: Action
): CoincheckTickerModel {
  switch (action.type) {
    case CoincheckTickerActions.COINCHECK_SET_TICKER:
      return (action as CoincheckTickerAction).payload;
    default:
      return lastState;
  }
}
