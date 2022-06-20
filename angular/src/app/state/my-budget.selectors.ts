import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  adapter,
  MyBudgetState,
  MY_BUDGET_FEATURE_KEY,
} from './my-budget.reducer';

export const selectMyBudgetState = createFeatureSelector<MyBudgetState>(
  MY_BUDGET_FEATURE_KEY
);

export const { selectAll, selectIds } =
  adapter.getSelectors(selectMyBudgetState);

export const selectPays = createSelector(selectAll, (pays) => pays);
export const totalAmountPays = createSelector(selectAll, (pays) => {
  let sum = 0;
  pays.forEach((x) => (sum += x.amount));
  return sum;
});
