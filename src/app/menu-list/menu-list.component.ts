import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/menu/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  menus: Array<any>;

  constructor(private menuService : MenuService) { }

  ngOnInit() {
    this.menuService.getAll().subscribe(data => {
      this.menus = data;
    });
  }

}
