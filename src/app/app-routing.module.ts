import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CountryComponent } from './pages/country/country.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BlogComponent } from './pages/blog/blog.component';
import { QuestionsComponent } from './pages/questions/questions.component';


const routes: Routes = [
  { path: '',  component: DashboardComponent},
  { path: 'country/:name', component : CountryComponent},
  { path: 'blog/:name', component : BlogComponent},
  { path: 'questions', component : QuestionsComponent},
  { path: '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
