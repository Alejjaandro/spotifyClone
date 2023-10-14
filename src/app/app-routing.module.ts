import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'auth', // PUBLIC localhost:4200/auth
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule) // Lazy loading
  },
  {
    path: '', // PRIVATE localhost:4200/
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule), // Lazy loading
    canActivate: [sessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
