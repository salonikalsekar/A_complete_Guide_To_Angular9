import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']

})

//just an example for adding inline styles and template 
export class TemplateComponent implements OnInit {
  newArray:any;
create = "no server"
serverCreatedngif=false;
  allow = false
  name = 'Saloni';
  value1 : string= "string"
  num: number = 10

  getRandomString(){
   return this.value1;
  }

  constructor(){
    
    setTimeout(()=>{
      this.allow = true
    }, 2000)
  }

  createserver(){
    this.serverCreatedngif = true;
    this.create= "server created"
  }
  UpdateServer(event:any){
    this.create = (<HTMLInputElement>event.target).value 
    console.log(event)

  }
  ngOnInit() {
    this.newArray = ['apple',  'mango' , 'papaya']

  }
  getColor(){
    return this.serverCreatedngif == true ? 'green' : 'red';
  }
}
