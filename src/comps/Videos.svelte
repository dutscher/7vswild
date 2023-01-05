<script lang="ts">
    import { localStore, storedActiveSelection, storedData } from '../stores';
    import {toHHMMSS} from '../utils'

    export let staffelKey;

    let videos;
    let durations;
    let activeEpisodeID;

    storedData.subscribe(store => {
        videos = store[staffelKey].videos;
        durations = store[staffelKey].durations;
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

        document.querySelector('#reactions').scrollIntoView({behavior: "smooth", block: "center"});

        localStore.set('latestData', JSON.stringify({staffelKey, episodeID: episodeID}));
    }
</script>

<h2 class="mb0">Videos ({videos.length}): {toHHMMSS(durations.all)} Stundenmaterial / {toHHMMSS(durations.reactions.all)} Reactions</h2>
<h3>
    Hauptserie: {toHHMMSS(durations.main)} / {toHHMMSS(durations.reactions.main)} (hh:mm:ss)<br />
    Behind The Scenes: {toHHMMSS(durations.behindthescenes)} / {toHHMMSS(durations.reactions.behindthescenes)} (hh:mm:ss)<br />
    Interview: {toHHMMSS(durations.interview)} / {toHHMMSS(durations.reactions.interview)} (hh:mm:ss)<br />
</h3>
<div class="results flex flex--wrap">
    {#each videos as video}
        <div class="item">
            <span class="title">{video.title}</span>
            {#if !!video.url}
            <div class="wrapper"
                 class:active={activeEpisodeID === video.short}
                 on:click={() => setEpisdodeID(video.short)}
                 style="background-image:url({video.thumb})">
                {#if video.type !== 'interview'}
                    <span class="short {video.type}">{video.short.replace('bts', '')}. Folge</span>
                {/if}
                <span class="duration {video.type}">{video.duration}</span>
                <img src="{video.thumb}" alt="{video.title}"/>
            </div>
            {:else}
                <img src="{video.thumb}" alt="{video.title}"/>
            {/if}
            <span class="date">
                {video.date}<br />
                Reactions: {video.reactions} |
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

  .mb0 {
    margin-bottom: -16px;
  }

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

        .short,
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

          &.behindthescenes {
            bottom: 20px;
          }
        }

        .short {
          left: 0;
          right: auto;
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
