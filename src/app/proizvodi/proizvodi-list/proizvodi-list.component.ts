import { Component, OnInit } from '@angular/core';
import { Proizvod } from 'src/app/proizvod';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-proizvodi-list',
  templateUrl: './proizvodi-list.component.html',
  styleUrls: ['./proizvodi-list.component.css']
})
export class ProizvodiListComponent implements OnInit {
   proizvodi:Proizvod[];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
  this.service.get("Proizvod").subscribe((data:Proizvod[])=>{
  this.proizvodi=data;
  });
  }
 
  obrisiProizvod(Id:number){
    this.service.delete(Id,"Proizvod").subscribe(d=>{
      this.proizvodi=this.proizvodi.filter(f=>f.proizvodId!==Id);
    })
  }
}
