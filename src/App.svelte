<script lang="ts">
  export let appName;
</script>

<main>
  <h1 class="font-bold text-3xl">{appName}</h1>
</main>

<style global lang="postcss">

  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  * {
    @apply box-border font-base;
  }

  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;

</style>
