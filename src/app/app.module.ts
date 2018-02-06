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

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    SelectorComponent,
    MainComponent,
    PlanetFilterPipe,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TaskService, PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
