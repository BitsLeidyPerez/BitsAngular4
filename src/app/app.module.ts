import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {AppService} from "./services/app.service";
import {AlianzaService} from "./services/alianza.service";
import {AlianzaComponent} from "./alianza/alianza.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: 'alianza', component: AlianzaComponent },

  { path: '',
    redirectTo: '/alianza',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AlianzaComponent,
    PageNotFoundComponent,



  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true } ),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [AppService, AlianzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
