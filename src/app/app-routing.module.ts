import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AgendaComponent } from './components/agenda/agenda.component';


const routes: Routes = [{
    path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'home', component: HomeComponent
  }, {
    path: 'agenda', component: AgendaComponent
  }, {
    path: '**' , component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
