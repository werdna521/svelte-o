<script lang="ts">
  export let value = '';
  export let placeholder = '';
  export let type = 'text';
  export let className = '';
</script>

<style scoped lang="postcss">
  input {
    @apply px-4 py-2 w-full rounded-input shadow-input bg-secondary;
    @apply text-sm font-medium transition-all;
  }

  input:focus {
    @apply bg-white shadow-input-active;
  }

  ::placeholder {
    @apply text-sm text-accent-one font-medium;
  }

  @screen lg {
    input {
      @apply text-lg py-3;
    }

    ::placeholder {
      @apply text-lg;
    }
  }
</style>

{#if type === 'password'}
  <input type="password" class={className} {placeholder} bind:value />
{:else if type === 'text'}
  <input type="text" class={className} {placeholder} bind:value />
{/if}
