import { AsyncStorage } from 'react-native';

import { configurePersist } from 'zustand-persist';

const { persist, purge } = configurePersist({
  storage: AsyncStorage,
});
export default persist;
export { purge };
