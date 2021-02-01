import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MarkaComponent } from './marke/marka/marka.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkaService } from './marke/marka.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkaAddComponent } from './marke/marka-add/marka-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModelListComponent } from './modeli/model-list/model-list.component';
import { ModelComponent } from './modeli/model/model.component';
import { ModelAddComponent } from './modeli/model-add/model-add.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { ProizvodComponent } from './proizvodi/proizvod/proizvod.component';
import { ProizvodiListComponent } from './proizvodi/proizvodi-list/proizvodi-list.component';
import { ProizvodAddComponent } from './proizvodi/proizvod-add/proizvod-add.component';
import { VrsteProizvodaComponent } from './vrste-proizvoda/vrste-proizvoda.component';
import { VrstaProizvodaListComponent } from './vrste-proizvoda/vrsta-proizvoda-list/vrsta-proizvoda-list.component';
import { VrstaProizvodaAddComponent } from './vrste-proizvoda/vrsta-proizvoda-add/vrsta-proizvoda-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkaComponent,
    MarkaAddComponent,
    ModelListComponent,
    ModelComponent,
    ModelAddComponent,
    ProizvodiComponent,
    ProizvodComponent,
    ProizvodiListComponent,
    ProizvodAddComponent,
    VrsteProizvodaComponent,
    VrstaProizvodaListComponent,
    VrstaProizvodaAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MarkaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
