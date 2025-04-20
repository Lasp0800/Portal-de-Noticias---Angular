import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticias.model';

@Component({
  selector: 'app-noticias-lista',
  standalone: false,
  templateUrl: './noticias-lista.component.html',
  styleUrls: ['./noticias-lista.component.scss']
})
export class NoticiasListaComponent implements OnInit {
  @Input() noticias: Noticia[] = [];
  @Input() textoFiltro: string = '';
  @Input() categoriasFiltro: string[] = [];

  noticiasFiltradas: Noticia[] = [];

  ngOnInit(): void {
    this.filtrarNoticias();
  }

  ngOnChanges(): void {
    this.filtrarNoticias();
  }

  private filtrarNoticias(): void {
    let noticias = this.noticias;

    // Filtro por texto
    if (this.textoFiltro) {
      const textoLower = this.textoFiltro.toLowerCase();
      noticias = noticias.filter(noticia =>
        noticia.titulo.toLowerCase().includes(textoLower) ||
        noticia.resumo.toLowerCase().includes(textoLower)
      );
    }

    // Filtro por categorias
    if (this.categoriasFiltro.length > 0) {
      noticias = noticias.filter(noticia =>
        this.categoriasFiltro.includes(noticia.categoria.toLowerCase())
      );
    }

    this.noticiasFiltradas = noticias;
  }
}