<script lang="ts">
  import { friends } from '../../stores/firebaseSubscriptions';
  import { addFriendModal } from '../../stores/modal';
  import { width } from '../../stores/window';
  import ChatItem from './ChatItem.svelte';
  import FAB from '../shared/FAB.svelte';
  import ScrollView from '../shared/ScrollView.svelte';
  import SizedBox from '../shared/SizedBox.svelte';
  import TopBar from '../shared/TopBar.svelte';

  export let alwaysShow = false;
  export let activeChatId = '';

  const addFriend = () => addFriendModal.update(_ => true);
</script>

{#if alwaysShow || $width >= 768}
  <article class="col w-full md:max-w-xs lg:max-w-sm relative min-h-screen">
    <TopBar>
      <img src="public/img/svg/svelte-o.svg" alt="Svelte-O" />
      <h2 class="text-white ml-2">Svelte-O</h2>
    </TopBar>
    <ScrollView offset={16}>
      {#each Object.keys($friends) as userId, i (i)}
        {#if i === 0}
          <SizedBox height={4} />
        {/if}
        <ChatItem
          friendId={userId}
          chatId={$friends[userId].chatId}
          src="../img/png/avatar.png"
          name={$friends[userId].name}
          time={$friends[userId].timestamp}
          message={$friends[userId].lastMessage}
          active={$friends[userId].chatId === activeChatId} />
        {#if i === Object.keys($friends).length - 1}
          <SizedBox height={32} width={4} />
        {/if}
      {/each}
    </ScrollView>
    <FAB text="+" className="absolute bottom-4 right-8" on:click={addFriend} />
  </article>
{/if}
