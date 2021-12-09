<script lang="ts">
    import { onMount } from 'svelte';
    import { localStore } from "../stores/local-storage";

    let tags: number = 0;
    let products: number = 0;
    let isTouched = false;

    $: isFiltered = !isTouched;

    $: isVisible = !isFiltered;

    const onClick = () => {
        isTouched = true;
        isVisible = !isVisible;
        localStore.set('welcomeVisible', isVisible);
    }

    onMount(() => {
        const lsValue = localStore.get('welcomeVisible');
        if (!lsValue) {
            isTouched = true;
            isVisible = lsValue;
        }
    })
</script>

<h1 class="with-toggle" on:click={onClick}>
    7 Vs Wild
</h1>
<div class="welcome{isVisible ? ' show' : ''}">
    <div class="welcome__content">
        <p>
            Dies ist ein von der Community gebaute Übersichtsseite.<br/>
            Hier seht ihr den zwischen Stand, die Challenge Ergebnisse und zu allen Videos die Reactions der Kandidaten.<br />
            <b>Viel Spaß damit und Grüße gehen raus an Fritz für das geile Projekt</b>.
        </p>
    </div>
</div>

<style lang="scss">
  @import '../scss/variables';

  h1 {
    color: $color-primary;
  }

  .welcome {
    display: none;

    &.show {
      display: block;
    }

    .fb-like {
      height: 30px;
    }
  }
</style>
