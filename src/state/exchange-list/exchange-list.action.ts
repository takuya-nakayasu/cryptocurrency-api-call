import { ExchangeModel } from './exchange-list.model';
import { FluxStandardAction } from 'flux-standard-action';
import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

export type ExchangeListAction = FluxStandardAction<ExchangeModel[], void>;

@Injectable()
export class ExchangeListActions {
  static SET_EXCHANGE_LIST = 'COINCHECK_SET_TICKER';

  @dispatch()
  setExcahgeList = (excahgeList: ExchangeModel[]): ExchangeListAction => ({
    type: ExchangeListActions.SET_EXCHANGE_LIST,
    payload: excahgeList,
    meta: undefined
  });
}
