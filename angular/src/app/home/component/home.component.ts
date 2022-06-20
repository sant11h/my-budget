import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import moment from 'moment';
import { Pay } from 'src/app/models/pay';
import { loadPays } from 'src/app/state/my-budget.actions';
import { selectPays } from 'src/app/state/my-budget.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public pays = this.store$.select(selectPays);

  public columns = [
    {
      columnDef: 'amount',
      header: 'Amount',
      cell: (pay: Pay) => `${pay.amount}`,
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

  constructor(private store$: Store) {
    this.store$.dispatch(loadPays());
  }
}
