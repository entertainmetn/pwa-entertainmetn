/* tslint:disable */
import { XstrAlternativeTitle } from './xstr-alternative-title';
import { ImdbRating } from './imdb-rating';
import { XstrTitle } from './xstr-title';

export interface Movie {

  alternativeTitles?: XstrAlternativeTitle[];

  id?: number;

  imdbRating?: ImdbRating;

  originalLanguage?: string;

  originalTitle?: XstrTitle;

  releaseDate?: string;

  version?: number;
}
