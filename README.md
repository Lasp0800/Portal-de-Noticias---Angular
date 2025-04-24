# Portal de Notícias
Bem-vindo ao Portal de Notícias, um projeto Angular que exibe notícias em um carrossel interativo, com filtros dinâmicos e animações de entrada. O projeto foi desenvolvido com NgModules e utiliza SCSS para estilização, Intersection Observer para animações, e RxJS para gerenciar eventos de filtro de forma reativa.
Funcionalidades

## Carrossel de Notícias: Exibe 3 cards por linha, com navegação via botões e dots.
Filtros Dinâmicos: Campo de busca por texto e checkboxes para filtrar por categoria (Tecnologia, Esportes, Mundo).
Animações de Entrada: Cards entram dinamicamente da esquerda ou direita ao rolar a página.
Ordenação por Data: Notícias exibidas com as mais recentes primeiro.
Acessibilidade: ARIA labels, navegação por teclado, e foco visível em elementos interativos.
Responsividade: Layout ajustado para diferentes tamanhos de tela.

Pré-requisitos
```bash
Node.js (versão 14.x ou superior)
Angular CLI (versão 12.x ou superior)
Git (para clonar o repositório)
```
## Instruções para Instalar e Executar o Projeto

```bash
Clone o Repositório
git clone <URL_DO_REPOSITORIO>
cd portal-de-noticias
```

## Instale as Dependências
Certifique-se de ter o Node.js instalado. Depois, instale as dependências com:

```bash
npm install
```
## Execute o Projeto
Inicie o servidor de desenvolvimento Angular:
```bash
ng serve
```

Abra o navegador em http://localhost:4200 para visualizar o portal.

## Build de Produção (Opcional)
Para gerar uma build otimizada para deploy:

```bash
ng build --prod
```

## Uso de Observables e Operadores RxJS
No projeto, utilizamos Observables e RxJS para gerenciar os eventos de filtro de forma reativa, garantindo que a UI seja atualizada automaticamente quando o usuário interage com o campo de busca ou os checkboxes. Aqui está uma explicação simples:

### Observables com EventEmitter: No NoticiasFiltroComponent, usamos @Output() com EventEmitter para emitir eventos quando o texto de busca ou as categorias selecionadas mudam:
```bash
@Output() textoFiltroChange = new EventEmitter<string>();
@Output() categoriasFiltroChange = new EventEmitter<string[]>();

```

Esses eventos são emitidos no (ngModelChange) e capturados pelo componente pai (NoticiasListaComponent).

Reatividade no Componente Pai: O NoticiasListaComponent reage a esses eventos através do ngOnChanges(), que chama filtrarNoticias() para atualizar a lista de notícias exibidas. Isso elimina a necessidade de manipular o DOM manualmente e mantém o estado reativo.

### Operadores RxJS (Potencial de Melhoria): Embora o projeto não use operadores RxJS diretamente (como debounceTime ou distinctUntilChanged), poderíamos adicioná-los para otimizar o filtro de texto. Por exemplo:

```bash
this.textoFiltroChange.pipe(
  debounceTime(300),
  distinctUntilChanged()
).subscribe(texto => {
  this.textoFiltro = texto;
  this.filtrarNoticias();
});

```

Isso reduziria chamadas desnecessárias ao digitar rapidamente.


## Dificuldades Encontradas e Soluções

### Alinhamento dos Filtros na Mesma Linha

* Dificuldade: Inicialmente, o campo de busca e os checkboxes estavam em blocos separados, dificultando o layout desejado (|buscar...| *tecnologia *esportes *mundo).
* Solução: Usei display: flex no .filter-row para alinhar os elementos na mesma linha, com gap para espaçamento. Ajustei a responsividade com media queries para empilhar os elementos em telas menores.


### Animações Dinâmicas nos Cards

* Dificuldade: Fazer os cards entrarem da esquerda ou direita ao rolar a página, apenas quando visíveis, sem disparar animações repetidas.
* Solução: Implementei o Intersection Observer API para detectar quando os cards entram na viewport, adicionando a classe visible apenas uma vez. Usei SCSS para definir animações (slideInFromLeft e slideInFromRight) e combinei com a animação existente slideUp.


### Manutenção de Estilos

* Dificuldade: Estilos repetidos no SCSS (ex.: tamanhos de fonte, cores) dificultavam ajustes.
* Solução: Centralizei os valores em variáveis SCSS (ex.: $font-size-md, $primary-color) e usei @extend para reutilizar classes utilitárias (ex.: .truncate-2 para truncamento de texto).


### Acessibilidade

* Dificuldade: Garantir que o carrossel e os filtros fossem acessíveis via teclado e leitores de tela.
* Solução: Adicionei ARIA labels (ex.: aria-label nos botões do carrossel), tabindex nos dots, e outline para foco visível. Também associei labels aos inputs com for e id.

Contato
Se precisar de ajuda ou quiser contribuir, entre em contato pelo [sousaluiz854@gmail.com] ou abra uma issue no repositório.

Desenvolvido com 💻 e ☕ por [Luiz_Augusto]
