import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmployeeInterface } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _url: string = '../assets/data/employees.json';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<EmployeeInterface[]> {
    return this.http.get<EmployeeInterface[]>(this._url).pipe(
      catchError((err) => {
        console.log('Error in server');
        return throwError(err);
      })
    );
  }
}
