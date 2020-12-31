<script lang="ts">
  export let value: string;
  export let className = "";
</script>

<style scoped lang="postcss">
  input {
    @apply px-4 py-2 w-full rounded-input shadow-input bg-secondary;
    @apply text-base font-medium border-secondary border-2 transition-all;
  }

  input:focus {
    @apply bg-white shadow-input-active outline-none;
  }

  ::placeholder {
    @apply text-base text-accent font-medium;
  }
</style>

<input class={className} bind:value placeholder="hello" />
