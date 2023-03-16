export class StarWarsConstants {
  static readonly API: string = 'https://swapi.dev/api';
  static readonly EndpointFilms: string = '/films';

  static getURLFilms(): string {
      return StarWarsConstants.API + StarWarsConstants.EndpointFilms;
  }
}
