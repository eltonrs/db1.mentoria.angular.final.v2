import { Component, Input, OnInit } from '@angular/core';
import { FilmModel } from 'src/app/models/film.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  searchText:string;
  films: FilmModel[] = [];
  filmsCount: number = 0;
  showDetail: boolean = false;

  filmSelectedForDetail: FilmModel;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getAllMoveis();
  }

  getAllMoveis() {
    this.movieService
      .getAllMovies()
      .subscribe(films =>{
        this.filmsCount = films.length;

        this.films = films
          .sort((film1, film2) => film1.episode_id - film2.episode_id); // Extra: ordenação crescente.

        console.log(this.films);
      })
  }

  setFilmDetails(film: FilmModel) {
    if (film === null)
      return;

    console.log('Set film details.');

    this.filmSelectedForDetail = film;
    this.showDetail = true;
  }

  // Esse método será "ligado" (lá pelo template) à propriedade evento decorada com @Output
  turnDetailsHideByChildEvent(value: boolean) {

    console.log('turnDetailsHideByChildEvent');

    this.showDetail = value;
  }
}
