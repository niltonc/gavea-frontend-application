import AsyncStorage from '@react-native-async-storage/async-storage';
import createStore from 'zustand';
import { configurePersist } from 'zustand-persist';

interface IData {
  name: string;
  initialRouterName: string;
  setName: (name: string) => void;
  setInicialRouterName: (initialRouterName: string) => void;
}

const { persist } = configurePersist({
  storage: AsyncStorage,
  rootKey: 'root',
});

const useDataStore = createStore<IData>(
  persist({ key: 'Gavea-Lab' }, (set) => ({
    name: '',
    initialRouterName: 'Welcome',
    setName: (name) => set({ name }),
    setInicialRouterName: (initialRouterName) => set({ initialRouterName }),
  }))
);

export { useDataStore };
