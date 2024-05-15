import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from '../../environments/enviroment'

type LoginResponse = {
  authToken: string
}

type Login = {
  email: string;
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = environment.API_URL

  constructor(private http: HttpClient, private tokenService:  TokenService) { }



  // login(body: Login): Observable<any>{
  //   return this.http.post<LoginResponse>(this.endpoint + '/auth/login', body, {}).pipe( map((res) => {
  //     if(res){
  //        this.tokenService.setToken(res.authToken)
  //     }
  //     return res
  //   }))
  // }

  login(body: any): Observable<any>{
    this.tokenService.setToken('123token')
    return of(true)
  }
}
