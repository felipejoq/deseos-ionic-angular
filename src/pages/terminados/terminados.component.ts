import { DeseosService } from './../../services/deseos.service';
import { Component } from '@angular/core';
import { Lista } from '../../models/lista.model';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosComponent {
    constructor(public deseosService: DeseosService) {
        
    }

    listaSeleccionada(lista: Lista){
        console.log(lista);
    }
}
