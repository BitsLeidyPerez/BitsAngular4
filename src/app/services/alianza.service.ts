import { Injectable } from '@angular/core';
import {AppService} from "./app.service";
import {Observable} from "rxjs";

@Injectable()
export class AlianzaService {

  constructor(private appService:AppService) {

  }
   getAlianza():Observable<any>{
      /*alianzas?_format=json  servicio rest enviado por url*/
   return this.appService.get('alianzas?_format=json').map(res=>res.json()).catch(err=>Observable.throw(err));
   }
}
