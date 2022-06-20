import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HomeService } from '../home/services/home.service';
import * as MyBudgetActions from './my-budget.actions';

@Injectable()
export class MyBudgetEffects {
  loadPays$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyBudgetActions.loadPays),
      mergeMap(() =>
        this.homeService.getAll().pipe(
          map((pays) => MyBudgetActions.loadPaysSuccess({ pays })),
          catchError((error) => of(MyBudgetActions.loadPaysErrored(error)))
        )
      )
    )
  );

  addPay$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyBudgetActions.addPay),
      mergeMap((action) =>
        this.homeService.addPay(action.pay).pipe(
          map((pay) => MyBudgetActions.addPaySuccess({ pay })),
          catchError((error) => of(MyBudgetActions.addPayErrored(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private homeService: HomeService) {}
}
