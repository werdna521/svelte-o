<script lang="ts">
  import { Router, Route, navigate } from 'svelte-routing';
  import firebase from './firebase';
  import { addFriendModal } from './stores/modal';
  import ProtectedRoute from './components/routers/ProtectedRoute.svelte';
  import AddFriendModal from './components/shared/AddFriendModal.svelte';
  import Chat from './views/Chat.svelte';
  import Home from './views/Home.svelte';
  import Login from './views/Login.svelte';
  import Root from './views/Root.svelte';
  import SignUp from './views/SignUp.svelte';

  navigate('/');
  firebase.init();

  const dismissModal = () => addFriendModal.update(_ => false);
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

  h2 {
    @apply text-2xl font-semibold;
  }

  h4 {
    @apply text-lg font-semibold;
  }

  h6 {
    @apply text-base text-accent-two font-medium;
  }

  p {
    @apply text-xs text-dark;
  }

  a {
    @apply text-xs text-primary font-medium underline;
  }

  caption {
    @apply text-xs text-accent-one font-medium;
  }

  caption.regular {
    @apply font-normal;
  }

  @screen lg {
    h1 {
      @apply text-4xl;
    }

    h2 {
      @apply text-3xl;
    }

    h4 {
      @apply text-xl;
    }

    h6 {
      @apply text-lg;
    }

    p {
      @apply text-sm;
    }

    a {
      @apply text-sm;
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
  <Router>
    <Route path="login" component={Login} />
    <Route path="signup" component={SignUp} />
    <Route path="home">
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    </Route>
    <Route path="chat/:friendId/:chatId" let:params>
      <ProtectedRoute>
        <Chat friendId={params.friendId} chatId={params.chatId} />
      </ProtectedRoute>
    </Route>
    <Route path="/" component={Root} />
  </Router>
  <AddFriendModal show={$addFriendModal} on:dismiss={dismissModal} />
</main>
