import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { VrstaProizvoda } from 'src/app/vrsta-proizvoda';

@Component({
  selector: 'app-vrsta-proizvoda-list',
  templateUrl: './vrsta-proizvoda-list.component.html',
  styleUrls: ['./vrsta-proizvoda-list.component.css']
})
export class VrstaProizvodaListComponent implements OnInit {
  vrsteProizvoda:VrstaProizvoda[];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
   this.service.get("VrstaProizvoda").subscribe((data:VrstaProizvoda[])=>{
   this.vrsteProizvoda=data;
   });
  }
  obrisiVrstu(vrstaId:number){
    console.log(vrstaId);
    this.service.delete(vrstaId,"VrstaProizvoda").subscribe(data=>{
      this.vrsteProizvoda=this.vrsteProizvoda.filter(f=>f.vrstaProizvodaId!==vrstaId);
    });
  }
}
