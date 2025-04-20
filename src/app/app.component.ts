import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './services/noticias.service';
import { Noticia } from './models/noticias.model';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <h1>Portal de Notícias Angular</h1>
    <app-noticias-filtro 
      (textoFiltroChange)="onTextoFiltroChange($event)"
      (categoriasFiltroChange)="onCategoriasFiltroChange($event)">
    </app-noticias-filtro>
    <app-noticias-lista 
      [noticias]="noticias"
      [textoFiltro]="textoFiltro"
      [categoriasFiltro]="categoriasFiltro">
    </app-noticias-lista>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  noticias: Noticia[] = [];
  textoFiltro: string = '';
  categoriasFiltro: string[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.noticiasService.getAllNoticias().subscribe({
      next: (noticias) => {
        this.noticias = noticias;
        console.log('Notícias carregadas:', noticias);
      },
      error: (err) => {
        console.error('Erro no AppComponent:', err);
      }
    });
  }

  onTextoFiltroChange(texto: string): void {
    this.textoFiltro = texto;
  }

  onCategoriasFiltroChange(categorias: string[]): void {
    this.categoriasFiltro = categorias;
  }
}