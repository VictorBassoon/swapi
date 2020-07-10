import { Component, OnInit } from '@angular/core';
import { Films } from './films';
import { FilmsService } from './films.service';
import { getParseErrors } from '@angular/compiler';
import { mapArrayByProperties } from '@po-ui/ng-components/lib/utils/util';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  title: string = "Films(Filmes)"
   

  films: Films[] = [];
  dados: Array<[any]>;
  ep: number;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmsService.listFilms().subscribe(films => {
      
      this.films = films
             
      
    });
  
  }

}
