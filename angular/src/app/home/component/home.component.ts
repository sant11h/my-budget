import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { Observable } from 'rxjs';
import { Pay } from 'src/app/models/pay';
import { randomIntFromInterval } from 'src/app/utils/math-utils';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public pays: Observable<Pay[]>;

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

  constructor(private homeService: HomeService) {
    this.pays = this.homeService.getAll();
  }
}
