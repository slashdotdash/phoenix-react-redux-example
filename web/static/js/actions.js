import { configureChannel } from './channel';

let channel = configureChannel();

/*
 * action types
 */

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

function addTodoRequest(text) {
  return { type: ADD_TODO_REQUEST, text };
}

function addTodoSuccess(text) {
  return { type: ADD_TODO_SUCCESS, text };
}

function addTodoFailure(text, error) {
  return { type: ADD_TODO_FAILURE, text, error };
}

export function addTodo(text) {
  return dispatch => {
    dispatch(addTodoRequest(text));

    let payload = { 
      text: text
    };
    
    console.log('adding todo');

    // add todo, then dispatch success/failure
    channel.push('new:todo', payload)
      .receive('ok', response => {
        console.log('created TODO', response);
        // dispatch(addTodoSuccess(text));
      })
      .receive('error', error => {
        console.error(error);
        dispatch(addTodoFailure(text, error));
      });    
  };
}

export function subscribeTodos() {
  return dispatch => {
    channel.on('new:todo', msg => {
      console.log('new:todo', msg);
      dispatch(addTodoSuccess(msg.text));
    });
  };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}