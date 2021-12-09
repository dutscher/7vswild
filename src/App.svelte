<script lang="ts">
    import Welcome from "./comps/Welcome.svelte";
    import { storedData } from './stores';

    let data;

    storedData.subscribe(store => data = store);
</script>

<svelte:head>
    <title>7 Vs Wild</title>
</svelte:head>

<main>
    <Welcome/>
</main>

<style lang="scss">
  @import './scss/variables';

  :global(body) {
    font-family: $font-family;
    font-size: $base-font-size;
    overflow-y: scroll;
  }

  :global(h1, h2, h3) {
    margin: $space-lg 0;
  }

  :global(h1:hover, h2:hover, h3:hover) {
    background: $color-neutral-25;
  }

  :global(h2 b, h3 b, h4 b, p b) {
    color: $color-primary
  }

  :global(h1.with-toggle, h2.with-toggle) {
    cursor: pointer;
    user-select: none;
  }

  :global(.with-toggle + *) {
    padding-left: $space-xl * 2.5;
    padding-bottom: $space-xl * 2.5;
  }

  :global(.flex) {
    display: flex;
  }

  :global(.flex--wrap) {
    flex-wrap: wrap;
    flex: 1;
  }

  :global(.flex--inline) {
    display: inline-flex;
  }

  :global(.flex--vertical-center) {
    align-items: center;
  }

  :global(.flex--block) {
    width: 100%;
  }

  :global(.flex h4) {
    position: relative;
    margin: 0 $space-sm 0 0;
    padding: 0 $space-md 0 0;
    line-height: 1;
    width: 60px;
    align-self: center;
    text-align: right;
  }

  :global(.filter-headline) {
    font-size: ms(1);
  }

  :global(.flex.bl) {
    position: relative;
  }

  :global(.flex.bl::after) {
    position: absolute;
    content: '';
    left: -$space-sm;
    top: $space-sm;
    bottom: $space-sm;
    border-left: solid 1px $color-primary;
  }

  main {
    @media (min-width: 1024px) {
      width: 65vw;
    }
    padding-bottom: 300px;
  }
</style>
