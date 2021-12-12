<script lang="ts">
    import { storedData } from '../stores';

    let data;

    storedData.subscribe(store => {
        data = store

    });

    const showPoints = (result) => {
        const results = result.split('|');
        return results[1];
    }

    const showDescription = (result) => {
        const results = result.split('|');
        return results[0].split(',').join(', ');
    }
</script>

<h2>
    Challenges
</h2>
<div class="challenges flex flex--wrap">
    {#each data.challenges.reverse() as challenge, index}
        <div class="item">
            <h3>{challenge.title}</h3>
            <div class="challengers">
                {#each Object.entries(challenge.challengers) as [challenger, results]}
                    <span>{challenger}:</span>
                    <strong>{showPoints(results)}</strong> | {showDescription(results)}<br />
                {/each}
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
  @import '../scss/variables';

  .challenges {
    gap: $space-xl;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1024px) {
      flex-direction: inherit;
      align-items: baseline;
    }

    .item {
      width: 100%;

      @media (min-width: 1024px) {
        width: 30%;
      }

      strong {
        color: $color-primary-lighter;
        font-size: ms(1);
      }
    }

    .challengers {
      span {
        font-weight: bold;
        display: inline-block;
        width: 80px;
        text-align: right;

        &:first-letter {
          text-transform: capitalize;
        }
      }
    }
  }
</style>
