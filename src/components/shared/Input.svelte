<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let value = '';
  export let placeholder = '';
  export let type = 'text';
  export let className = '';
  export let textarea = false;

  const dispatch = createEventDispatcher();

  const overrideEnterKey = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      dispatch('submit');
    }
  };
</script>

<style scoped lang="postcss">
  input,
  div {
    @apply px-4 py-2 w-full rounded-input shadow-input bg-secondary;
    @apply text-sm font-medium transition-all;
  }

  input:focus,
  div:focus {
    @apply bg-white shadow-input-active;
  }

  ::placeholder {
    @apply text-sm text-accent-one font-medium;
  }

  @screen lg {
    input,
    div {
      @apply text-lg py-3;
    }

    ::placeholder {
      @apply text-lg;
    }
  }
</style>

{#if textarea}
  <div
    class={className}
    {placeholder}
    contenteditable
    bind:innerHTML={value}
    on:keydown={overrideEnterKey} />
{:else if type === 'password'}
  <input type="password" class={className} {placeholder} bind:value />
{:else if type === 'text'}
  <input type="text" class={className} {placeholder} bind:value />
{/if}
