import { ActionPayload } from '@popup/multichain/actions/interfaces';
import { SteemActionType } from '@popup/steem/actions/action-type.enum';

export interface AppStatus {
  processingDecryptAccount: boolean;
  priceLoaded: boolean;
  globalPropertiesLoaded: boolean;
}
const INITIAL_STATE: AppStatus = {
  processingDecryptAccount: false,
  priceLoaded: false,
  globalPropertiesLoaded: false,
};

export const AppStatusReducer = (
  state: AppStatus = INITIAL_STATE,
  { type, payload }: ActionPayload<Partial<AppStatus>>,
) => {
  switch (type) {
    case SteemActionType.SET_APP_STATUS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
