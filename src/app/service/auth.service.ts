import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){ // ISSO É UMA FUNÇÃO!
    this.token = {headers: new HttpHeaders().set('Authorization', environment.token)}
  }



  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogdajujusobral.herokuapp.com/usuarios/logar', userLogin)




  }

  cadastrar(usuario: User): Observable<User>{
    return this.http.post<User>("https://blogdajujusobral.herokuapp.com/usuarios/cadastrar", usuario)


  }

  getByIdUsuario(id: number): Observable<User>{
    return this.http.get<User>(`https://blogdajujusobral.herokuapp.com/usuarios/${id}`, this.token)
  }


  logado(){
    let ok: boolean =  false;


    if(environment.token != ''){
      ok = true;
    }

    return ok;


  }
}