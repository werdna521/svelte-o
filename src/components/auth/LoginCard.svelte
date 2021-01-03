<script lang="ts">
  import { navigate } from 'svelte-routing';
  import firebase from '../../firebase';
  import AuthCard from './AuthCard.svelte';

  let inputData = [
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

  const login = () => {
    const [email, password] = inputData.map(({ value }) => value);
    firebase.login(email, password).then((success: boolean) => {
      if (!success) return alert('Salah');
      navigate('/home');
    });
  };
</script>

<AuthCard
  buttonText="Sign In"
  caption="Don't have an account?"
  captionHref="/signup"
  captionHreftext="Sign up"
  title="Login"
  bind:inputData
  on:click={login} />
