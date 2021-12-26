<script lang="ts">
    import { storedData } from '../stores';

    let data;

    storedData.subscribe(store => data = store);

    const getTitle = (episodeTitle: string) => {
        return !isNaN(parseFloat(episodeTitle)) ? `Folge ${episodeTitle}` : episodeTitle;
    }
</script>

<h2>
    Reactions
</h2>
<div class="reactions">
    {#each Object.entries(data.reactions) as [youtuber, reactions]}
        <h3>{youtuber}</h3>
        <div class="flex flex--wrap">
            {#each Object.entries(reactions).reverse() as [episode, video]}
                {#if video.url}
                    <div class="item">
                        <span>{getTitle(episode)}</span>
                        <a href="{video.url}" target="_blank">
                            <img src="{video.thumb}" alt="{video.title}"/>
                        </a>
                    </div>
                {/if}
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">
  @import '../scss/variables';

  .reactions {
    padding-left: $space-xl;

    .flex {
      gap: $space-xs;
      padding-left: $space-xl;
    }

    h3 {
      display: block;

      &:first-letter {
        text-transform: capitalize;
      }
    }

    .item {
      width: 23%;

      @media (min-width: 1024px) {
        width: 10%;
      }

      span {
        font-size: ms(-1);
        display: block;
        font-weight: bold;
        white-space: nowrap;
      }

      img {
        width: 100%;
      }
    }
  }
</style>
