export class FilmModel {
  title: string = '';
  release_date: string = '';
  episode_id: number = 0;
  director: string = '';
  producer: string = '';
}

export class FilmListModel {
  results: FilmModel[] = [];
}
