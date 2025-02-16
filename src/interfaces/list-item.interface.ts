import { CurrencyLabels } from '@popup/steem/utils/currency.utils';

export interface CurrencyListItem {
  label: string;
  value: keyof CurrencyLabels;
}

export interface SavingOperationTypeListItem {
  label: string;
  value: string;
}

export interface LocalAccountListItem {
  label: string;
  value: string;
}
