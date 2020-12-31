<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import Redirect from './components/routers/Redirect.svelte';
  import Login from './views/Login.svelte';
</script>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;

  * {
    @apply box-border font-base text-dark;
  }

  h1 {
    @apply text-3xl font-bold;
  }

  caption {
    @apply text-xs text-accent-one font-medium;
  }

  @screen md {
    h1 {
      @apply text-4xl;
    }

    caption {
      @apply text-sm;
    }
  }

  @tailwind components;

  .row {
    @apply flex flex-row;
  }

  .col {
    @apply flex flex-col;
  }

  /* purgecss end ignore */

  @tailwind utilities;
</style>

<main class="bg-background min-h-screen">
  <Router url="">
    <Route path="login" component={Login} />
    <Redirect path="/" to="/login" />
  </Router>
</main>
