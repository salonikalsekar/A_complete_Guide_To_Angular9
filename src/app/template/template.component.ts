import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-template]',
  // selector: '.app-template',
  selector: 'app-template',
  template: '<app-server>inline template</app-server>',
  //styleUrls: ['./template.component.css']
  styles:[`
   p{
     color:blue;
   }
  `]
})

//just an example for adding inline styles and template 
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
