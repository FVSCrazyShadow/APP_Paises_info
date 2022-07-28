import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  elemento: string = 'test';
  error    : boolean = false;

  constructor(private paisService: PaisService) { }

  buscar() {
    this.error = false;

    console.log(this.elemento);

    this.paisService.buscarPais(this.elemento)
      .subscribe((resp) => {
        console.log(resp);
      }, (err) => {
        this.error = true;
      });
  }

}
