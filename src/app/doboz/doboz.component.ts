import { Component } from '@angular/core';

@Component({
  selector: 'app-doboz',
  templateUrl: './doboz.component.html',
  styleUrls: ['./doboz.component.css']
})
export class DobozComponent {
  mozgatva=false
  xPozicio:number=0
  yPozicio:number=0

  dobozDragFolyamatban(event:any){
    if(this.mozgatva){
      console.log(event)
      this.xPozicio=event.clientX-100;
      this.yPozicio=event.clientY-100;
    }
      
  }
  
}
