import { Routes } from '@angular/router';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

export const historyRoutes: Routes = [
  {
    path: '', // localhost:4200/history
    component: HistoryPageComponent,
    outlet: 'home-ruterOutlet'
  }
];