<script lang="ts">
  export let className = '';
</script>

<style scoped lang="postcss">
  .topbar {
    @apply items-center h-16 px-4 py-3 bg-accent-two;
  }
</style>

<div class={`topbar row ${className}`}>
  <slot />
</div>
