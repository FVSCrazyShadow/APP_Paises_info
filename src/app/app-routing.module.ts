import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


const routes: Routes =[

  {
    path: '',         // http://localhost:4200/region
    component: PorPaisComponent,
    pathMatch: 'full'

  },
  {
    path: 'region',   // http://localhost:4200/region
    component: PorRegionComponent
  },
  {
    path: 'capital',  // http://localhost:4200/capital
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id', // http://localhost:4200/pais/test
    component: VerPaisComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
