import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'menu',
    loadChildren:() => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recipe-detail/:id',
    loadChildren: () => import('./pages/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
  },

  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'recipe',
    loadChildren: () => import('./pages/search/recipe/recipe.module').then( m => m.RecipePageModule)
  },
  {
    path: 'ingredient',
    loadChildren: () => import('./pages/search/ingredient/ingredient.module').then( m => m.IngredientPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'recipe-find',
    loadChildren: () => import('./pages/recipe-find/recipe-find.module').then( m => m.RecipeFindPageModule)
  },

  {
    path: 'cuisine',
    loadChildren: () => import('./pages/cuisine/cuisine.module').then( m => m.CuisinePageModule)
  },
  {
    path: 'cuisine-item/:id',
    loadChildren: () => import('./pages/cuisine-item/cuisine-item.module').then( m => m.CuisineItemPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./pages/view/view.module').then( m => m.ViewPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
