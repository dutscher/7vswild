<script lang="ts">
    import { storedActiveSelection, storedData } from '../stores';

    export let staffelKey;
    let data;

    let episodeID;

    storedActiveSelection.subscribe(store => {
        episodeID = store.episodeID
    });

    storedData.subscribe(store => {
        data = store[staffelKey]
    });
</script>

{#if episodeID}
<h2>
    Reactions von Folge "{data.videos && data.videos.find(video => video.short === episodeID).title}"
</h2>
<div class="reactions">
    {#each Object.entries(data.reactions) as [youtuber, reactions]}
        {#if reactions[episodeID] && reactions[episodeID].url}
        <div class="flex flex--wrap">
            <h3>{youtuber}</h3>
            <div class="item" style="background-image: url({reactions[episodeID].thumb})">
                <a href="{reactions[episodeID].url}" target="_blank">
                    <img src="{reactions[episodeID].thumb}" alt="{reactions[episodeID].title}"/>
                </a>
            </div>
        </div>
        {/if}
    {/each}
</div>
{/if}

<style lang="scss">
  @import '../scss/variables';

  .reactions {
    padding-left: $space-xl;
    display: flex;

    .flex {
      gap: $space-xs;
      padding-left: $space-xl;
      flex-flow: column;
      align-self: end;
    }

    h3 {
      display: block;

      &:first-letter {
        text-transform: capitalize;
      }
    }

    .item {
      background-size: cover;
      background-position: center;
      border-radius: $border-radius-lg;

      span {
        font-size: ms(-1);
        display: block;
        font-weight: bold;
        white-space: nowrap;
      }

      img {
        width: 75%;
        margin: 0;
        visibility: hidden;
      }
    }
  }
</style>
