import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Pay } from '../models/pay';
import * as MyBudgetActions from './my-budget.actions';

export const MY_BUDGET_FEATURE_KEY = 'MY_BUDGET_FEATURE_KEY';

export interface MyBudgetState extends EntityState<Pay> {
  selectedPayId?: string;
  error?: string;
}

export function selectPayId(a: Pay): string {
  return a.id;
}

export function sortByDate(a: Pay, b: Pay): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export const adapter: EntityAdapter<Pay> = createEntityAdapter<Pay>({
  selectId: selectPayId,
  sortComparer: sortByDate,
});

export const initialState: MyBudgetState = adapter.getInitialState({
  error: '',
});

export const paysReducer = createReducer(
  initialState,
  on(MyBudgetActions.loadPaysSuccess, (state, { pays }) =>
    adapter.addMany(pays, state)
  ),
  on(MyBudgetActions.addPaySuccess, (state, { pay }) =>
    adapter.addOne(pay, state)
  )
);

export function reducer(state: MyBudgetState | undefined, action: Action) {
  return paysReducer(state, action);
}
