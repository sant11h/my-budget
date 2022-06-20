import { createAction, props } from '@ngrx/store';
import { Pay } from '../models/pay';

export const addPay = createAction('[Pay List] Add Pay', props<{ pay: Pay }>());

export const removePay = createAction(
  '[Pay Collection] Remove Pay',
  props<{ payId: string }>()
);

export const loadPays = createAction('[Pay List/API] Load Pays');

export const loadPaysSuccess = createAction(
  '[Pay List/API] Load Pays Success',
  props<{ pays: Pay[] }>()
);

export const loadPaysErrored = createAction(
  '[Pay List/API] Load Pays Errored',
  props<{ error: string }>()
);
