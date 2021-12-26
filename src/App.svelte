<script lang="ts">
    import Welcome from "./comps/Welcome.svelte";
    import Results from "./comps/Results.svelte";
    import Challenges from "./comps/Challenges.svelte";
    import Videos from "./comps/Videos.svelte";
    import Reactions from "./comps/Reactions.svelte";
    import Github from "./comps/Github.svelte";
</script>

<main>
    <Github/>
    <Welcome/>
    <Results/>
    <Challenges/>
    <Videos/>
    <Reactions/>

    <br />
    <br />
    <center>
        <a class="wiki" href="https://de.wikipedia.org/wiki/7_vs._Wild" target="_blank">Quelle: Wikipedia</a> & Youtube
    </center>

    <img src="./images/logo.png" alt="7 Vs Wild Logo" />
</main>

<style lang="scss">
  @import './scss/variables';

  :global(body) {
    font-family: $font-family;
    font-size: $base-font-size;
    overflow-y: scroll;
    background: url('../images/background.jpg');
    background-size: cover;
    background-attachment: fixed;
    color: $color-white;
    text-shadow: 1px 1px $color-black;
    padding: 0;
    margin: 0;
  }

  :global(h1, h2, h3) {
    margin: $space-lg 0;
    color: $color-primary-light;
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

  :global(.flex--vertical) {
    flex-direction: column;
  }

  main {
    @media (min-width: 1024px) {
      width: 65vw;
    }
    margin: 0 auto;

    .wiki {
      color: $color-white;
    }

    img {
      width: 100%;
      margin: 0 auto;
      display: block;
      margin-top: $space-xl * 2;

      @media (min-width: 1024px) {
        width: auto;
      }
    }
  }

  :global(main > div, main > h1, main > h2, main > h3) {
    padding: 0 $space-md;
  }
</style>
