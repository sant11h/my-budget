import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Optional,
  Output,
} from '@angular/core';
import { SIDENAV_ITEMS } from 'src/app/app.tokens';
import { SidenavItem } from '../shell.models';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  private _opened = false;

  @Input()
  set opened(value: boolean) {
    this._opened = value;
    this.openedChange.emit(this._opened);
  }

  get opened() {
    return this._opened;
  }

  @Output()
  openedChange = new EventEmitter<boolean>();

  toggle() {
    this.opened = !this.opened;
  }

  constructor(
    @Inject(SIDENAV_ITEMS) @Optional() public sidenavItems?: SidenavItem[]
  ) {}
}
