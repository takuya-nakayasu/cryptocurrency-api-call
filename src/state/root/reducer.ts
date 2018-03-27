import { IAppState } from './store';
import { combineReducers } from 'redux';
import { bitflyerTickerReducer } from '../bitflyer-ticker/bitflyer-ticker.reducer';
import { coincheckTickerReducer } from '../coincheck-ticker/coincheck-ticker.reducer';
import { zaifTickerReducer } from '../zaif-ticker/zaif-ticker.reducer';
import { bitbankTickerReducer } from '../bitbank-ticker/bitbank-ticker.reducer';
import { quoinexTickerReducer } from '../quoinex-ticker/quoinex-ticker.reducer';

export const rootReducer = combineReducers<IAppState>({
  bitflyerTicker: bitflyerTickerReducer,
  coincheckTicker: coincheckTickerReducer,
  zaifTicker: zaifTickerReducer,
  bitbankTicker: bitbankTickerReducer,
  quoinexTicker: quoinexTickerReducer
});
