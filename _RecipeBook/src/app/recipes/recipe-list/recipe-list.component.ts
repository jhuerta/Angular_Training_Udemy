import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Estofado de carne','Para tardes de invierno', 'https://www.publicdomainpictures.net/pictures/70000/velka/beef-stew.jpg'),
        new Recipe('Pasta Carbonara','Un clasico entre los clasicosw', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Spaghetti_alla_Carbonara_%28cropped%29.jpg/738px-Spaghetti_alla_Carbonara_%28cropped%29.jpg')
    ];

  constructor() { }

  ngOnInit() {
  }

}
