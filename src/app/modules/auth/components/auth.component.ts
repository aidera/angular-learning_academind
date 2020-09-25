import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

import {AlertComponent} from '../../../shared/components/alert/alert.component';
import {PlaceholderDirective} from '../../../shared/placeholder.directive';
import * as fromRoot from '../../../store/root.reducer';
import * as AuthActions from '../../../store/auth/auth.actions';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string | null = null;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  private modal$: Subscription;
  private store$: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<fromRoot.AppStateType>
  ) {
  }

  ngOnInit(): void {
    this.store$ = this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if (this.error) {
        this.showErrorAlert(this.error);
      }
    });
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;

      this.isLoading = true;
      if (this.isLoginMode) {
        this.store.dispatch(new AuthActions.LoginStart({email, password}));
      } else {
        this.store.dispatch(new AuthActions.SignupStart({email, password}));
      }

    }
  }

  onHandleError(): void {
    this.store.dispatch(new AuthActions.ClearError());
  }

  private showErrorAlert(message: string): void {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);
    componentRef.instance.message = message;
    this.modal$ = componentRef.instance.closeEvent.subscribe(() => {
      this.modal$.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.modal$) {
      this.modal$.unsubscribe();
    }
    if (this.store$) {
      this.store$.unsubscribe();
    }
  }
}
