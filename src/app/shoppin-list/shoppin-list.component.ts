import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
@Component({
  selector: 'app-shoppin-list',
  templateUrl: './shoppin-list.component.html',
  styleUrls: ['./shoppin-list.component.css']
})
export class ShoppinListComponent implements OnInit {
ingredients: Ingredient[] = [new Ingredient('apples', 8), new Ingredient('banana', 4) ];
  constructor() { }

  ngOnInit() {
  }

}
