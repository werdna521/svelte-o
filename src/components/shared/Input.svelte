<script lang="ts">
  export let value: string;
  export let placeholder: string;
  export let className = "";
</script>

<style scoped lang="postcss">
  input {
    @apply px-4 py-3 w-full rounded-input shadow-input bg-secondary;
    @apply text-base font-medium transition-all;
  }

  input:focus {
    @apply bg-white shadow-input-active outline-none;
  }

  ::placeholder {
    @apply text-base text-accent font-medium;
  }
</style>

<input class={className} {placeholder} bind:value />
