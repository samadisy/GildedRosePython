import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { ConfirmDialogService } from 'src/app/@shared/pages/dialogs/confirm-dialog/confirm.service';
import { SnackbarService } from 'src/app/@shared/pages/snackbar/snackbar.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': ' GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': ' Origin, Content-Type, X-Auth-Token',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private snackbarService: SnackbarService,

    private dialogService: ConfirmDialogService
  ) {}
  options = {
    title: 'Are Sure To Delete This Item',
    message: 'Please Take An Action { You Press Esc or Enter to the Action }',
    cancelText: 'Cancel',
    confirmText: 'Confirm',
  };
  getRow(id: string, endPoint: string): Observable<any> {
    return this.http.get<any>(`${env.apiRoot}/${endPoint}/${id}`).pipe(
      map((response) => {
        return response;
      }),
      catchError((e) => throwError(e))
    );
  }
  getAllRows(endPoint: string): Observable<any[]> {
    return this.http.get<any[]>(`${env.apiRoot}/${endPoint}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((e) => throwError(e))
    );
  } //end of Get all
  deleteItem(id: number, endPoint: string) {
    return this.http
      .delete(`${env.apiRoot}/${endPoint}/${id}`, httpOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((e) => throwError(e))
      );
  }
  addRow(data: object, endPoint: string) {
    return this.http.post(`${env.apiRoot}/${endPoint}`, data, httpOptions).pipe(
      map((res) => {
        return res;
      }),
      catchError((e) => throwError(e))
    );
  }
  updateRow(id: number, data: object, endPoint: string) {
    return this.http
      .patch(`${env.apiRoot}/${endPoint}/${id}`, data, httpOptions)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((e) => throwError(e))
      );
  }
  deleteCheck(id: number, apiEndpoint: string) {
    this.dialogService.open(this.options);
    this.dialogService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.deleteItem(id, apiEndpoint).subscribe(
          (res) => {
            this.snackbarService.show('Item Deleted Successfully', 'success');
            this.router.navigate([apiEndpoint]);
          },
          (err) => {
            this.snackbarService.show(err['statusText'], 'danger');
          }
        );
      }
    });
  }
} //end of Class
