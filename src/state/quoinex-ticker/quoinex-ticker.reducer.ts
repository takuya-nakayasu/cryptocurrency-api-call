import { Action } from 'redux';
import { QuoinexTickerModel } from './quoinex-ticker.model';
import {
  QuoinexTickerActions,
  QuoinexTickerAction
} from './quoinex-ticker.action';

export function quoinexTickerReducer(
  lastState: QuoinexTickerModel = null,
  action: Action
): QuoinexTickerModel {
  switch (action.type) {
    case QuoinexTickerActions.QUOINEX_SET_TICKER:
      return (action as QuoinexTickerAction).payload;
    default:
      return lastState;
  }
}
