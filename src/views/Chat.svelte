<script lang="ts">
  import ChatList from '../components/chats/ChatList.svelte';
  import ChatRoom from '../components/chats/ChatRoom.svelte';

  export let friendId = '';
  export let chatId = '';
</script>

<section class="row">
  <ChatList activeChatId={chatId} />
  <ChatRoom alwaysShow {friendId} {chatId} />
</section>
