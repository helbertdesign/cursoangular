import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
 
})
export class PersonajesComponent {
  //en el parentesis defino como quiero que se llame externamente
  //esto me sirve para llamar a componentes desde otros componenetes
  
  // @Input()personajes:Personaje[]=[];

  get personajes(){
    return this.dbzservice.personajes;
  }

  constructor(private dbzservice:DbzService ) {
    
    
  }
}
