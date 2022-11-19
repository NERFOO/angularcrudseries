import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/models/serie';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  public serie! : Serie;

  constructor(private _service : SeriesService, private _activatedRoute : ActivatedRoute) { }

  cargarSerie(id : number) : void {
    this._service.getSerieId(id.toString()).subscribe( res => {
      this.serie = res;
    })
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros : Params) => {
      if(parametros['id'] != null) {
        var id = parametros['id'];
        this.cargarSerie(id);
      }
    })
  }

}
