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
<div class="reactions flex flex--wrap">
    {#each Object.entries(data.reactions) as [youtuber, reactions]}
        {#if reactions[episodeID] && reactions[episodeID].url}
        <div class="item flex">
            <h3>{youtuber}</h3>
            <div class="wrapper" style="background-image: url({reactions[episodeID].thumb})">
                <a href="{reactions[episodeID].url}" target="_blank">
                    <span class="duration">{reactions[episodeID].duration}</span>
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
    gap: $space-xl;

    .flex {
      gap: $space-xs;
      flex-flow: column;
      align-self: start;
    }

    .item {
      width: 100px;

      h3 {
        display: block;
        margin: 0;

        &:first-letter {
          text-transform: capitalize;
        }
      }
    }

    .wrapper {
      background-size: cover;
      background-position: center;
      border-radius: $border-radius-lg;
      position: relative;

      .duration {
        font-size: ms(-1);
        font-weight: bold;
        white-space: nowrap;
        position: absolute;
        bottom: 0;
        right: 0;
        color: white;
        background: rgba(0,0,0,0.5);
        padding: 2px 6px;
        border-radius: 6px;
      }

      img {
        width: 75%;
        margin: 0;
        visibility: hidden;
      }
    }
  }
</style>
