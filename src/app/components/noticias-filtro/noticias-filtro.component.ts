import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias-filtro',
  standalone: false,
  templateUrl: './noticias-filtro.component.html',
  styleUrls: ['./noticias-filtro.component.scss']
})
export class NoticiasFiltroComponent implements OnInit {
  textoFiltro: string = '';
  categoriasSelecionadas = {
    tecnologia: false,
    esportes: false,
    mundo: false
  };
  placeholderAnimado: string = '';
  isFocused: boolean = false;

  @Output() textoFiltroChange = new EventEmitter<string>();
  @Output() categoriasFiltroChange = new EventEmitter<string[]>();

  ngOnInit(): void {
    this.animarPlaceholder();
  }

  animarPlaceholder(): void {
    const texto = 'Buscar por título ou resumo...';
    let i = 0;
    const intervalo = setInterval(() => {
      if (i < texto.length) {
        this.placeholderAnimado = texto.substring(0, i + 1);
        i++;
      } else {
        clearInterval(intervalo);
        setTimeout(() => {
          this.placeholderAnimado = '';
          this.animarPlaceholder();
        }, 1000); // Pausa antes de reiniciar
      }
    }, 100); // Velocidade da digitação (100ms por letra)
  }

  onTextoFiltroChange(): void {
    this.textoFiltroChange.emit(this.textoFiltro);
  }

  onCategoriaChange(): void {
    const categorias = Object.keys(this.categoriasSelecionadas)
      .filter(key => this.categoriasSelecionadas[key as keyof typeof this.categoriasSelecionadas]);
    this.categoriasFiltroChange.emit(categorias);
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }
}