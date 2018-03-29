import { Injectable } from '@angular/core';
import {
  ExchangeModel,
  EXCHANGE_NAME_LIST
} from '../../state/exchange-list/exchange-list.model';
import { ExchangeListActions } from '../../state/exchange-list/exchange-list.action';

@Injectable()
export class ExchangeListService {
  constructor(private action: ExchangeListActions) {}

  createList = (
    bitflyerLtp: number,
    coincheckLast: number,
    zaifLast: number,
    bitbankLast: string,
    quoinexLast: string
  ): void => {
    const exchangeList: ExchangeModel[] = [];
    exchangeList.push(
      { name: EXCHANGE_NAME_LIST[0], btcPrice: bitflyerLtp },
      { name: EXCHANGE_NAME_LIST[1], btcPrice: coincheckLast },
      { name: EXCHANGE_NAME_LIST[2], btcPrice: zaifLast },
      // converting a string to a number
      { name: EXCHANGE_NAME_LIST[3], btcPrice: +bitbankLast },
      { name: EXCHANGE_NAME_LIST[4], btcPrice: +quoinexLast }
    );
    this.action.setExcahgeList(exchangeList);
  };
}
