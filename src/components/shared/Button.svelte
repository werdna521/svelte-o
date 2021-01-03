<script lang="ts">
  export let text = '';
  export let primary = false;
  export let type = 'button';
</script>

<style scoped lang="postcss">
  button {
    @apply w-full h-10 rounded-input transition-all;
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

  @screen lg {
    button {
      @apply h-12 text-lg;
    }
  }
</style>

<button {type} class:primary on:click>{text}</button>
