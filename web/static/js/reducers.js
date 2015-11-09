import { combineReducers } from 'redux';
import { ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case ADD_TODO_SUCCESS:
      console.log('ADD_TODO_SUCCESS');
      return state;

    case ADD_TODO_FAILURE:
      console.error('ADD_TODO_FAILURE');
      return state;

    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;