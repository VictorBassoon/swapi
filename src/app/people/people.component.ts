import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { People } from './people';
import { PoButtonGroupItem } from '@po-ui/ng-components';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  
   buttons: Array<PoButtonGroupItem> = [
    { icon: 'po-icon po-icon-arrow-left', label: 'Previous', action: this.prevPage, tooltip: 'Previous Page (Página anterior)', disabled: true},
    { icon: 'po-icon po-icon-arrow-right', label: 'Next', action: this.nextPage, tooltip: 'Next Page (Próxima página)', disabled:false }
  ];
  title = "People(Personagens)";
  name: string;
  birthYear: string;
  gender: string;
  eyeColor: string;
  hairColor: string;
  height: string;
  mass: string;
  homeworld: string;
  species: string;
  page: number;





  people: People[] = [];
  
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.page = 1;


    this.peopleService.listPeople(this.page).subscribe(people => {
      console.log(people);
      this.people = people;
    });

  }




  action(button) {
    alert(`${button.label}`);
  }

  printData(people) {

    
    this.name       = people.name;
    this.birthYear  = people.birth_year;
    this.gender     = people.gender;
    this.eyeColor   = people.eye_color;
    this.hairColor  = people.hair_color;
    this.height     = people.height;
    this.mass       = people.mass;
    this.homeworld  = people.homeworld;
    this.species    = people.species;

  }

  nextPage() {
    this.page++;

    this.peopleService.listPeoplePage(this.page).subscribe(people => {
      //console.log(people);
      this.people = people;

      if(this.page > 1){
        this.buttons[0].disabled = false;
        
      }

      if(this.page >=9){
        this.buttons[1].disabled = true;
      }

    });


  }
  prevPage() {
    this.page--;

    this.peopleService.listPeoplePage(this.page).subscribe(people => {
      //console.log(people);
      this.people = people;

    });

    if(this.page <= 1){
      this.buttons[0].disabled = true;
      
    }

    if(this.page <=9){
      this.buttons[1].disabled = false;
    }


  }

  

}

