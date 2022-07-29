import { Component, OnInit } from '@angular/core';


import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  elemento: string    = 'test';
  error   : boolean   = false;
  paises  : Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( termino: string) {

    this.error = false;
    this.elemento = termino;

    this.paisService.buscarCapital(this.elemento)
      .subscribe((resp) => {
        console.log(resp); //TODO: ELIMINAR
        this.paises = resp;
      }, (err) => {
        this.error  = true;
        this.paises = [];
      });
  }

  sugerencias( termino: string){
    this.error = false;
    this.elemento = termino;

    this.paisService.buscarCapital(this.elemento)
      .subscribe((resp) => {
        console.log(resp); //TODO: ELIMINAR
        this.paises = resp;
      }, (err) => {
        this.error  = true;
        this.paises = [];
      });
  }

}
