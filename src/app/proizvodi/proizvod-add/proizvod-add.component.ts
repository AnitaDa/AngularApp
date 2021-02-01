import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MarkaService } from 'src/app/marke/marka.service';
import { Model } from 'src/app/modeli/model';
import { VrstaProizvoda } from 'src/app/vrsta-proizvoda';

@Component({
  selector: 'app-proizvod-add',
  templateUrl: './proizvod-add.component.html',
  styleUrls: ['./proizvod-add.component.css']
})
export class ProizvodAddComponent implements OnInit {
  form:FormGroup;
  vrste:VrstaProizvoda[];
  modeli:Model[];
  constructor(private formBuilder: FormBuilder,private service:MarkaService, private router:Router) { 
    this.form = this.formBuilder.group({
      sifra:[''],
      kolicina:0,
      vrstaProizvodaId:0,
      modelId:0
    })
  }

  ngOnInit(): void {
    this.service.get("Model").subscribe((data:Model[])=>{
    this.modeli=data
      })
      this.service.get("VrstaProizvoda").subscribe((d:VrstaProizvoda[])=>{
        this.vrste=d;
      })
  }
  submitForm(){
    this.service.add(this.form.value,"Proizvod").subscribe(res => {
      console.log('Product created!')
      this.router.navigate(['listaProizvoda'])
    })
  }
}
