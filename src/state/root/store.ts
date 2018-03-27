import { BitflyerTickerModel } from '../bitflyer-ticker/bitflyer-ticker.model';
import { CoincheckTickerModel } from '../coincheck-ticker/coincheck-ticker.model';
import { ZaifTickerModel } from '../zaif-ticker/zaif-ticker.model';
import { BitbankTickerModel } from '../bitbank-ticker/bitbank-ticker.model';

export interface IAppState {
  bitflyerTicker: BitflyerTickerModel;
  coincheckTicker: CoincheckTickerModel;
  zaifTicker: ZaifTickerModel;
  bitbankTicker: BitbankTickerModel;
}

export const INITIAL_STATE: IAppState = {
  bitflyerTicker: undefined,
  coincheckTicker: undefined,
  zaifTicker: undefined,
  bitbankTicker: undefined
};
