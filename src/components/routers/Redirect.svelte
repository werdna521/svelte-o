<script lang="ts">
  import { Route } from 'svelte-routing';
  import Redirector from './Redirector.svelte';

  export let path = '';
  export let to = '';
</script>

<Route {path}>
  <Redirector {to} />
</Route>
