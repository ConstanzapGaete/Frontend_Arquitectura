import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.page.html',
  styleUrls: ['./authen.page.scss'],
})
export class AuthenPage implements OnInit {

  selectedUserType: string = 'cliente'; 

  formCliente = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  formProfesional = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit() {}

  segmentChanged(event: any) {
    this.selectedUserType = event.detail.value;
  }

  submit(userType: string) {
    const form = userType === 'cliente' ? this.formCliente : this.formProfesional;
    if (form.valid) {
      console.log(`Iniciando sesión como ${userType}`, form.value);
      
    }
  }
}
