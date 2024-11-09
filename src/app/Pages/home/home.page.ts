import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

 
  necesitasAyuda() {
    console.log('Botón de ayuda presionado');

  }


  irPerfil() {
    console.log('Redirigiendo a perfil');
    //this.navCtrl.navigateForward('/perfil');
  }


  cerrarSesion() {
    console.log('Cerrando sesión');
    this.navCtrl.navigateRoot('/authen');
  }


  verServicios(categoria: string) {
    console.log(`Mostrando servicios de la categoría: ${categoria}`);
    
  }
  buscarServicio() {
    console.log('Botón de buscar presionado');
    
  }
}
