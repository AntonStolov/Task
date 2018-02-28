import {AppRoutingModule} from './app.router';
import {PlanetsService} from './planets.service';
import {TaskService} from './task.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {HttpModule} from '@angular/http';
import {SearchComponent} from './search/search.component';
import {SelectorComponent} from './selector/selector.component';
import {MainComponent} from './main/main.component';
import {PlanetFilterPipe} from './planetfilter.pipe';
import {InformationComponent} from './information/information.component';
import {FilterService} from './filter.service';
import {SelectorService} from './selector.service';
import { NavigationComponent } from './navigation/navigation.component';
import {ToggleService} from './toggle.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    SelectorComponent,
    MainComponent,
    PlanetFilterPipe,
    InformationComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TaskService, PlanetsService, FilterService, SelectorService, ToggleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
