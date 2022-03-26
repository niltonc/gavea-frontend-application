import createStore from 'zustand';

import persist from './persist';

interface IData {
  name: string;
  initialRouterName: string;
  setName: (name: string) => void;
  setInicialRouterName: (initialRouterName: string) => void;
}

const useDataStore = createStore<IData>(
  persist({ key: 'Gavea-Lab' }, (set) => ({
    name: '',
    initialRouterName: 'Welcome',
    setName: (name) => set({ name }),
    setInicialRouterName: (initialRouterName: string) =>
      set({ initialRouterName }),
  }))
);

export { useDataStore };
