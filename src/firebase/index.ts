import { navigate } from 'svelte-routing';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import convert from '../utils/convert';

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
      .then(async (userCredential: firebase.auth.UserCredential) => {
        await firebase
          .database()
          .ref(`/users/${userCredential.user.uid}`)
          .update({
            email,
            name: userCredential.user.displayName,
          });
        return userCredential.user.emailVerified;
      })
      .catch(error => {
        alert(error.message);
        return false;
      });
  },
  authenticated(): boolean {
    return isAuthenticated === AuthState.signedIn;
  },
  addFriend(code: string): Promise<boolean> {
    const uid = firebase.auth().currentUser.uid;
    return firebase
      .database()
      .ref(`/users/${code}`)
      .get()
      .then(async (value: firebase.database.DataSnapshot) => {
        if (code === uid) return Promise.reject('Unable add yourself');
        else if (!value.hasChildren()) return Promise.reject('Invalid user ID');
        else if (
          await (
            await firebase.database().ref(`/contacts/${uid}/${code}`).get()
          ).exists()
        )
          return Promise.reject('You are already friends');
        else return Promise.resolve();
      })
      .then(async () => {
        const ref = await firebase.database().ref(`/chats`).push({
          lastMessage: 'No messages yet',
          timestamp: new Date().getTime(),
        });
        return ref.key;
      })
      .then(async (key: string) => {
        await firebase
          .database()
          .ref(`/contacts/${uid}`)
          .update({
            [code]: key,
          });
        await firebase
          .database()
          .ref(`/contacts/${code}`)
          .update({
            [uid]: key,
          });
        return true;
      })
      .catch(msg => {
        alert(msg);
        return false;
      });
  },
  subscribeToFriendList(cb: (val: any) => void): void {
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/contacts/${uid}`)
      .on('value', (value: firebase.database.DataSnapshot) => {
        cb(value.val());
      });
  },
  unsubscribeFromFriendList(): void {
    const uid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/contacts/${uid}`).off('value');
  },
  getUserData(userId: string): Promise<any> {
    return firebase
      .database()
      .ref(`/users/${userId}`)
      .get()
      .then((value: firebase.database.DataSnapshot) => {
        return value.val();
      });
  },
  getChatInformation(userId: string): Promise<any> {
    const uid = firebase.auth().currentUser.uid;
    return firebase
      .database()
      .ref(`/contacts/${uid}/${userId}`)
      .get()
      .then((value: firebase.database.DataSnapshot) => {
        const chatId = value.val();
        return firebase.database().ref(`/chats/${chatId}`).get();
      })
      .then((value: firebase.database.DataSnapshot) => {
        const lastChatData = value.val();
        return {
          chatId: value.key,
          ...lastChatData,
        };
      });
  },
  subscribeToChat(chatId: string, cb: (val: any) => void): void {
    firebase
      .database()
      .ref(`/messages/${chatId}`)
      .on('value', (value: firebase.database.DataSnapshot) => {
        cb(value.val());
      });
  },
  unsubscribeFromChat(chatId: string): void {
    firebase.database().ref(`/messages/${chatId}`).off('value');
  },
  sendToChat(chatId: string, msg: string): void {
    const message = convert.stripHtml(msg);
    const timestamp = new Date().getTime();
    const uid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/messages/${chatId}`).push({
      author: uid,
      message,
      timestamp,
    });
    firebase
      .database()
      .ref(`/chats/${chatId}`)
      .update({
        lastMessage:
          message.length > 19 ? `${message.slice(0, 20)}...` : message,
        timestamp,
      });
  },
  isSelf(uid: string): boolean {
    return firebase.auth().currentUser.uid === uid;
  },
};
