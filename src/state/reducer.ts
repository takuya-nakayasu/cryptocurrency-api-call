import { IAppState } from './store';
import { Action } from 'redux';
import { CriptoCurrencyActions } from './action';

export function rootReducer(
    lastState: IAppState,
    action: Action
): IAppState {
  switch (action.type) {
    default:
      return lastState;
  }
}
