import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
    CommonModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }