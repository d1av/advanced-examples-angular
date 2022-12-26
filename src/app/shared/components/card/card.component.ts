import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  text: string = '';

  @Output()
  status: EventEmitter<any> = new EventEmitter();


  emitirEvento() {
    this.status.emit(this.text);
  }

}
