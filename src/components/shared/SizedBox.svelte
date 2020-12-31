<script lang="ts">
  export let height = 0;
  export let width = 0;

  $: h = height * .25;
  $: w = width * .25;
</script>

<div style="height: {h}rem; width: {w}rem" />
