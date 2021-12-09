import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  foto: string = environment.foto
  nome: string = environment.nome

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      alert("sua sessão expirou. faça o login novamente!")
      this.router.navigate(['/login'])
    }
  }

}