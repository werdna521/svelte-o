<script lang="ts">
  import { navigate } from 'svelte-routing';
  import Avatar from '../shared/Avatar.svelte';

  export let friendId = '';
  export let chatId = '';
  export let name = 'Anonymous';
  export let time = 'unknown';
  export let message = '';
  export let src = '';
  export let active = false;

  const openChat = () => navigate(`/chat/${friendId}/${chatId}`);
</script>

<style scoped lang="postcss">
  .chat-item {
    @apply items-center px-4 py-2 cursor-pointer;
    @apply transition-all duration-150 ease-in-out;
  }

  .chat-item:hover,
  .active {
    @apply shadow-card bg-secondary;
  }
</style>

<div class="chat-item row" class:active on:click={openChat}>
  <Avatar {src} large />
  <div class="col ml-4 flex-grow">
    <div class="row justify-between items-center">
      <h6>{name}</h6>
      <caption class="regular">{time}</caption>
    </div>
    <p>{message}</p>
  </div>
</div>
