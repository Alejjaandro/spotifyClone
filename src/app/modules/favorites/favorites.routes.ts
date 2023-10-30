import { Routes } from '@angular/router';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

export const favouritesRoutes: Routes = [
  {
    path: '', // localhost:4200/favorites
    component: FavoritesPageComponent,
    outlet: 'home-ruterOutlet'
  }
];