import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AppService {
private serverUrl:string="http://bitsangular.dev/Bits/";  /*Path de la url del sitio de drupal q envia el servicio Rest*/
private headers:Headers=new Headers(
    {
        'Accept':'aplication/json',
        'Content-Type':'aplication/hal+json'
    }

);
  constructor(private http:Http) { }

  getUrl(url:string):string{
    return this.serverUrl+url;
  }
  getOptions(options:RequestOptionsArgs):RequestOptionsArgs{
      let op = {headers:this.headers};
      if(options){
          return Object.assign(op, options);
      }
       return op.headers;
  }
    get(endpoint: string, options?: RequestOptionsArgs): Observable<Response>{
      let url=this.getUrl(endpoint);
      let op=this.getOptions(options);
      console.log("options:",op);
      return this.http.get(url,op);
    }
    post(endpoint: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
        let url=this.getUrl(endpoint);
        let op=this.getOptions(options);
        return this.http.post(url,body,op);
    }
    put(endpoint: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
        let url=this.getUrl(endpoint);
        let op=this.getOptions(options);
        return this.http.put(url,body,op);
    }
    delete(endpoint: string, options?: RequestOptionsArgs): Observable<Response>{
        let url=this.getUrl(endpoint);
        let op=this.getOptions(options);
        return this.http.delete(url,op);
    }


}
