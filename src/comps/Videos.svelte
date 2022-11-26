<script lang="ts">
    import { localStore, storedActiveSelection, storedData } from '../stores';
    import {toHHMMSS} from '../utils'

    export let staffelKey;

    let videos;
    let duration;
    let durationBehind;
    let durationReactions;
    let activeEpisodeID;

    storedData.subscribe(store => {
        videos = store[staffelKey].videos;
        duration = store[staffelKey].duration;
        durationBehind = store[staffelKey].durationBehind;
        durationReactions = store[staffelKey].durationReactions;
    });

    storedActiveSelection.subscribe(store => {
        activeEpisodeID = store.episodeID;
    });

    const setEpisdodeID = (episodeID) => {
        storedActiveSelection.update(store => {
            store.episodeID = episodeID;
            store.reason = 'reaction-show';
            return store;
        });

        localStore.set('latestData', JSON.stringify({staffelKey, episodeID: episodeID}));
    }

</script>

<h2>
    Videos (Stunden: {toHHMMSS(duration)} | BehindTheScenes: {toHHMMSS(durationBehind)} | Reactions: {toHHMMSS(durationReactions)})
</h2>
<div class="results flex flex--wrap">
    {#each videos as video}
        <div class="item">
            <span class="title">{video.id}) {video.title}</span>
            {#if !!video.url}
            <div class="wrapper"
                 class:active={activeEpisodeID === video.short}
                 on:click={() => setEpisdodeID(video.short)}
                 style="background-image:url({video.thumb})">
                <span class="duration">{video.duration}</span>
                <img src="{video.thumb}" alt="{video.title}"/>
            </div>
            {:else}
                <img src="{video.thumb}" alt="{video.title}"/>
            {/if}
            <span class="date">
                {video.date}<br />
                {video.reactions} Reactions |
                {video.durationReactions}<br />
            </span>
            <a href="{video.url}" target="_blank" title="Öffne das Video auf Youtube" class="youtube">
                <img src="./images/youtube.svg" alt="open youtube" />
            </a>
        </div>
    {/each}
</div>

<style lang="scss">
  @import '../scss/variables';

  .results {
    gap: $space-md;
    align-items: end;

    .item {
      position: relative;
      width: 49%;
      margin-bottom: $space-lg;
      cursor: pointer;

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
          visibility: hidden;
          margin: 0;
        }
      }

      .date {
        display: block;
        text-align: right;
        font-size: ms(-2);
        margin-top: $spacing-base;
      }

      .youtube {
        position: absolute;
        left: $spacing-base;
        bottom: $spacing-base;

        img {
          width: 30px;
        }
      }
    }
  }
</style>
