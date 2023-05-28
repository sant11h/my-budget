import { Component, Inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import moment from 'moment';
import { BASE_API_URL } from 'src/app/app.tokens';
import { Pay } from 'src/app/models/pay';
import { addPay, loadPays } from 'src/app/state/my-budget.actions';
import { selectPays, totalAmountPays } from 'src/app/state/my-budget.selectors';
import { randomIntFromInterval } from 'src/app/utils/math-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public amountControl = new UntypedFormControl('');
  public detailControl = new UntypedFormControl('');

  public pays = this.store$.select(selectPays);
  public sumPays = this.store$.select(totalAmountPays);

  public columns = [
    {
      columnDef: 'amount',
      header: 'Amount ($)',
      cell: (pay: Pay) => `$${pay.amount}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (pay: Pay) => `${moment(pay.date).fromNow()}`,
    },
    {
      columnDef: 'detail',
      header: 'Details',
      cell: (pay: Pay) => `${pay.detail}`,
    },
  ];

  public displayedColumns = this.columns.map((c) => c.columnDef);

  public addPay() {
    const pay: Pay = {
      id: '',
      amount: this.amountControl.value,
      date: new Date(Date.now()),
      detail: this.detailControl.value,
    };

    this.amountControl.reset();
    this.detailControl.reset();

    this.store$.dispatch(addPay({ pay }));
  }
  constructor(private store$: Store) {
    this.store$.dispatch(loadPays());
  }
}
