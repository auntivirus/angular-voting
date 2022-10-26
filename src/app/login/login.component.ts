import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['smitgirish@gmail.com',[Validators.required, Validators.email]],
      password: ['I L G B 3 T',[Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void { };

  async login() {
    console.log(this.form.value);
    const res = await this.auth.login(this.form.value);
    console.log(res);
    if(res.error)
    {
      //
    }
    else
    {
      //
      this.router.navigateByUrl('/app', {replaceUrl: true});
    }
    
  };

  async register() {
    console.log(this.form.value);
    const res = await this.auth.createAccount(this.form.value);
    // console.log(res);
    console.log(res.error);
    if(res.error)
    {
      //
    }
    else
    {
      console.log(res);
      this.router.navigateByUrl('/app', {replaceUrl: true});
    }
  }
}
