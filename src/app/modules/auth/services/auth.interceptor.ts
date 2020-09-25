import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {exhaustMap, take, map} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../store/root.reducer';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private store: Store<fromRoot.State>
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user;
      }),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({params: new HttpParams().set('auth', user.token)});
        return next.handle(modifiedReq);
      })
    );
  }

}
