<script lang="ts">
  export let center = false;
  export let className = "";
</script>

<style scoped lang="postcss">
  .card {
    @apply w-1/3 px-8 py-4 rounded-card bg-white shadow-card;
  }

  .center {
    @apply items-center;
  }
</style>

<div class:center class={`card col ${className}`}>
  <slot />
</div>
