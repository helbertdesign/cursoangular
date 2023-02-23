import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "src/app/heroes/heroe/heroe.component";
import { ListadoComponent } from "src/app/heroes/listado/listado.component";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        ContadorComponent,
    ],
    exports:[
//lo exporto para poder usarlo afuera de este modulo 
        ContadorComponent,
    ],
    imports:[
        CommonModule,
    ]
})

export class ContadorModule{

}