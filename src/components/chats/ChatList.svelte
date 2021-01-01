<script lang="ts">
  import Avatar from '../shared/Avatar.svelte';
  import ScrollView from '../shared/ScrollView.svelte';
  import TopBar from '../shared/TopBar.svelte';
</script>

<article class="col w-full md:max-w-xs lg:max-w-sm">
  <TopBar>
    <img src="img/svg/svelte-o.svg" alt="Svelte-O" />
    <h2 class="text-white ml-2">Svelte-O</h2>
  </TopBar>
  <ScrollView offset={16}>
    {#each new Array(50) as _, i (i)}
      <div class="row items-center">
        <Avatar src="img/png/avatar.png" large />
      </div>
    {/each}
  </ScrollView>
</article>
