<script lang="ts">
    import { storedData } from '../stores';

    let data;

    storedData.subscribe(store => {
        data = store
    });
</script>

<h2>
    Reactions
</h2>
<div class="reactions">
    {#each Object.entries(data.reactions) as [youtuber, reactions]}
        <h3>{youtuber}</h3>
        <div class="flex">
            {#each Object.entries(reactions).reverse() as [episode, video]}
                {#if video.url}
                    <div class="item">
                        <span>Folge {episode}</span>
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
      gap: $space-md;
    }

    h3 {
      display: block;

      &:first-letter {
        text-transform: capitalize;
      }
    }

    .item {
      span {
        font-size: ms(-1);
        display: block;
        font-weight: bold;
      }

      img {
        width: 100%;
      }
    }
  }
</style>
