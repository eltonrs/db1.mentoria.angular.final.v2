import { Pipe, PipeTransform } from '@angular/core';
import { FilmModel } from 'src/app/models/film.model';

@Pipe({
  name: 'filterByText',
  pure: true
})

export class FilterByTextComponent implements PipeTransform {

  transform(films: FilmModel[], filterText: string, propertyFilter: string): FilmModel[] {
    // dá pra passar mais properties, mas tenho que estudar mais sobre isso

    console.log('length: ' + films.length);
    console.log('filterText: ' + filterText);
    console.log('propertyFilter: ' + propertyFilter);

    if (films.length === 0 || !filterText) {
      console.log('sem filtro');

      return films;
    }

    let filmsFiltered: FilmModel[] = []; // Se não inicializar, dá pau no push

    for (let film of films) {
      if (film[propertyFilter].toLowerCase().includes(filterText.toLowerCase())) {
        filmsFiltered.push(film);
      }
    }

    console.log('com filtro');

    return filmsFiltered;
  }
}
