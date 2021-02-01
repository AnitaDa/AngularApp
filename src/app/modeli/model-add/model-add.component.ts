import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Marka } from 'src/app/marke/marka';
import { MarkaService } from 'src/app/marke/marka.service';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent implements OnInit {
  marke:Marka[];
  form:FormGroup;
  constructor(private formBuilder: FormBuilder,private service:MarkaService,private router: Router) {
    this.form = this.formBuilder.group({
      naziv: [''],
      markaId:0
    })
   }
 
  ngOnInit(): void {
   this.service.get("Marka").subscribe((data:Marka[])=>{
     this.marke=data;
  })
  }
  submitForm(){
    this.service.add(this.form.value,"Model").subscribe(res => {
      console.log('Model created!')
      this.router.navigate(['listaModela'])
    })
  }
}
