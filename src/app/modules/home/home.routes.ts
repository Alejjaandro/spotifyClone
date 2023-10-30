import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: 'tracks', // localhost:4200/tracks
    loadChildren: () => import('@modules/tracks/tracks.routes').then(m => m.tracksRoutes)
  },
  {
    path: 'favorites', // localhost:4200/favorites
    loadChildren: () => import('@modules/favorites/favorites.routes').then(m => m.favouritesRoutes)
  },
  {
    path: 'history', // localhost:4200/history
    loadChildren: () => import('@modules/history/history.routes').then(m => m.historyRoutes)
  },
  {
    path: '**', // 404, Route not found
    redirectTo: '/tracks'
  }
];