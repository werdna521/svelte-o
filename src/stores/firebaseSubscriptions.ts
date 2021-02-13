import { readable } from 'svelte/store';
import firebase from '../firebase';

export const friends = readable<any>({}, function start(set) {
  firebase.subscribeToFriendList((val: any) => {
    const friendList = {};
    Object.keys(val).forEach(async (userId: string) => {
      const userData = await firebase.getUserData(userId);
      const chatInformation = await firebase.getChatInformation(userId);
      set({ ...friendList, [userId]: { ...userData, ...chatInformation } });
      friendList[userId] = userData;
    });
  });

  return function stop() {
    firebase.unsubscribeFromFriendList();
  };
});

export const useChat = (chatId: string = null) => {
  if (chatId === null) {
    return null;
  }

  const { subscribe } = readable<any[]>([], function start(set) {
    firebase.subscribeToChat(chatId, (val: any) => {
      const chatList = [];
      Object.values(val).forEach(async (msg: any) => {
        chatList.push(msg);
      });
      set(chatList);
    });

    return function stop() {
      firebase.unsubscribeFromChat(chatId);
    };
  });

  return {
    subscribe,
  };
};
