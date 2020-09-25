import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import { AuthService } from './modules/auth/services/auth.service';
import {LoggingService} from './services/logging.service';
import * as fromRoot from './store/root.reducer';
import * as AuthActions from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private loggingService: LoggingService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.autoLogin());
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
}
