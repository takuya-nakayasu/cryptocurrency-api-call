import { IAppState } from './store';
import { combineReducers } from 'redux';
import { bitflyerTickerReducer } from '../bitflyer-ticker/bitflyer-ticker.reducer';
import { coincheckTickerReducer } from '../coincheck-ticker/coincheck-ticker.reducer';

export const rootReducer = combineReducers<IAppState>({
  bitflyerTicker: bitflyerTickerReducer,
  coincheckTicker: coincheckTickerReducer
});
