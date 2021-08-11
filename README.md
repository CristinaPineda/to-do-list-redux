# Projeto TO-DO-LIST com *REDUX* e *JAVASCRIPT* 

### Passo a passo:
Para iniciar o projeto: 

* npm install redux
ou
* <script> tag script com o caminho da biblioteca (usei essa opção)

1. Criação do store usando a função Redux.createStore();

2. Criação do reducer, atribui-se ele no store, ele recebe uma callback com o estado e a action, o bloco switch e o default, nele as action serão escritas.

3. Criar as ações que vão inserir tarefas na lista, remover tarefas da lista e completar tarefas da lista.

4. Enviar action para adicionar tarefa para o reducer, uso de um 'escutador' no input para fazer isso
Para cada linha de tarefa ter um id unico e ser usado nas actions usei a biblioteca Lodash, para mais informações:

https://blog.betrybe.com/desenvolvimento-web/lodash-o-que-e-como-usar/
https://www.geeksforgeeks.org/lodash-_-uniqueid-method/

5. Action para 'check' das tarefas 

6. Remove tarefa da lista 

As funções checkTask e deleteTask (passadas ao redecer pelo dispatch()) serão realizadas quano forem chamadas pelas ações
do usuário na lista que será renderizada no próximo passo.

7. Subscribe que renderiza a função cada vez que uma action acontecer.

8. Para executar a aplicação no navegador uso a extensão Live Server no VsCode.

Biblioteca Redux:
https://redux.js.org/

*sobre o lodash com requisição ajax*
https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js
https://cursos.alura.com.br/forum/topico-virgulas-estranhas-aparecendo-apos-requisicao-ajax-21215
  
Link: https://cristinapineda.github.io/to-do-list-redux/
