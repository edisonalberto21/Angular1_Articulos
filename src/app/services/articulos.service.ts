import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  articulo:Articulo = new Articulo();
  ruta:string = 'https://jsonplaceholder.typicode.com/'
  constructor(public http:HttpClient) { }

  leerNoticias():Observable<Articulo[]>
  {
  return  this.http.get<Articulo[]>('https://jsonplaceholder.typicode.com/posts')
  }

  leerUsuario(userId:number):Observable <User>
  {
     return this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + userId)
  }

  leerTodosLosUsuarios(): Observable<User[]>
  {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/')
  }

  guardarArticulo(articulo:Articulo) :Observable<Articulo>{
    return this.http.post<Articulo>('https://jsonplaceholder.typicode.com/posts',articulo)
  }

  borrarArticulo(id:number):Observable<any>
  {
    return this.http.delete<any>('https://jsonplaceholder.typicode.com/posts/' + id)
  }
}
