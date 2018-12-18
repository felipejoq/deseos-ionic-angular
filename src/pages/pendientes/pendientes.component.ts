import { AgregarComponent } from './../agregar/agregar.component';
import { NavController, AlertController } from 'ionic-angular';
import { Lista } from './../../models/lista.model';
import { DeseosService } from './../../services/deseos.service';
import { Component } from '@angular/core';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {
    constructor(public deseosService: DeseosService,
                private navCtrl: NavController,
                private alertCtrl: AlertController)
    {

    }

    agregarLista(){
        //this.navCtrl.push(AgregarComponent);

        const alerta = this.alertCtrl.create({
            title: 'Nueva lista',
            message: 'Nombre de la nueva lista que desea',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons:[{
                text: 'Cancelar'
            },{
                text: 'Agregar',
                handler: data => {
                    if(data.titulo.length === 0){
                        return;
                    }
                    this.navCtrl.push(AgregarComponent, {
                        titulo: data.titulo
                    });
                }
            }]
        });

        alerta.present();

    }
}
