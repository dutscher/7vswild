<script lang="ts">
    import { storedData } from '../stores';

    let data;

    storedData.subscribe(store => {
        data = store
    });

    const showPoints = (result) => {
        const results = result.split('|');
        const points = results[1];
        return points !== '-' ? parseInt(points) : points;
    }

    const showDescription = (result) => {
        const results = result.split('|');
        return results[0].split(',').join(', ');
    }

    $: challengesSorted = data.challenges.reverse().map((challenge) => {
        const challengers = Object.entries(challenge.challengers).map((challenger) => {
            return {
                name: challenger[0],
                points: showPoints(challenger[1]),
                desc: showDescription(challenger[1]),
            }
        }).sort((a, b) => {
            if (a.points > b.points) {
                return -1;
            }
            if (a.points < b.points) {
                return 1;
            }
            return 0;
        });

        return {
            title: challenge.title,
            challengers,
        }
    });

</script>

<h2>
    Challenges
</h2>
<div class="challenges flex flex--wrap">
    {#each challengesSorted as challenge, index}
        <div class="item">
            <h3>{challenge.title}</h3>
            <div class="challengers flex flex--vertical">
                {#each challenge.challengers as challenger}
                    <div class="flex">
                        <span class="challengers__name">{challenger.name}:&nbsp;</span>
                        <strong>{challenger.points}</strong>&nbsp;|&nbsp;<span>{challenger.desc}</span>
                    </div>
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
      &__name {
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
