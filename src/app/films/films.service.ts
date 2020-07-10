import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Films } from './films';

const API = 'https://swapi.dev/api/films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) {}

  listFilms(){
    return this.http.get<Films[]>(API + '/?page=1');
  }

}
