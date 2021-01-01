<script lang="ts">
  export let center = false;
  export let className = '';
</script>

<style scoped lang="postcss">
  .card {
    @apply w-full max-w-lg p-8 mx-4 rounded-card bg-white shadow-card;
  }

  .center {
    @apply items-center;
  }

  @screen lg {
    .card {
      @apply p-10;
    }
  }
</style>

<div class:center class="card col {className}">
  <slot />
</div>
