import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import {ActivatedRoute} from '@angular/router';
import { Serie } from 'src/app/models/serie';
import { Personaje } from 'src/app/models/personaje';
import {Router} from '@angular/router';

@Component({
  selector: 'app-updatepersonaje',
  templateUrl: './updatepersonaje.component.html',
  styleUrls: ['./updatepersonaje.component.css']
})
export class UpdatepersonajeComponent implements OnInit {
  public series! : Array<Serie>;
  public personajes! : Array<Personaje>;

  @ViewChild("cajaidserie") cajaIdSerie! : ElementRef;
  @ViewChild("cajaidpersonaje") cajaIdPersonaje! : ElementRef;

  constructor(private _service : SeriesService, private _router : Router) { }

  cargarSeries() : void {
    this._service.getSeries().subscribe( res => {
      this.series = res;
    })
  }

  cargarPersonajes() : void {
    this._service.getPersonajes().subscribe( res => {
      this.personajes = res;
    })
  }

  actualizarPersonaje() : void {
    var idPersonaje = this.cajaIdPersonaje.nativeElement.value;
    var idSerie = this.cajaIdSerie.nativeElement.value;

    this._service.putPersonaje(idPersonaje, idSerie).subscribe( () => {
      console.log("actualizado", idPersonaje, idSerie);
      this._router.navigate(["/personajes/", idSerie])
    })
  }

  ngOnInit(): void {
    this.cargarSeries();
    this.cargarPersonajes();
  }

}
