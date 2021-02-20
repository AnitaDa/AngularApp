import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Model } from 'src/app/modeli/model';
import { Proizvod } from 'src/app/proizvod';
import { SharedService } from 'src/app/shared.service';
import { VrstaProizvoda } from 'src/app/vrsta-proizvoda';

@Component({
  selector: 'app-proizvod-add',
  templateUrl: './proizvod-add.component.html',
  styleUrls: ['./proizvod-add.component.css']
})
export class ProizvodAddComponent implements OnInit {
  form: FormGroup;
  vrste: VrstaProizvoda[];
  modeli: Model[];
  proizvodId: number;
  proizvod: Proizvod;
  kolicina:number;
  modelId:number;
  sifra:string;
  vrstaModelId:number;
  constructor(private formBuilder: FormBuilder, public service: SharedService, private router: Router, private route: ActivatedRoute) {
   this.resetForm();
  }
  
  ngOnInit(): void {
    this.proizvodId = +this.route.snapshot.params['Id'];
    if(this.proizvodId>0){
      this.service.getById("Proizvod",this.proizvodId).subscribe((p)=>{
        this.proizvod=p,
        console.log(this.proizvod),
        this.fillForm()
      })
    }
    else{
      this.resetForm();
    }
  
    this.service.get("Model").subscribe((data: Model[]) => {
      this.modeli = data
    })
    this.service.get("VrstaProizvoda").subscribe((d: VrstaProizvoda[]) => {
      this.vrste = d
    })
   
  }
  resetForm() {
    this.form = this.formBuilder.group({
      sifra: [''],
      kolicina: 0,
      vrstaProizvodaId: 0,
      modelId: 0
    })
  }
  fillForm(){
    console.log(this.proizvod);
   this.form.controls["sifra"].setValue(this.proizvod.sifra);
   this.form.controls["kolicina"].setValue(this.proizvod.kolicina);
   this.form.controls["vrstaProizvodaId"].setValue(this.proizvod.vrstaProizvodaId);
   this.form.controls["modelId"].setValue(this.proizvod.modelId);
  }
  get formFields() { return this.form.controls; }
  UvecajBroj() {

  }
  UmanjiBroj() {

  }
  submitForm() {
    if(this.proizvodId!=0){
     let pr:Proizvod|any={
     proizvodId:this.proizvodId,
      sifra:this.formFields.sifra.value,
      vrstaProizvodaId:+this.formFields.vrstaProizvodaId.value,
       modelId:+this.formFields.modelId.value,
       kolicina:+this.formFields.kolicina.value
     };
     this.service.update("Proizvod",this.proizvodId,pr).subscribe((d)=>{
       console.log(d),
       this.router.navigate(['listaProizvoda'])
     });
    }
    else{
    console.log(this.form.value);
    this.service.add(this.form.value, "Proizvod");
      this.router.navigate(['listaProizvoda'])
    }
  }
}
