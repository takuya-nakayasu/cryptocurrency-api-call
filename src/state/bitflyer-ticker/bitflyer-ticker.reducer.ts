import { Action } from "redux";
import {
  BitflyerTickerActions,
  BitflyerTickerAction
} from "../bitflyer-ticker/bitflyer-ticker.action";
import { BitflyerTickerModel } from "./bitflyer-ticker.model";

export function bitflyerTickerReducer(
  lastState: BitflyerTickerModel = null,
  action: Action
): BitflyerTickerModel {
  switch (action.type) {
    case BitflyerTickerActions.BITFLYER_SET_TICKER:
      return (action as BitflyerTickerAction).payload;
    default:
      return lastState;
  }
}
