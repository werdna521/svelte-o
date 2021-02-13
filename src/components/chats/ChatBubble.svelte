<script lang="ts">
  export let self = false;
  export let message = '';
</script>

<style scoped lang="postcss">
  .bubble {
    @apply rounded-lg max-w-xs p-4 bg-background mx-4 my-2 self-start;
  }

  .self {
    @apply bg-primary self-end;
  }

  @screen md {
    .bubble {
      @apply max-w-sm;
    }
  }

  @screen lg {
    .bubble {
      @apply max-w-lg;
    }
  }
</style>

<div class="bubble" class:self>
  <h6 class={self ? 'text-white' : ''}>{message}</h6>
</div>
