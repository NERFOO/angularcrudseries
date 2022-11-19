import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Personaje } from 'src/app/models/personaje';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/series.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-postpersonaje',
  templateUrl: './postpersonaje.component.html',
  styleUrls: ['./postpersonaje.component.css']
})
export class PostpersonajeComponent implements OnInit {
  public personaje! : Personaje;
  public series! : Array<Serie>;

  @ViewChild("cajanombre") cajaNombre! : ElementRef;
  @ViewChild("cajaimagen") cajaImagen! : ElementRef;
  @ViewChild("cajaidserie") cajaIdSerie! : ElementRef;

  constructor(private _service : SeriesService, private _router : Router) { }

  cargarSeries() : void {
    this._service.getSeries().subscribe( res => {
      this.series = res;
    })
  }

  crearPersonaje() : void {
    var idPersonaje = 0;
    var nom = this.cajaNombre.nativeElement.value;
    var imagen = this.cajaImagen.nativeElement.value;
    var idSerie = parseInt(this.cajaIdSerie.nativeElement.value);

    var personaje = new Personaje(idPersonaje, nom, imagen, idSerie);

    this._service.postPersonaje(personaje).subscribe( res => {
      this.personaje = res;
      console.log("creado")
      this._router.navigate(["/personajes/", personaje.idSerie])
    })
  }

  ngOnInit(): void {
    this.cargarSeries();
  }

}
