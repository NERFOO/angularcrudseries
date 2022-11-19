import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { Error404Component } from "./components/error404/error404.component";
import { HomeComponent } from "./components/home/home.component";
import { SerieComponent } from "./components/serie/serie.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { PostpersonajeComponent } from "./components/postpersonaje/postpersonaje.component";
import { UpdatepersonajeComponent } from "./components/updatepersonaje/updatepersonaje.component";

const appRoutes : Routes = [
    {path : "" , component : HomeComponent},
    {path : "serie/:id" , component : SerieComponent},
    {path : "personajes/:id" , component : PersonajesComponent},
    {path : "newpersonaje" , component : PostpersonajeComponent},
    {path : "updatepersonaje" , component : UpdatepersonajeComponent},
    {path : "**" , component : Error404Component},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

