import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from './app.routing.module';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProyectsComponent } from './components/projects/proyects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    ProyectsComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
