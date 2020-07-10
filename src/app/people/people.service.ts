import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { People } from './people';


const API = 'https://swapi.dev/api/people';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {}
  
  


  listPeople(page:number){
     return this.http.get<People[]>(API + `/?page=${page}`)  
  }

  listPeoplePage(page:number){
   
    //const params = new HttpParams().append('page',page.toString());
    //return this.http.get<People[]>(API,{params})
    return this.http.get<People[]>(API + `/?page=${page}`)
    
  }

}
