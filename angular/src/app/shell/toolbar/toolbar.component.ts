import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Output()
  clicked = new EventEmitter<void>();

  onSidenavButtonClick() {
    this.clicked.emit();
  }
}
