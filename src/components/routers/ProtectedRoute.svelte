<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import firebase from '../../firebase';

  onMount(() => {
    if (!firebase.authenticated()) {
      navigate('/');
    }
  });
</script>

<slot />
