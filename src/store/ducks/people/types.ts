/**
 * Action types
 */
export enum PeopleTypes {
  LOAD_PEOPLE_REQUEST = '@people/LOAD_PEOPLE_REQUEST',
  LOAD_PEOPLE_SUCCCES = '@people/LOAD_PEOPLE_SUCCCES',
  LOAD_PEOPLE_FAILURE = '@people/LOAD_PEOPLE_FAILURE',

  LOAD_PEOPLE_LIST_REQUEST = '@people/LOAD_PEOPLE_LIST_REQUEST',
}

export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

/**
 * State type
 */
export interface PeopleState {
  readonly people?: People;
  readonly results?: People[];
}
