import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Noticia } from '../models/noticias.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private readonly apiUrl = 'assets/noticias.json';

  constructor(private http: HttpClient) {}

  getAllNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl);
  }

  filterByText(texto: string): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl).pipe(
      map(noticias =>
        noticias.filter(noticia =>
          noticia.titulo.toLowerCase().includes(texto.toLowerCase()) ||
          noticia.resumo.toLowerCase().includes(texto.toLowerCase())
        )
      )
    );
  }

  filterByCategory(categoria: string): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl).pipe(
      map(noticias =>
        noticias.filter(noticia => noticia.categoria.toLowerCase() === categoria.toLowerCase())
      )
    );
  }
}