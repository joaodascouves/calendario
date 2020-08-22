import { createBrowserHistory } from 'history';
import store from '../store';

const history = createBrowserHistory();
history.pushLater = (...args) => setImmediate(() => history.push(...args));

const isMobile = () => document.documentElement.clientWidth < 600;

function redirectTo(pathname) {
  history.replace(pathname);

  const mobile = isMobile();
  const fixMenu = pathname !== '/' && !mobile;
  store.dispatch({ type: 'TOGGLE_MENU_FIX', value: fixMenu });

  if (!fixMenu) {
    store.dispatch({ type: 'TOGGLE_MENU' });
  }
}

export {
  history,
  redirectTo,
};
