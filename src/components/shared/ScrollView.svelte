<script lang="ts">
  import convert from '../../utils/convert';

  export let offset = 0;

  $: off = convert.tailwindToRem(offset);
</script>

<style scoped lang="postcss">
  .list-container {
    @apply flex-grow overflow-y-scroll;
  }
</style>

<div class="list-container col" style="max-height: calc(100vh - {off}rem);">
  <slot />
</div>
