import { Component, OnInit } from '@angular/core';
import { MarkaService } from 'src/app/marke/marka.service';
import { Proizvod } from 'src/app/proizvod';

@Component({
  selector: 'app-proizvodi-list',
  templateUrl: './proizvodi-list.component.html',
  styleUrls: ['./proizvodi-list.component.css']
})
export class ProizvodiListComponent implements OnInit {
   proizvodi:Proizvod[];
  constructor(private service:MarkaService) { }

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
