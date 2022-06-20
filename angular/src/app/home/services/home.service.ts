import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../../app.tokens';
import { Pay } from '../../models/pay';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public createPay(pay: Pay): Observable<Pay> {
    console.log(this.apiUrl + '/pay');

    return this.httpClient.post<Pay>(this.apiUrl + '/pay', pay);
  }

  public getAll(): Observable<Pay[]> {
    return this.httpClient.get<Pay[]>(this.apiUrl + '/pay');
  }

  constructor(
    @Inject(BASE_API_URL) private apiUrl: string,
    private httpClient: HttpClient
  ) {}
}
