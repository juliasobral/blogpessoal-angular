import { AuthService } from './../service/auth.service';
import { UserLogin } from './../model/UserLogin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UserLogin = new UserLogin()

  foto: string = environment.foto
  nome: string = environment.nome

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  logar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UserLogin) => {
     this.usuarioLogin=resp 
      
      environment.foto = this.usuarioLogin.foto
      environment.tipo = this.usuarioLogin.tipo
      environment.nome = this.usuarioLogin.nome
      environment.usuario = this.usuarioLogin.usuario
      environment.token = this.usuarioLogin.token
      environment.id = this.usuarioLogin.id

      this.router.navigate(['/inicio'])
    }, (erro: { status: number; }) => {
      if (erro.status == 401) {
        alert("Usuário e/ou senha inválidos!")
      }
    }
    )
  }

}