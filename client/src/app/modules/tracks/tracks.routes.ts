import { Routes } from '@angular/router';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';

export const tracksRoutes: Routes = [
  {
    path: '', // localhost:4200/tracks
    component: TracksPageComponent,
    outlet: 'home-ruterOutlet'
  }
];