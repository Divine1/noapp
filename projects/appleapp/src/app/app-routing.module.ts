import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  {path : "", component  : AnalyticsComponent , pathMatch: "full"},
  { path: 'sports', loadChildren: () => import('./sports/sports.module').then(m => m.SportsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
