import { navigate } from 'svelte-routing';
import firebase from 'firebase/app';
import 'firebase/auth';

enum AuthState {
  unknown,
  signedOff,
  signedIn,
}

let isAuthenticated = AuthState.unknown;

export default {
  init(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyDCGgtf_cZOXgDUfKNlfhfKhcyhxcYKZrQ',
      authDomain: 'svelte-o.firebaseapp.com',
      projectId: 'svelte-o',
      storageBucket: 'svelte-o.appspot.com',
      messagingSenderId: '625881611623',
      appId: '1:625881611623:web:08f8ad3ea9b2f2e1a3c3c2',
      measurementId: 'G-3WM71GPL8X',
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      const firstTimer = isAuthenticated === AuthState.unknown;
      const state = user ? user.emailVerified : false;
      isAuthenticated = state ? AuthState.signedIn : AuthState.signedOff;

      if (firstTimer) {
        if (isAuthenticated === AuthState.signedIn) {
          navigate('/home');
        } else {
          navigate('/login');
        }
      }
    });
  },
  signUp(name: string, email: string, password: string): Promise<boolean> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential: firebase.auth.UserCredential) => {
        await userCredential.user.updateProfile({ displayName: name });
        return Promise.resolve(userCredential);
      })
      .then(async (userCredential: firebase.auth.UserCredential) => {
        await userCredential.user.sendEmailVerification();
        return true;
      })
      .catch(error => {
        alert(error.message);
        return false;
      });
  },
  login(email: string, password: string) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential: firebase.auth.UserCredential) => {
        return userCredential.user.emailVerified;
      })
      .catch(() => false);
  },
  authenticated(): AuthState {
    return isAuthenticated;
  },
};
