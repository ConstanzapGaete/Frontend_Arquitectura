import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jardineria',
  templateUrl: './jardineria.page.html',
  styleUrls: ['./jardineria.page.scss'],
})
export class JardineriaPage implements OnInit {
  profesionales = [
    {
      name: 'Pedro Pascal',
      rating: 4.9,
      experience: '10 años de experiencia',
      profilePicture: '/assets/img/H.png',
      description: 'Especialista en diseño y mantenimiento de jardines.'
    },
    {
      name: 'Maria Juana',
      rating: 4.8,
      experience: '8 años de experiencia',
      profilePicture: '/assets/img/M.png',
      description: 'Experta en paisajismo y cuidado de plantas ornamentales.'
    },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  irHome() {
    this.navCtrl.navigateRoot('/home');
  }

  irPerfil() {
    this.navCtrl.navigateForward('/perfil');
  }

  cerrarSesion() {
    this.navCtrl.navigateRoot('/authen');
  }

  contactar(nombre: string) {
    console.log(`Contactando a ${nombre}`);
  }
}
