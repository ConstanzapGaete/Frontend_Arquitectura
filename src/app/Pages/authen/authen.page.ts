import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.page.html',
  styleUrls: ['./authen.page.scss'],
})
export class AuthenPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])

  })

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.form.value);
  }

}
