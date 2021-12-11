<script lang="ts">
    import { storedData } from '../stores';

    let data;

    storedData.subscribe(store => {
        data = store

    });

    const showResults = (result) => {
        const results = result.split('|');
        return results[1] + ' | ' + results[0].split(',').join(', ');
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
                    {showResults(results)}<br />
                {/each}
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
  @import '../scss/variables';

  .challenges {
    gap: $space-xl;
    padding-left: $space-xl;

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
