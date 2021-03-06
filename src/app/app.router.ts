import {InformationComponent} from './information/information.component';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '0+5',
    pathMatch: 'full'
  },
  {
    path: ':planets',
    component: MainComponent,
  },
  {
    path: ':planets/:num',
    component: InformationComponent,
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
