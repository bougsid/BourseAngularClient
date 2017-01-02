import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {LoginService} from "./login.service";
import { Router} from '@angular/router';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public token: string;

  constructor(fb: FormBuilder, private loginService: LoginService, private router: Router) {
    console.log('login component');

    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values): void {
    // this.submitted = true;
    // console.log(values.email);
    if (this.form.valid) {
      this.loginService.login(values.email, values.password).subscribe(res => {
        this.token = res.token;
        console.log(this.token);
        if (this.token) {
          localStorage.setItem('id_token',this.token);

          this.router.navigate(['./pages/societe']);
        }
      });
      // your code goes here
      // console.log(values);
    }
  }
}
