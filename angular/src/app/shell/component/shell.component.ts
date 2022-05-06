import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
})
export class ShellComponent implements OnInit {
  public isSidenavOpened: boolean = false;

  onSidenavButton() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  constructor() {}

  ngOnInit(): void {}
}
