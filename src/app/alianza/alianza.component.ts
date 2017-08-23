import { Component, OnInit } from '@angular/core';
import {AlianzaService} from "../services/alianza.service";


@Component({
  selector: 'app-alianza',
  templateUrl: './alianza.component.html',
  styleUrls: ['./alianza.component.css']
})
export class AlianzaComponent implements OnInit {
     alianzas=[];
  constructor(private alianzaService:AlianzaService) { }

  ngOnInit() {
 this.alianzaService.getAlianza().subscribe(res=>
     {
   this.alianzas=res;
   console.log("resive",res);
   },
     err=>
     {
       console.log(err);
     }
   )
  }

}
