import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyABSwMnE2N-wMLpC44hy2L1ATky2zzFe0M',
  authDomain: 'gavea-db.firebaseapp.com',
  projectId: 'gavea-db',
  storageBucket: 'gavea-db.appspot.com',
  messagingSenderId: '592773673334',
  appId: '1:592773673334:web:aa5a38c7412edceacb4a57',
  measurementId: 'G-YJ3JVKEW7Z',
};

const app = initializeApp(firebaseConfig);

export default app;
