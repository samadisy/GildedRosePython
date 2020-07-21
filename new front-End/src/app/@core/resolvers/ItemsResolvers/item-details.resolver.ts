import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
@Injectable({ providedIn: 'root' })
export class ItemDetailsResolver implements Resolve<any> {
  constructor(private itemService: ApiService) {}
  resolve(next: ActivatedRouteSnapshot): Observable<any> {
    const pageId = next.paramMap.get('id');
    return pageId
      ? this.itemService.getRow(pageId, 'items').pipe(
          map((res) => {
            return res['data'];
          }),
          catchError(() => {
            return of('No Data');
          })
        )
      : EMPTY;
  }
}
