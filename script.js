const INITIAL_STATE = [] // inicia com a lista vazia pois não foi adicionada nenhuma tarefa

const ADD_TASK = 'ADD_TASK';
const CHECK_TASK = 'CHECK_TASK'; 
const DELETE_TASK = 'DELETE_TASK';

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

// 1 criação do store 
// eslint-disable-next-line no-undef
const store = Redux.createStore(reducer);

// 4 pega o input para a criação da tarefa
document.querySelector('#form-task').addEventListener('submit', e => {
  e.preventDefault()

  const { value } = document.querySelector('#input-task');
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
  document.querySelector('#input-task').value = '';
})

// 5 dá um check nas tarefas
// eslint-disable-next-line no-unused-vars
const checkTask = id => {
  const item = document.querySelector(`input[key="${id}"]`);
  store.dispatch({
    type: CHECK_TASK,
    payload: {
      id: id.toString(),
      completed: item.checked
    },
  });
};

// 6 deleta uma tarefa 
// eslint-disable-next-line no-unused-vars
const deleteTask = id => {
  store.dispatch({ type: DELETE_TASK, payload: id.toString() });
};

// 7 essa função é chamada no subscribe apos o reducer concluir
const tasks = document.querySelector('#task-container'); // div que terá a lista de tarefas
const listTask = () => {
  tasks.innerHTML = store.getState().map(task => // getState() pega o valor atual do state
  `
    <div class="task-container">
      <input
        ${task.completed && `checked`}
        type="checkbox"
        key="${task.id}"
        onchange="checkTask(${task.id})"
      >
        <label ${task.completed && `style="text-decoration: line-through"`}>${task.value}</label>
      </input>
      <button id="remove" class="buttonRemove" onclick="deleteTask(${task.id})">remove</button>
    </div>
    `
  ).join('')
};

store.subscribe(listTask); // subscribe executa a função apos o reducer