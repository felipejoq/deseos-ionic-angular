import { Lista } from './../models/lista.model';
import { Injectable } from "@angular/core";

@Injectable()
export class DeseosService {

    listas: Lista[] = [];

    constructor(){
        this.cargarStorage();
        // const lista1 = new Lista('Recolectar tonterías del infinito');
        // const lista2 = new Lista('Vencer mis miedos');
        // this.listas.push(lista1,lista2);
        // console.log(this.listas);

    }

    agregarLista(lista:Lista){
        this.listas.push(lista);
        this.guardarStorage();
    }

    borrarLista(lista: Lista){
        this.listas = this.listas.filter( listaData  => {
            return listaData.id !== lista.id;
        });
        this.guardarStorage();
    }

    guardarStorage(){
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    cargarStorage(){
        if(localStorage.getItem('data')){
            this.listas = JSON.parse(localStorage.getItem('data'));
        }else{
            this.listas = [];
        }
    }



}