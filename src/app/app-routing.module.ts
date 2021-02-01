import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkaAddComponent } from './marke/marka-add/marka-add.component';
import { MarkaComponent } from './marke/marka/marka.component';
import { ModelAddComponent } from './modeli/model-add/model-add.component';
import { ModelListComponent } from './modeli/model-list/model-list.component';
import { ModelComponent } from './modeli/model/model.component';
import { ProizvodAddComponent } from './proizvodi/proizvod-add/proizvod-add.component';
import { ProizvodiListComponent } from './proizvodi/proizvodi-list/proizvodi-list.component';
import { VrstaProizvodaListComponent } from './vrste-proizvoda/vrsta-proizvoda-list/vrsta-proizvoda-list.component';

const routes: Routes = [
  {path:"", component:MarkaComponent},
  {path:"listaMarki", component:MarkaComponent},
  {path:"listaModela", component:ModelListComponent},
  { path: "addMarka", component: MarkaAddComponent },
  { path: "addModel", component: ModelAddComponent },
  { path: "listaVrsteProizvoda", component: VrstaProizvodaListComponent },
  { path: "listaProizvoda", component: ProizvodiListComponent },
  { path: "addProizvod", component: ProizvodAddComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
