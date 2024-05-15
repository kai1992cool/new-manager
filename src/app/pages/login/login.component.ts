import { Component, signal } from '@angular/core';

import {MatButtonModule} from '@angular/material/button'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isUser = signal(false)

  constructor(private auth: AuthService, private router: Router, private tokenService: TokenService){
    console.log('aqui')
    const userToken = this.tokenService.getToken()
    if(userToken){
      this.isUser.set(true)
    }
  }

  login(){
    this.auth.login({}).subscribe({
      next: (res) => {
        this.router.navigate(['dashboard']);
      },
      error: (v) => alert('error from api')
    })
  }

 
}
