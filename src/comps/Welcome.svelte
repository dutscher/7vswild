<script lang="ts">
    import { onMount } from 'svelte';
    import { localStore } from "../stores/local-storage";
    // app

    let activeTagIds;
    let activePartIds;
    let activeColorIds;
    let activeStateIds;
    let activeSearchString;
    let loadedChanges;
    let tags: number = 0;
    let products: number = 0;
    let isTouched = false;

    $: isFiltered = !isTouched && (!!activeSearchString
        || activeTagIds.length > 0
        || activeStateIds.length > 0
        || activeColorIds.length > 0
        || activePartIds.length > 0);

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
    Welcom
</h1>
<div class="welcome{isVisible ? ' show' : ''}">
    <div class="welcome__content">
        <p>
            Dies ist ein von der Community gebauter Kompakter Bluebrixx only Produkte Katalog.<br/>
            Aufgrund des vielen klickens und langer Ladezeiten im BB eigenen Online-Shop haben wir das hier entwickelt.
            <b>Wir sind nicht Bluebrixx</b>.
        <p>
            Wähle einen der <b>{tags} Tags</b> (Jedes hat einen Deeplink in der URL) aus, suche nach einem von
            <b>{products} Bluebrixx Produkten</b> oder
            wähle einen Verfügbarkeit Status, außerdem gibt es noch einen Status-Verlauf in der Detailansicht.<br/>
            Zu jedem Produkt gibts noch die passende Anleitung (Zum herrunterladen müsst ihr aber bei BB eingeloggt
            sein)<br/>
            Aber Obacht: es gibt noch 3 Überraschungen ;)<br/>
            Viel Spaß
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
