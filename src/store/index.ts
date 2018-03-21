import { store } from 'react-easy-state';

export interface IAppStore {
  time ?: string;
}

let AppStore: IAppStore = store(
  {
    time : new Date().toLocaleTimeString()
  }
);

export { AppStore };