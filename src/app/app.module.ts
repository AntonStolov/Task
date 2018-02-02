import { AppRoutingModule } from './app.router';
import { planets } from './list/Planets';
// import { planets } from './list/planets';
import { TaskService } from './task.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './search/search.component';
import { SelectorComponent } from './selector/selector.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    SearchComponent,
    SelectorComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TaskService, planets],
  bootstrap: [AppComponent]
})
export class AppModule { }
