<script lang="ts">
  import ChatItem from './ChatItem.svelte';
  import ScrollView from '../shared/ScrollView.svelte';
  import SizedBox from '../shared/SizedBox.svelte';
  import TopBar from '../shared/TopBar.svelte';
</script>

<article class="col w-full md:max-w-xs lg:max-w-sm">
  <TopBar>
    <img src="img/svg/svelte-o.svg" alt="Svelte-O" />
    <h2 class="text-white ml-2">Svelte-O</h2>
  </TopBar>
  <ScrollView offset={16}>
    {#each new Array(50) as _, i (i)}
      {#if i === 0}
        <SizedBox height={4} />
      {/if}
      {@debug i}
      <ChatItem
        src="img/png/avatar.png"
        name="Tommy Johnson"
        time="18:00"
        message="Hi, Ben!" />
      {#if i === 49}
        <SizedBox height={4} width={4} />
      {/if}
    {/each}
  </ScrollView>
</article>
