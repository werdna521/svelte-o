<script lang="ts">
  export let text = '';
  export let primary = false;
  export let type = 'button';
  export let block = true;
</script>

<style scoped lang="postcss">
  button {
    @apply w-20 h-10 rounded-input transition-all;
    @apply text-base text-white font-semibold transform;
  }

  button:active {
    @apply scale-95;
  }

  .primary {
    @apply bg-primary;
  }

  .primary:hover {
    @apply bg-primary-dark;
  }

  .block {
    @apply w-full;
  }

  @screen lg {
    button {
      @apply w-24 h-12 text-lg;
    }
  }
</style>

<button {type} class:block class:primary on:click>{text}</button>
