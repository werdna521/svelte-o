<script lang="ts">
  export let className = '';
  export let src = '';
  export let alt = 'avatar';
  export let large = false;

  $: size = large ? 'w-16 h-16' : 'w-10 h-10';
</script>

<img class="rounded-full {size} {className}" {src} {alt} />
