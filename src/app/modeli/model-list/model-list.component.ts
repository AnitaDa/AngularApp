import { Component, OnInit } from '@angular/core';

import { MarkaService } from 'src/app/marke/marka.service';
import { Model } from '../model';


@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {
  modeli:Model[];
  constructor(private service:MarkaService) { }

  ngOnInit(): void {
   this.service.get("Model")
   .subscribe((data:Model[])=>{
     this.modeli=data
   });
  }
  obrisiModel(modelId:number){
   this.service.delete(modelId,"Model").subscribe(pp=>{
    this.modeli=this.modeli.filter(f=>f.modelId!==modelId);
  });
  }
}
