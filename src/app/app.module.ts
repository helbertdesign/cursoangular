import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeoresModule } from './heroes/heroe/heroes.module';
import { ContadorModule } from './contador/contadorModule';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeoresModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
