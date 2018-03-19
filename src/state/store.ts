import { BitFlyerTicker } from '../app/model/bit-flyer-ticker';
import { CoincheckTicker } from '../app/model/coincheck-ticker';

export interface IAppState {
  bitFlyerTicker: BitFlyerTicker;
  coincheckTicker: CoincheckTicker;
}

export const INITIAL_STATE: IAppState = {
  bitFlyerTicker: null,
  coincheckTicker: null,
};
