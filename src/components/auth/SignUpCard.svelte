<script lang="ts">
  import { navigate } from 'svelte-routing';
  import firebase from '../../firebase';
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

  const signUp = () => {
    const [name, email, password] = inputData.map(({ value }) => value);
    firebase.signUp(name, email, password).then((success: boolean) => {
      if (!success) return alert('no no no');
      navigate('/login');
    });
  };
</script>

<AuthCard
  buttonText="Sign Up"
  caption="Already have an account?"
  captionHref="/login"
  captionHreftext="Sign in"
  title="Create Account"
  bind:inputData
  on:click={signUp} />
