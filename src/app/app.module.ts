import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SerieComponent } from './components/serie/serie.component';
import { UpdatepersonajeComponent } from './components/updatepersonaje/updatepersonaje.component';
import { PostpersonajeComponent } from './components/postpersonaje/postpersonaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { appRoutingProviders, routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { SeriesService } from './services/series.service';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HomeComponent,
    MenuComponent,
    SerieComponent,
    UpdatepersonajeComponent,
    PostpersonajeComponent,
    PersonajesComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule ,
    routing ,
    HttpClientModule
  ],
  providers: [appRoutingProviders, SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
