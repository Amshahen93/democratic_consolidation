import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TestimonialComponent } from './components/home/testimonial/testimonial.component';
import { FooterComponent } from './components/footer/footer.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { PopupComponent } from './tools/popup/popup.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FoundersComponent } from './components/founders/founders.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LanguageService } from './Services/language.service';
import { ContactComponent } from './components/contact/contact.component';

import { VgCoreModule } from 'videogular2/compiled/src/core/core';
import { VgControlsModule } from 'videogular2/compiled/src/controls/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/src/overlay-play/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/src/buffering/buffering';






@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    HomeComponent,
    TestimonialComponent,
    FooterComponent,
    AgendaComponent,
    PopupComponent,
    ProjectsComponent,
    FoundersComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
