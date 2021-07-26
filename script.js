const INITIAL_STATE = [] // inicia com a lista vazia pois não foi adicionada nenhuma tarefa

const ADD_TASK = 'ADD_TASK';
const CHECK_TASK = 'CHECK_TASK'; 
const DELETE_TASK = 'DELETE_TASK';

// 1 criação do store 
const store = Redux.createStore(reducer);

// 2 criação do reducer 
const reducer = ( state = INITIAL_STATE, action ) => {
  switch ( action.type) { // type identifica para o reducer saber o  que fazer
    case ADD_TASK:
      return [
        ...state,
        action.payload // payload são os dados que serão colocados no store
      ];
    case CHECK_TASK:
      return state.map(task => {
          if (task.id === action.payload.id) {
            task.completed = action.payload.completed 
          }           
          return task
            })
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
}