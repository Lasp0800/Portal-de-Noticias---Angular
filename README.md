# Portal de Notícias
Bem-vindo ao Portal de Notícias, um projeto Angular que exibe notícias com filtros dinâmicos e animações de entrada. O projeto foi desenvolvido com NgModules e utiliza SCSS para estilização, Intersection Observer para animações, e RxJS para gerenciar eventos de filtro de forma reativa.



https://github.com/user-attachments/assets/89bff2bd-b703-46f8-9f39-f61dd2812ef5



## Carrossel de Notícias: Exibe 2 cards por linha, com navegação via botões e dots.
* Filtros Dinâmicos: Campo de busca por texto e checkboxes para filtrar por categoria (Tecnologia, Esportes, Mundo).
* Animações de Entrada: Cards entram dinamicamente ao carregar a página e ao serem filtrados.
* Ordenação por Data: Notícias exibidas com as mais recentes primeiro.
* Acessibilidade: ARIA labels, navegação por teclado, e foco visível em elementos interativos.
* Responsividade: Layout ajustado para diferentes tamanhos de tela.

Pré-requisitos
```bash
Node.js (versão 14.x ou superior2
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

* Observables com EventEmitter: No NoticiasFiltroComponent, usamos @Output() com EventEmitter para emitir eventos quando o texto de busca ou as categorias selecionadas mudam:
```bash
@Output() textoFiltroChange = new EventEmitter<string>();
@Output() categoriasFiltroChange = new EventEmitter<string[]>();

```

Esses eventos são emitidos no (ngModelChange) e capturados pelo componente pai (NoticiasListaComponent).

* Reatividade no Componente Pai: O NoticiasListaComponent reage a esses eventos através do ngOnChanges(), que chama filtrarNoticias() para atualizar a lista de notícias exibidas. Isso elimina a necessidade de manipular o DOM manualmente e mantém o estado reativo.

### Operadores RxJS:

O projeto usa operadores RxJS diretamente (como debounceTime ou distinctUntilChanged) para otimizar o filtro de texto. Por exemplo:

```bash
this.textoFiltroChange.pipe(
  debounceTime(300),
  distinctUntilChanged()
).subscribe(texto => {
  this.textoFiltro = texto;
  this.filtrarNoticias();
});

```

Isso reduz chamadas desnecessárias ao digitar rapidamente.


# Dificuldades Encontradas e Soluções

### Utilização de NgModules no Angular v.19.7

* Dificuldade: Como versões do Angular 17+ se tonaram o uso do _standalone_ padrão para os projetos criados, o NgModule não funcionava dentro dessas novas versões.
* Solução: Para a prática do uso de NgModule para futuros projetos da empresa, pesquisei sobre como o _standalone_ funcionava e como seu tipo é _boolean_ apenas fiz trocar seu resultado de _true_ para _false_, assim forçando o seu desuso dentro de cada componente para a utilização de NgModule.

### Alinhamento dos Filtros na Mesma Linha

* Dificuldade: Inicialmente, o campo de busca e os checkboxes estavam em blocos separados, dificultando o layout desejado (|buscar...| *tecnologia *esportes *mundo).
* Solução: Usei display: flex no .filter-row para alinhar os elementos na mesma linha, com gap para espaçamento. Ajustei a responsividade com media queries para empilhar os elementos em telas menores.


### Exibição de JSON Mock 

* Dificuldade: O Mock fornecido não estava sendo exibido no build do projeto, alegando falha de comunicação com a pasta src/assets.
* Solução: Por padrão o Angular faz a conexão da pasta assets dentro da pasta src, como havia criado a pasta assets dentro de app/ não estava sendo localizado o conteúdo do JSON Mock. Fiz apenas mover a pasta para fora de app, ficando assim a comunicação correta padrão "src/assets".


### Manutenção de Estilos

* Dificuldade: Estilos repetidos no SCSS (ex.: tamanhos de fonte, cores) dificultavam ajustes.
* Solução: Centralizei os valores em variáveis SCSS (ex.: $font-size-md, $primary-color) e usei @extend para reutilizar classes utilitárias (ex.: .truncate-2 para truncamento de texto).


### Acessibilidade

* Dificuldade: Garantir que o carrossel e os filtros fossem acessíveis via teclado e leitores de tela.
* Solução: Adicionei ARIA labels (ex.: aria-label nos botões do carrossel), tabindex nos dots, e outline para foco visível. Também associei labels aos inputs com for e id.

Contato
Se precisar de ajuda ou quiser contribuir, entre em contato pelo [sousaluiz854@gmail.com] ou abra uma issue no repositório.

Desenvolvido com 💻 e ☕ por [Luiz_Augusto]
