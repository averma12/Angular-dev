import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() stuff:string;

  @Output() build = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  sendStuffOut() {
    this.build.emit("I am sending this shit to you");
  }

}
