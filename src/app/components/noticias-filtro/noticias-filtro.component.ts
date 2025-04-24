import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-noticias-filtro',
  standalone: false,
  templateUrl: './noticias-filtro.component.html',
  styleUrls: ['./noticias-filtro.component.scss']
})
export class NoticiasFiltroComponent implements OnInit, OnDestroy {
  textoFiltro: string = '';
  categoriasSelecionadas = {
    tecnologia: false,
    esportes: false,
    mundo: false
  };
  placeholderAnimado: string = '';
  isFocused: boolean = false;

  // Subject para o texto de busca
  private textoFiltroSubject = new Subject<string>();
  private textoFiltroSubscription!: Subscription;

  @Output() textoFiltroChange = new EventEmitter<string>();
  @Output() categoriasFiltroChange = new EventEmitter<string[]>();

  ngOnInit(): void {
    this.animarPlaceholder();
    this.setupTextoFiltroObservable();
  }

  ngOnDestroy(): void {
    if (this.textoFiltroSubscription) {
      this.textoFiltroSubscription.unsubscribe();
    }
  }

  setupTextoFiltroObservable(): void {
    this.textoFiltroSubscription = this.textoFiltroSubject.pipe(
      debounceTime(300), // Aguarda 300ms após o último evento de digitação
      distinctUntilChanged() // Só emite se o valor mudou
    ).subscribe(texto => {
      this.textoFiltro = texto;
      this.textoFiltroChange.emit(texto); // Emite para o componente pai
    });
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
    this.textoFiltroSubject.next(this.textoFiltro); // Envia o texto para o Subject
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