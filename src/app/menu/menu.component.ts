import { Component, OnInit } from '@angular/core';
import { PoMenuPanelItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public readonly menuItems: Array<PoMenuPanelItem> =this.getMenu()

  changeTitle(menu: PoMenuPanelItem) {
     menu.label;
  }

  getMenu(){
    return [
      { label: 'Home'       ,link:'/home'   , icon: 'po-icon-home' },
      { label: 'People'     ,link:'/people' , icon: 'po-icon po-icon-user' },
      { label: 'Films'      ,link:'/films'  , icon: 'po-icon po-icon-video-call' },
      { label: 'Starships'  ,link:'/home'   , icon: 'po-icon po-icon-light' },
      { label: 'Vehicles'   ,link:'/home'   , icon: 'po-icon po-icon-truck' },
      { label: 'Spacies'    ,link:'/home'   , icon: 'po-icon po-icon-pin' },
      { label: 'Planets'    ,link:'/home'   , icon: 'po-icon po-icon-world' },
      { label: 'Exit'       ,link:'/login'  , icon: 'po-icon po-icon-exit' }
    ];
  }

}
