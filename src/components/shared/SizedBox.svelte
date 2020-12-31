<script lang="ts">
  export let height = 0;
  export let width = 0;

  $: h = height * 0.25;
  $: w = width * 0.25;
</script>

<div style="height: {h}rem; width: {w}rem" />
