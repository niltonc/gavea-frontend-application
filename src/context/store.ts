import createStore from 'zustand';

import persist from './persist';

interface IData {
  name: string;
  initialRouterName: string;
  setName: (name: string) => void;
  setInicialRouterName: (initialRouterName: string) => void;
}

const useDataStore = createStore<IData>(
  persist(
    { key: 'Gavea-Lab', allowlist: ['name', 'initialRouterName'] },
    (set) => ({
      name: '',
      isLogged: false,
      initialRouterName: 'Welcome',
      setName: (name) => set({ name }),
      setInicialRouterName: (initialRouterName) => set({ initialRouterName }),
    })
  )
);

export { useDataStore };
