import { ListaItem } from './../../models/lista-item.model';
import { Lista } from './../../models/lista.model';
import { DeseosService } from './../../services/deseos.service';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent {

    lista: Lista;
    nombreItem: string = '';

    constructor(public deseosService: DeseosService,
                private navParams: NavParams) {
        
        const titulo = this.navParams.get('titulo');

        if(this.navParams.get('lista')){
            this.lista = this.navParams.get('lista');
        }else{
            this.lista = new Lista(titulo);
            this.deseosService.agregarLista(this.lista);
        }

        

    }

    agregarItem(){
        if(this.nombreItem.length === 0){
            return;
        }

        const nuevoItem = new ListaItem(this.nombreItem);

        this.lista.items.push(nuevoItem);

        this.deseosService.guardarStorage();

        this.nombreItem = '';

        console.log(this.nombreItem);
    }

    actualizarTarea(item:ListaItem){
        item.completado = !item.completado;

        const pendientes:number = this.lista.items.filter(itemData => {
            return !itemData.completado;
        }).length;

        if(pendientes === 0){
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        }else{
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
        }

        this.deseosService.guardarStorage();
    }

    borrar(index:number){
        this.lista.items.splice(index,1);
        this.deseosService.guardarStorage();
    }
}
