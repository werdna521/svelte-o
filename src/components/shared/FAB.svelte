<script lang="ts">
  export let text = '';
  export let type = 'button';
  export let className = '';
</script>

<style scoped lang="postcss">
  button {
    @apply w-16 h-16 rounded-full transition-all shadow-card;
    @apply text-3xl text-white font-semibold transform;
    @apply flex justify-center items-center bg-primary;
  }

  button:active {
    @apply scale-95;
  }

  button:hover {
    @apply bg-primary-dark;
  }
</style>

<button {type} class={className} on:click>{text}</button>
