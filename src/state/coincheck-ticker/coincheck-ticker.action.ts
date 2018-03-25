import { Injectable } from "@angular/core";
import { dispatch } from "@angular-redux/store";
import { FluxStandardAction } from "flux-standard-action";
import { CoincheckTickerModel } from "./coincheck-ticker.model";

export type CoincheckTickerAction = FluxStandardAction<
  CoincheckTickerModel,
  void
>;

@Injectable()
export class CoincheckTickerActions {
  static COINCHECK_SET_TICKER = "COINCHECK_SET_TICKER";

  @dispatch()
  setTicker = (ticker: CoincheckTickerModel): CoincheckTickerAction => ({
    type: CoincheckTickerActions.COINCHECK_SET_TICKER,
    payload: ticker,
    meta: undefined
  });
}
