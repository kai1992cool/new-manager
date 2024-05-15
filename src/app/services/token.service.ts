import {  Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  isAuthentications: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { 
    const token = this.getToken();
    if(token){
      this.updateToken(true)
    }
  }

  setToken(token: string){
    this.updateToken(true);
    localStorage.setItem('user', token)
  }
  updateToken(status: boolean){
    this.isAuthentications.next(status)
  }
  getToken(): string | null{
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return localStorage.getItem('user');
    }

    return null
  }
}
