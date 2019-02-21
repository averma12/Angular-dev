import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 stuffexample:string = "This is the angular version of props yo";

  title = 'bill-tracker';

  parentFunction($event){
    console.log($event);
  }
}
