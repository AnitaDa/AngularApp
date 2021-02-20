import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-vrsta-proizvoda-add',
  templateUrl: './vrsta-proizvoda-add.component.html',
  styleUrls: ['./vrsta-proizvoda-add.component.css']
})
export class VrstaProizvodaAddComponent implements OnInit {
   form:FormGroup;
  constructor(private formBuilder:FormBuilder,private service:SharedService,private router:Router) { 
    this.form = this.formBuilder.group({
      naziv: [''],
      vrstaProizvodaId:0
    })
   }

  ngOnInit(): void {
  }
  submitForm(){
    this.service.add(this.form.value,"VrstaProizvoda");
      this.router.navigate(['listaVrsteProizvoda'])
 }
}
