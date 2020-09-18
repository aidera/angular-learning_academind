import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipesService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe(): void {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
