import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-szinvalaszto',
  templateUrl: './szinvalaszto.component.html',
  styleUrls: ['./szinvalaszto.component.css']
})
export class SzinvalasztoComponent {
  @Output() ujszin = new EventEmitter()

  formSubmitTortent(event:any){
    event.preventDefault();
    console.log(event.target.elements.szin.value)
    this.ujszin.emit(event.target.elements.szin.value)

  }
}
