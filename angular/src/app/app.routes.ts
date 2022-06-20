import { Routes } from '@angular/router';
import { NotFoundComponent } from './shell/not-found/not-found.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import(
        /* webpackChunkName: "home" */
        './home/component/home.module'
      ).then((m) => m.HomeModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
