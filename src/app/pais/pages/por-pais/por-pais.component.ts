import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  elemento : string = 'test';

  constructor () {}

  buscar() {
    console.log(this.elemento);
  }

}
