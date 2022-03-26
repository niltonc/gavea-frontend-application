/* eslint-disable */
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import app from './firebase';

const auth = getAuth(app);

export async function signin(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function signup(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export function signout() {
  return signOut(auth);
}

export async function checkAuth(navigation: any){
  return await onAuthStateChanged(auth, user => {
    if (user) {} else {
      navigation.navigate('SignIn')
    }
  })
};
