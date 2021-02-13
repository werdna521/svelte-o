<script lang="ts">
  import { navigate } from 'svelte-routing';
  import firebase from '../../firebase';

  if (!firebase.authenticated()) {
    navigate('/');
  }
</script>

<slot />
