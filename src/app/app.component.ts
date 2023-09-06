import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doboz';
  szin:string = "yellow"
  ujSzin(event:string){
    console.log("APP_COMP: ",event)
    this.szin= event
  }
}
