import type { Middleware } from 'redux';

const localStorageMiddleware: Middleware = (store) => {
  return (next) => (action) => {
    const result = next(action);
    if (typeof window !== 'undefined') {
      const state = store.getState();
      localStorage.setItem(
        'reduxState',
        JSON.stringify({
          userSettings: state.userSettings
        })
      );
    }
    return result;
  };
};

export default localStorageMiddleware;
