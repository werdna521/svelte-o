<script lang="ts">
  import ChatList from '../components/chats/ChatList.svelte';
  import ChatRoom from '../components/chats/ChatRoom.svelte';
</script>

<section class="row min-h-screen">
  <ChatList alwaysShow />
  <ChatRoom close />
</section>
