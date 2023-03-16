import { Component, Input, OnInit } from '@angular/core';
import { FilmModel } from 'src/app/models/film.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() film: FilmModel = new FilmModel();

  constructor() { }

  ngOnInit(): void {
    console.log('app-movie-details: ' + this.film);
  }

}
