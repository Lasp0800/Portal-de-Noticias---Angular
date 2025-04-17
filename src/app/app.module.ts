import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NoticiasCardComponent } from './components/noticias-card/noticias-card.component';
import { NoticiasListaComponent } from './components/noticias-lista/noticias-lista.component';
import { NoticiasFiltroComponent } from './components/noticias-filtro/noticias-filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasCardComponent,
    NoticiasListaComponent,
    NoticiasFiltroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }