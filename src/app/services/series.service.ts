import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Personaje } from '../models/personaje';

@Injectable()
export class SeriesService {
    constructor(private _http : HttpClient) {}

    getSeries() : Observable<any> {
        var request = "/api/series/";
        var url = environment.urlSeries + request;

        return this._http.get(url);
    }

    getSerieId(id : string) : Observable<any> {
        var request = "/api/series/" + id;
        var url =  environment.urlSeries + request;

        return this._http.get(url);
    }

    getPersonajes() : Observable<any> {
        var request = "/api/personajes/";
        var url =  environment.urlSeries + request;

        return this._http.get(url);
    }

    getPersonajesId(id : string) : Observable<any> {
        var request = "/api/series/personajesserie/" + id;
        var url =  environment.urlSeries + request;

        return this._http.get(url);
    }

    postPersonaje(personaje : Personaje) : Observable<any> {
        var json = JSON.stringify(personaje);
        var header = new HttpHeaders().set("Content-Type", "application/json");

        var request = "/api/personajes/";
        var url =  environment.urlSeries + request;

        return this._http.post(url, json, {headers : header});
    }

    putPersonaje(idPersonaje : string, idSerie : string) : Observable<any> {
        var json = JSON.stringify(idPersonaje + idSerie);
        var header = new HttpHeaders().set("Content-Type", "application/json");

        var request = "/api/personajes/" + idPersonaje + "/" + idSerie;
        var url =  environment.urlSeries + request;

        return this._http.put(url, json, {headers : header});
    }

}