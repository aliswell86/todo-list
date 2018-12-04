import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions';

const SET_INPUT = 'input/SET_INPUT';

export const setInput = createAction(SET_INPUT);

const initalState = Map({
  value: ''
});

export default handleActions({
  [SET_INPUT]: (state, action) => {
    return state.set('value', action.payload);
  }
}, initalState);
