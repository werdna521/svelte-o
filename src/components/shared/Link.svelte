<script lang="ts">
  import { link } from 'svelte-routing';

  export let href = '';
</script>

<a {href} use:link>
  <slot />
</a>
