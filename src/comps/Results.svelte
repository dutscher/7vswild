<script lang="ts">
    import { storedData } from '../stores';

    let data;

    storedData.subscribe(store => {
        data = store
    });

    $: resultsSorted = Object.entries(data.status).map((challenger) => {
        return {
            name: challenger[0].replace('*', ''),
            ...challenger[1],
        }
    }).sort((a, b) => {
        if (a.endResult > b.endResult) {
            return -1;
        }
        if (a.endResult < b.endResult) {
            return 1;
        }
        return 0;
    });
</script>

<h2>
    Aktueller Punktestand (nach "{data.videos.reverse()[0].title}")
</h2>
<div class="results flex flex--wrap">
    {#each resultsSorted as challenger}
        <div class="item{challenger.isOut ? ' transparent' : ''}">
            <img src="./images/challengers/{challenger.name}.png" alt="{challenger.name}"/>
            <strong>{challenger.endResult}</strong>{#if challenger.challengePoints.length > 1}&nbsp;= {challenger.challengePoints.join(' + ')}{/if}
        </div>
    {/each}
</div>

<style lang="scss">
  @import '../scss/variables';

  .results {
    gap: $space-xl;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1024px) {
      flex-direction: inherit;
    }

    .item {
      img {
        width: 150px;
        vertical-align: middle;
      }

      strong {
        color: $color-primary-lighter;
        font-size: ms(2);
      }

      &.transparent img {
        opacity: 0.5;
        filter: grayscale(1);
      }
    }
  }
</style>
