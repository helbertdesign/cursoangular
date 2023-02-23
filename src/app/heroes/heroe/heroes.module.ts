import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from '../listado/listado.component';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from '../../contador/contador/contador.component';


@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent,
        
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule,
    ]
})
export class HeoresModule{

}