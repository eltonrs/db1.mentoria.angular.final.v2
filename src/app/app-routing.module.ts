import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';

const routes: Routes = [
  {
    path: 'list',
    pathMatch: 'full',
    component: MovieListComponent
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
