const INITIAL_STATE = [] // inicia com a lista vazia pois não foi adicionada nenhuma tarefa

const ADD_TASK = 'ADD_TASK';
const CHECK_TASK = 'CHECK_TASK'; 
const DELETE_TASK = 'DELETE_TASK';

// 1 criação do store 
// eslint-disable-next-line no-undef
const store = Redux.createStore(reducer);

// 2 criação do reducer 
// 3 açoes da lista
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

// 4 pega o input para a criação da tarefa
document.getElementById('form-task').addEventListener('submit', e => {e.preventDefault()

  const { value } = document.getElementById('input-task');
  if (value !== '') {
    store.dispatch({ // dispatch envia a action para o reducer
      type: ADD_TASK,
      payload: {
        value,
        // eslint-disable-next-line no-undef
        id: _.uniqueId(),
        completed: false,
      }
    });
  }
  // mantem o input limpo
  document.getElementById('input-task').value = '';
})

