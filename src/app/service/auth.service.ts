import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { UserLogin } from './../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(usuarioLogin: UserLogin) {
    throw new Error('Method not implemented.');
  }


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogdajujusobral.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://blogdajujusobral.herokuapp.com/usuarios/cadastrar', user)
  }

   logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }

}