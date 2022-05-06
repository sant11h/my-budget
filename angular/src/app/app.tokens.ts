import { InjectionToken } from '@angular/core';
import { SidenavItem } from './shell/shell.models';

export const BASE_API_URL = new InjectionToken<string>('BASE_API_URL');
export const SIDENAV_ITEMS = new InjectionToken<SidenavItem[]>('SIDENAV_ITEMS');
