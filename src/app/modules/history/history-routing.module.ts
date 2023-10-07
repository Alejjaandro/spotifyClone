import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

const routes: Routes = [
  {
    path: '', // localhost:4200/history
    component: HistoryPageComponent,
    outlet: 'home-ruterOutlet'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
