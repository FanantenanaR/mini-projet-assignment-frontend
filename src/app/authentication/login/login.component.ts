import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GenericService} from "../../services/basic/generic.service";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../shared/auth.service";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    FormsModule,
    MatButtonToggleModule
  ],
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  formData: any = {
    login: 'fanantenanaran@gmail.com',
    password: 'password24',
    accountChoice: "Student"
  };

  login() {
    this.authService.logIn(this.formData.login, this.formData.password, this.formData.accountChoice)
      .subscribe(result => {
        console.log("login result", result);
        this.authService.setLoggedIn(result.data, this.formData.accountChoice);
        this.router.navigateByUrl('/home');
      });
    // const result = await this.apiService.post('auth/login', this.formData);
    // localStorage.setItem('userInfo', JSON.stringify(result.data));
    // await this.router.navigateByUrl('/home/started');
  }
}

