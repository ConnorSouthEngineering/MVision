import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../shared/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class GetTargetService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  getTargetService(itemLimit: number = 10, currentPage: number = 1): Observable<any[]> {

    const url = `${this.baseUrl}/targets/`;

    const params = new HttpParams()
      .set('itemLimit', itemLimit.toString())
      .set('currentPage', currentPage.toString());

    return this.http.get<any[]>(url, { params });
  }
}
