import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './services/noticias.service';
import { Noticia } from './models/noticias.model';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <h1>Portal de Notícias</h1>
    <app-noticias-card [noticia]="primeiraNoticia"></app-noticias-card>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  primeiraNoticia: Noticia | undefined;

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.noticiasService.getAllNoticias().subscribe({
      next: (noticias) => {
        this.primeiraNoticia = noticias[0];
        console.log('Notícias carregadas:', noticias);
      },
      error: (err) => {
        console.error('Erro no AppComponent:', err);
      }
    });
  }
}