import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';
import { Noticia } from './models/noticias.model';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <h1>Portal de Notícias 01</h1>
    <app-noticias-card [noticia]="noticiaMock"></app-noticias-card>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  noticiaMock: Noticia = {
    id: 1,
    titulo: 'Noticia Teste',
    resumo: 'Descrição da noticia teste',
    data: '2023-10-01',
    categoria: 'Tecnologia',
    imagem: 'https://via.placeholder.com/150'
  }
}