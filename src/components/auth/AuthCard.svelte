<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../shared/Button.svelte';
  import Card from '../shared/Card.svelte';
  import Input from '../shared/Input.svelte';
  import Link from '../shared/Link.svelte';
  import SizedBox from '../shared/SizedBox.svelte';

  interface InputData {
    key: string;
    value: string;
    type: string;
    placeholder: string;
  }

  export let title = '';
  export let caption = '';
  export let captionHref = '';
  export let captionHreftext = '';
  export let inputData: InputData[];
  export let buttonText = '';
</script>

<Card center>
  <h1>{title}</h1>
  <SizedBox height={2} />
  <div class="row">
    <caption>{caption}&nbsp;</caption>
    <Link href={captionHref}>{captionHreftext}</Link>
  </div>
  <SizedBox height={8} />
  {#each inputData as input, i (input.key)}
    <Input
      placeholder={input.placeholder}
      type={input.type}
      bind:value={input.value} />
    {#if i !== inputData.length - 1}
      <SizedBox height={6} />
    {/if}
  {/each}
  <SizedBox height={10} />
  <Button text={buttonText} primary on:click />
</Card>
