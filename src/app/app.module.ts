import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuService } from './shared/menu/menu.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { MenuListComponent } from './menu-list/menu-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
