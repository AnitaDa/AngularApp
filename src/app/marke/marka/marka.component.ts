import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Marka } from '../marka';


@Component({
  selector: 'app-marka',
  templateUrl: './marka.component.html',
  styleUrls: ['./marka.component.css']
})
export class MarkaComponent implements OnInit {
  marke:Marka[];
  constructor(private service:SharedService) { }
  
  ngOnInit(): void {
    this.service.get("Marka")
    .subscribe((data: Marka[])=>{
    this.marke=data;
    });
  }
  public obrisiMarku(markaId:number){
    this.service.delete(markaId,"Marka").subscribe(pp=>{
      this.marke=this.marke.filter(f=>f.markaId!==markaId);
    });
  }
}
