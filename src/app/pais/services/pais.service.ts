import { HttpClient } from '@angular/common/http'; //Peticiones http
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _api_url: string = 'https://restcountries.com/v3.1/';

  constructor( private http: HttpClient) { }

  //---f()---
  //TODO: Refactorizar si posible.

  buscarPais( termino:string ): Observable<any>
  {

    const url = `${this._api_url}/name/${ termino }`
    return this.http.get( url);

  }
}
