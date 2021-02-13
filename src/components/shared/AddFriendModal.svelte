<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import firebase from '../../firebase';
  import Button from './Button.svelte';
  import Card from './Card.svelte';
  import Input from './Input.svelte';
  import SizedBox from './SizedBox.svelte';

  export let show = false;

  const dispatch = createEventDispatcher();

  const addFriend = () => {
    firebase.addFriend(code).then((success: boolean) => {
      if (success) dispatch('dismiss');
    });
  };

  let code = '';
</script>

<style scoped lang="postcss">
  .backdrop {
    @apply w-screen h-screen fixed flex justify-center items-center;
    @apply bg-dark opacity-75 top-0 left-0;
  }
</style>

{#if show}
  <div class="backdrop" on:click|self={() => dispatch('dismiss')}>
    <Card>
      <h2>Add Friend</h2>
      <SizedBox height={4} />
      <Input placeholder="Enter your friend's user ID" bind:value={code} />
      <SizedBox height={4} />
      <Button primary text="Add Friend" on:click={addFriend} />
    </Card>
  </div>
{/if}
