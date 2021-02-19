/**
 * Action types
 */
export enum FilmTypes {
  LOAD_FILMS_REQUEST = '@film/LOAD_FILMS_REQUEST',
  LOAD_FILMS_SUCCCES = '@film/LOAD_FILMS_SUCCCES',
  LOAD_FILMS_FAILURE = '@film/LOAD_FILMS_FAILURE',
}

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

/**
 * State type
 */
export interface FilmState {
  readonly results: Film[];
  readonly count?: number;
  readonly next?: any;
  readonly previous?: any;
}
