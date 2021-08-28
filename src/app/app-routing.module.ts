import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FoundersComponent } from './components/founders/founders.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [{
    path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'home', component: HomeComponent
  }, {
    path: 'agenda', component: AgendaComponent
  }, {
    path: 'projects', component: ProjectsComponent
  }, {
    path: 'founders/:id', component: FoundersComponent
  }, {
    path: 'founders', component: FoundersComponent
  }, {
    path: 'about', component: AboutUsComponent
  }, {
    path: 'contact', component: ContactComponent
  }, {
    path: '**' , redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
