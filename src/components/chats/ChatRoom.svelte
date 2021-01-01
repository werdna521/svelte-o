<script lang="ts">
  import Avatar from '../shared/Avatar.svelte';
  import TopBar from '../shared/TopBar.svelte';

  export let alwaysShow = false;

  $: show = alwaysShow ? '' : 'hidden md:block';
</script>

<article class="col w-full h-screen bg-white {show}">
  <TopBar className="justify-between">
    <h4 class="text-white">John Doe</h4>
    <Avatar src="img/png/avatar.png" />
  </TopBar>
</article>
