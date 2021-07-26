const INITIAL_STATE = [] // inicia com a lista vazia pois não foi adicionada nenhuma tarefa

// 1 criação do store 
const store = Redux.createStore(reducer);

// 2 criação do reducer 
const reducer = ( state = INITIAL_STATE ) => {
    switch ( action.type) {
        default:
            return state;
    }
}