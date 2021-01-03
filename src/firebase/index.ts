import firebase from 'firebase/app';
import 'firebase/auth';

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
  authenticated(): boolean {
    const currentUser = firebase.auth().currentUser;
    return currentUser?.emailVerified ? true : false;
  },
};
