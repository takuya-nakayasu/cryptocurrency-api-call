import { BitflyerTickerModel } from '../bitflyer-ticker/bitflyer-ticker.model';
import { CoincheckTickerModel } from '../coincheck-ticker/coincheck-ticker.model';

export interface IAppState {
  bitflyerTicker: BitflyerTickerModel;
  CoincheckTickerModel: CoincheckTickerModel;
}

export const INITIAL_STATE: IAppState = {
  bitflyerTicker: null,
  CoincheckTickerModel: null,
};
