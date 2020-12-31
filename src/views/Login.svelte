<script lang="ts">
  import Button from '../components/shared/Button.svelte';
  import Card from '../components/shared/Card.svelte';
  import Input from '../components/shared/Input.svelte';
  import SizedBox from '../components/shared/SizedBox.svelte';
</script>

<div class="row min-h-screen justify-center items-center">
  <Card center>
    <h1>Login</h1>
    <SizedBox height={2} />
    <div class="row">
      <caption>Don't have an account?&nbsp;</caption>
      <div class="text-xs md:text-sm text-primary font-medium underline">
        Sign up
      </div>
    </div>
    <SizedBox height={8} />
    <Input placeholder="Username" />
    <SizedBox height={6} />
    <Input placeholder="Password" />
    <SizedBox height={10} />
    <Button text="Sign In" primary />
  </Card>
</div>
