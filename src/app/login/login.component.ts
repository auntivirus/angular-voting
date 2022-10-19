import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['smit@joshi.com',[Validators.required, Validators.email]],
      password: ['smitjoshi',[Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void { };

  login() {
    console.log(this.form.value);
  };
}
