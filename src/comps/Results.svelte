<script lang="ts">
    import { storedData } from '../stores';

    let data;

    storedData.subscribe(store => {
        data = store
    });
</script>

<h2>
    Aktueller Punktestand (nach "{data.videos.reverse()[0].title}")
</h2>
<div class="results flex flex--wrap">
    {#each Object.entries(data.status) as [challenger, status]}
        <div class="item{status.isOut ? ' transparent' : ''}">
            <img src="./images/challengers/{challenger.replace('*', '')}.png" alt="{challenger.replace('*', '')}"/>
            <strong>{status.endResult}</strong>{#if status.challengePoints.length > 1}&nbsp;= {status.challengePoints.join(' + ')}{/if}
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
