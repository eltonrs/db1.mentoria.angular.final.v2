import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { StarWarsConstants } from '../constants/starwars.constants';
import { FilmListModel, FilmModel } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies(): Observable<FilmModel[]> {
    return this.httpClient
    .get<FilmListModel>(
      `${StarWarsConstants.getURLFilms()}`,
      {
        observe: 'body',
        responseType: 'json'
      }
    )
    .pipe(
      map(
        filmListModelResponse => {
          let films: FilmModel[];

          films = filmListModelResponse.results.map(
            filmModelResponse => {
              let film: FilmModel = new FilmModel();

              film.episode_id = filmModelResponse.episode_id;
              film.title = filmModelResponse.title;
              film.release_date = filmModelResponse.release_date;
              film.director = filmModelResponse.director;
              film.producer = filmModelResponse.producer;

              return film;
            }
          )

          return films;
        }
      )
    )
  }
}
