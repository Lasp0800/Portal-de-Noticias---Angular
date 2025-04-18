import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Noticia } from '../models/noticias.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private readonly apiUrl = 'assets/noticias.json';

  constructor(private http: HttpClient) {}

  getAllNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl).pipe(
      catchError(() => throwError(() => new Error('Erro ao carregar notícias')))
    );
  }

  filterByText(texto: string): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl).pipe(
      map(noticias =>
        noticias.filter(noticia =>
          noticia.titulo.toLowerCase().includes(texto.toLowerCase()) ||
          noticia.resumo.toLowerCase().includes(texto.toLowerCase())
        )
      ),
      catchError(() => throwError(() => new Error('Erro ao filtrar notícias por texto')))
    );
  }

  filterByCategory(categoria: string): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl).pipe(
      map(noticias =>
        noticias.filter(noticia => noticia.categoria.toLowerCase() === categoria.toLowerCase())
      ),
      catchError(() => throwError(() => new Error('Erro ao filtrar notícias por categoria')))
    );
  }
}