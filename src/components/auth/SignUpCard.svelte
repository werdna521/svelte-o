<script lang="ts">
  import AuthCard from './AuthCard.svelte';

  let inputData = [
    {
      key: 'name',
      placeholder: 'Full Name',
      type: 'text',
      value: '',
    },
    {
      key: 'email',
      placeholder: 'Email',
      type: 'text',
      value: '',
    },
    {
      key: 'password',
      placeholder: 'Password',
      type: 'password',
      value: '',
    },
  ];
</script>

<AuthCard
  buttonText="Sign Up"
  caption="Already have an account?"
  captionHref="/login"
  captionHreftext="Sign in"
  title="Create Account"
  bind:inputData />
