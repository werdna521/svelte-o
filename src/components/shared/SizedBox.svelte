<script lang="ts">
  import convert from '../../utils/convert';

  export let height = 0;
  export let width = 0;

  $: h = convert.tailwindToRem(height);
  $: w = convert.tailwindToRem(width);
</script>

<div style="height: {h}rem; width: {w}rem" />
