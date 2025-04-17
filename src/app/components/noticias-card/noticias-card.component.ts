import { Component, Input } from '@angular/core';
import { Noticia } from '../../models/noticias.model';

@Component({
  selector: 'app-noticias-card',
  standalone: false,
  templateUrl: './noticias-card.component.html',
  styleUrls: ['./noticias-card.component.scss']
})
export class NoticiasCardComponent {
  @Input() noticia: Noticia | undefined;
}