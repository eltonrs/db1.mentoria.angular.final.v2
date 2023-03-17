import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieService } from './movie/movie.service';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { FilterByTextComponent } from './shared/filter-by-text/filter-by-text.pipe';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    FilterByTextComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
