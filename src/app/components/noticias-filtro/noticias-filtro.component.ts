import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-noticias-filtro',
  standalone: false,
  templateUrl: './noticias-filtro.component.html',
  styleUrls: ['./noticias-filtro.component.scss']
})
export class NoticiasFiltroComponent {
  textoFiltro: string = '';
  categoriasSelecionadas = {
    tecnologia: false,
    esportes: false,
    mundo: false
  };

  @Output() textoFiltroChange = new EventEmitter<string>();
  @Output() categoriasFiltroChange = new EventEmitter<string[]>();

  onTextoFiltroChange(): void {
    this.textoFiltroChange.emit(this.textoFiltro);
  }

  onCategoriaChange(): void {
    const categorias = Object.keys(this.categoriasSelecionadas)
      .filter(key => this.categoriasSelecionadas[key as keyof typeof this.categoriasSelecionadas]);
    this.categoriasFiltroChange.emit(categorias);
  }
}