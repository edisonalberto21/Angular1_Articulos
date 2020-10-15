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
   //Estaba el push con los tres eemnetos
     this.ArticuloInyectado.leerNoticias().subscribe((articulosDesdeApi)=>{
       this.articulos = articulosDesdeApi;
     });
  }

  irAlDetalle(articulo:Articulo){
       this.ArticuloInyectado.articulo = articulo;
       this.Ruta.navigateByUrl('/articulodetalle')
  }
}
