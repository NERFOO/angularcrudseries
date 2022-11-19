import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public series! : Array<Serie>;

  constructor(private _service : SeriesService) { }

  cargarSeries() : void {
    this._service.getSeries().subscribe( res => {
      this.series = res;
    })
  }

  ngOnInit(): void {
    this.cargarSeries();
  }

}
