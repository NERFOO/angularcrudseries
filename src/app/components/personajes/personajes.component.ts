import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje';
import { SeriesService } from 'src/app/services/series.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public personajes! : Array<Personaje>;

  constructor(private _service : SeriesService, private _activatedRoute : ActivatedRoute) { }

  cargarPersonajes(id : number) : void {
    this._service.getPersonajesId(id.toString()).subscribe( res => {
      this.personajes = res;
    })
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros : Params) => {
      if(parametros['id'] != null) {
        var id = parametros['id'];
        this.cargarPersonajes(id);
      }
    })
  }

}
