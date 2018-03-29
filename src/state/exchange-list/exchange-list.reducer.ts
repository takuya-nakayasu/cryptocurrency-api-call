import { ExchangeModel } from './exchange-list.model';
import { Action } from 'redux';
import {
  ExchangeListActions,
  ExchangeListAction
} from './exchange-list.action';

export function exchangeListReducer(
  lastState: ExchangeModel[] = null,
  action: Action
): ExchangeModel[] {
  switch (action.type) {
    case ExchangeListActions.SET_EXCHANGE_LIST:
      return (action as ExchangeListAction).payload;
    default:
      return lastState;
  }
}
