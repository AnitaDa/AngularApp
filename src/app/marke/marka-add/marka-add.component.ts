import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";  
import { MarkaService } from '../marka.service';
import { Marka } from '../marka';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marka-add',
  templateUrl: './marka-add.component.html',
  styleUrls: ['./marka-add.component.css']
})
export class MarkaAddComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private service:MarkaService) { 
    this.form = this.formBuilder.group({
      naziv: ['']
    })
  }
  ngOnInit(): void {
  }

  submitForm(){
    this.service.add(this.form.value,"Marka").subscribe(res => {
      console.log('Product created!')
      this.router.navigate(['listaMarki'])
    })
 }
}

