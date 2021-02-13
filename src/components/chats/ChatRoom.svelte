<script lang="ts">
  import { onMount } from 'svelte';
  import firebase from '../../firebase';
  import { width } from '../../stores/window';
  import { useChat } from '../../stores/firebaseSubscriptions';
  import ChatBubble from './ChatBubble.svelte';
  import Avatar from '../shared/Avatar.svelte';
  import Button from '../shared/Button.svelte';
  import Input from '../shared/Input.svelte';
  import ScrollView from '../shared/ScrollView.svelte';
  import SizedBox from '../shared/SizedBox.svelte';
  import TopBar from '../shared/TopBar.svelte';

  export let alwaysShow = false;
  export let close = false;
  export let friendId = '';
  export let chatId = '';

  const chats = useChat(chatId);

  let userData = { name: '', email: '' };
  let msg = '';

  onMount(async () => {
    userData = await firebase.getUserData(friendId);
  });

  const sendMessage = () => {
    firebase.sendToChat(chatId, msg);
    msg = '';
  };
</script>

{#if alwaysShow || $width >= 768}
  <article class="col w-full h-screen bg-white">
    <TopBar className="justify-between">
      {#if alwaysShow}
        <h4 class="text-white">{close ? '' : userData.name}</h4>
      {/if}
      {#if $width >= 768}
        <Avatar src="../img/png/avatar.png" />
      {/if}
    </TopBar>
    {#if alwaysShow}
      <ScrollView offset={36}>
        {#each $chats as chat, i (i)}
          <ChatBubble
            self={firebase.isSelf(chat.author)}
            message={chat.message} />
        {/each}
      </ScrollView>
      <form
        on:submit|preventDefault={sendMessage}
        class="bg-background w-full h-20 row items-center px-4 lg:px-8 shadow-card">
        <Input bind:value={msg} textarea on:submit={sendMessage} />
        <SizedBox width={2} />
        <Button text="Send" type="submit" block={false} primary />
      </form>
    {/if}
  </article>
{/if}
