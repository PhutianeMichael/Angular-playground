import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

constructor(private formBuilder: FormBuilder) {
  this.loginForm = formBuilder.group({
    email: ['test@angular-university.io', [Validators.required, Validators.email]],
    password: ['test', [Validators.required, Validators.minLength(4)]]
  });
}

  login() {
    const formValue = this.loginForm.value;
    console.log('Form Value', formValue);
  }
}
