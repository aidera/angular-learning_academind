import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {Store} from '@ngrx/store';
import { map } from 'rxjs/operators';

import * as fromRoot from '../../store/root.reducer';
import * as AuthActions from '../../store/auth/auth.actions';
import * as RecipeActions from '../../store/recipe/recipe.actions';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private user$: Subscription;

  constructor(
    private store: Store<fromRoot.AppStateType>
  ) { }

  ngOnInit(): void {
    this.user$ = this.store.select('auth')
      .pipe(
        map(authState => authState.user)
      )
      .subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
  }

  onSaveData(): void {
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData(): void {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout(): void {
    this.store.dispatch(new AuthActions.Logout());
  }
}
