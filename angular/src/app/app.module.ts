import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BASE_API_URL, SIDENAV_ITEMS } from './app.tokens';
import { ShellModule } from './shell/shell.module';
import { sidenavItems } from './shell/shell.sidenavitems';
import { HttpClientModule } from '@angular/common/http';
import { BeautifyDatePipe } from './pipes/beautify-date.pipe';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { paysReducer } from './state/my-budget.reducer';
import { MyBudgetEffects } from './state/my-budget.effects';
import { MY_BUDGET_FEATURE_KEY } from './state/my-budget.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [AppComponent, BeautifyDatePipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({}),
    StoreModule.forFeature(MY_BUDGET_FEATURE_KEY, paysReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([MyBudgetEffects]),
    HttpClientModule,
    ShellModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    { provide: BASE_API_URL, useValue: environment.baseApiUrl },
    { provide: SIDENAV_ITEMS, useValue: sidenavItems },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
