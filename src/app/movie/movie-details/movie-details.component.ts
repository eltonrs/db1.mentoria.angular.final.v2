import { Component, Input, OnInit } from '@angular/core';
import { FilmModel } from 'src/app/models/film.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() film: FilmModel = new FilmModel(); // property decorated with Input()
  @Output() hideDetailsEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  onClickHideDetails(value: boolean){
    console.log('Button Hide pressed! ' + value);

    /*
    dispara um evento no qual é captado pelo métododo pai  ligado à propriedade evento decorada com @Output.
    */
    this.hideDetailsEvent.emit(value);
  }
}
