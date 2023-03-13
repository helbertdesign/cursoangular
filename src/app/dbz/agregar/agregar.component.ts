import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
//cuando quiero mandar cosas del padre al hijo
@Input() nuevo:Personaje ={
    nombre:'',
    poder:0
  }
  //sirve para emitir eventos
// @Output() onnuevopersonaje:EventEmitter<Personaje>=new EventEmitter();

constructor(private dbzservice:DbzService ) {
  
  
}
  agregar(){
    //event.preventDefault(); esto preve el comportamiento por defecto que tiene el submit de un formulario
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    
    this.dbzservice.agregarpersonaje(this.nuevo);
    // this.onnuevopersonaje.emit(this.nuevo);
    console.log(this.nuevo);
    
   
    this.nuevo ={
      nombre:'',
      poder:0
    }
    
  }
}
