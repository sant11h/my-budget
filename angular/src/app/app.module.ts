import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { environment } from 'src/environments/environment';
import { BASE_API_URL, SIDENAV_ITEMS } from './app.tokens';
import { ShellModule } from './shell/shell.module';
import { HomeModule } from './home/home.module';
import { sidenavItems } from './shell/shell.sidenavitems';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ShellModule,
    HomeModule,
  ],
  providers: [
    { provide: BASE_API_URL, useValue: environment.baseApiUrl },
    { provide: SIDENAV_ITEMS, useValue: sidenavItems },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
