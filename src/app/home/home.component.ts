import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';
import { ArticulosService } from '../services/articulos.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articulos:Array<Articulo> = new Array<Articulo>();
  constructor(public UsuarioInyectado: UsuarioService,public ArticuloInyectado:ArticulosService,public Ruta:Router) { }

  ngOnInit(): void {
    this.articulos.push({
      titulo:'Curso de Net Core',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fecha: new Date('04/25/2019'),
      usuario: this.UsuarioInyectado.usuario.nombre 
    },
    {
      titulo:'Curso de Angular',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fecha: new Date('04/25/2019'),
      usuario: this.UsuarioInyectado.usuario.nombre 
    },
    {
      titulo:'Curso de React',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fecha: new Date('04/25/2019'),
      usuario: this.UsuarioInyectado.usuario.nombre 
    })
  }

  irAlDetalle(articulo:Articulo){
       this.ArticuloInyectado.articulo = articulo;
       this.Ruta.navigateByUrl('/articulodetalle')
  }
}
