// import { IAppState } from './store';
// import { Action, combineReducers } from 'redux';
// import { CriptoCurrencyActions, BitflyerTickerAction, CoincheckTickerAction } from './action';
// import { CoincheckTickerModel } from '../app/model/coincheck-ticker';

// export function coincheckReducer(
//     lastState: CoincheckTicker,
//     action: Action
// ): CoincheckTickerModel {
//   switch (action.type) {
//     case CriptoCurrencyActions.BITFLYER_SET_TICKER:
//       return {
//         coincheckTicker: lastState.coincheckTicker
//       };
//     case CriptoCurrencyActions.COINCHECK_SET_TICKER:
//       return {
//         bitflyerTicker: lastState.bitflyerTicker,
//         CoincheckTickerModel: (action as CoincheckTickerAction).payload
//       };
//     default:
//       return lastState;
//   }
// }
// export const rootReducer = combineReducers({
//   bitflyerTicker: bitflyerReducer,
//   CoincheckTickerModel: coincheckReducer,
// });
