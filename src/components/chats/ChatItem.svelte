<script lang="ts">
  import Avatar from '../shared/Avatar.svelte';

  export let name = 'Anonymous';
  export let time = 'unknown';
  export let message = '';
  export let src = '';
</script>

<style scoped lang="postcss">
  .chat-item {
    @apply items-center px-4 py-2 cursor-pointer;
    @apply transition-all duration-150 ease-in-out;
  }

  .chat-item:hover {
    @apply shadow-card bg-secondary;
  }
</style>

<div class="chat-item row">
  <Avatar {src} large />
  <div class="col flex-grow ml-4">
    <div class="row justify-between items-center">
      <h6>{name}</h6>
      <caption class="regular">{time}</caption>
    </div>
    <p>{message}</p>
  </div>
</div>
