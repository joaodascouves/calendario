import { createStore } from 'redux';

const reducer = (state = {
  showMenu: false,
  fixedMenu: true,

}, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU': {
      return {
        ...state,
        showMenu: !state.showMenu,
      };
    }
    case 'TOGGLE_MENU_FIX': {
      return {
        ...state,
        fixedMenu: action.value,
      };
    }
    default:
      return state;
  }
};

export default createStore(reducer);
