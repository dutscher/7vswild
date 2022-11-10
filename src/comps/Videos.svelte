<script lang="ts">
    import { localStore, storedActiveSelection, storedData } from '../stores';

    export let staffelKey;

    let videos;
    let episodeID;

    storedData.subscribe(store => {
        videos = store[staffelKey].videos
    });

    storedActiveSelection.subscribe(store => {
        episodeID = store.episodeID;
    });

    const setEpisdodeID = (event, episodeID) => {
        event.preventDefault();

        console.log({episodeID})

        storedActiveSelection.update(store => {
            store.episodeID = episodeID;
            store.reason = 'reaction-show';
            return store;
        });

        localStore.set('latestData', JSON.stringify({staffelKey, episodeID: episodeID}));
    }
</script>

<h2>
    Videos
</h2>
<div class="results flex flex--wrap">
    {#each videos as video}
        <div class="item">
            <span class="title">{video.id}) {video.title}</span>
            {#if !!video.url}
            <a class="wrapper" href="{video.url}" target="_blank" style="background-image:url({video.thumb})" class:active={episodeID === video.short}>
                <img src="{video.thumb}" alt="{video.title}"/>
            </a>
            {:else}
                <img src="{video.thumb}" alt="{video.title}"/>
            {/if}
            <span class="date">{video.date}</span>
            <button on:click={(e) => setEpisdodeID(e, video.short)}>Show Reactions ({video.reactions})</button>
        </div>
    {/each}
</div>

<style lang="scss">
  @import '../scss/variables';

  .results {
    gap: $space-md;
    align-items: end;

    .item {
      width: 49%;
      margin-bottom: $space-lg;

      @media (min-width: 1024px) {
        width: 180px;
      }

      .title {
        font-size: ms(-1);
        display: block;
        font-weight: bold;
        margin-bottom: $space-xs;

        &:first-letter {
          text-transform: capitalize;
        }
      }

      .wrapper {
        position: relative;
        background-position: center;
        background-size: cover;
        display: block;
        border-radius: $border-radius-xl;

        &.active {
          outline: solid 3px $color-white;
        }

        img {
          width: 75%;
          visibility: hidden;
          margin: 0;
        }
      }

      .date {
        display: block;
        text-align: right;
        font-size: ms(-2);
      }

      button {
        cursor: pointer;
        margin: $space-lg 0;
      }
    }
  }
</style>
