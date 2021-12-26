<script lang="ts">
    import { storedData } from '../stores';

    let videos;

    storedData.subscribe(store => videos = store.videos);
</script>

<h2>
    Videos
</h2>
<div class="results flex flex--wrap">
    {#each videos as video, index}
        <div class="item">
            <span class="title">{video.title}</span>
            {#if !!video.url}
            <a href="{video.url}" target="_blank">
                <img src="{video.thumb}" alt="{video.title}"/>
            </a>
            {:else}
                <img src="{video.thumb}" alt="{video.title}"/>
            {/if}
            <span class="date">{video.date}</span>
        </div>
    {/each}
</div>

<style lang="scss">
  @import '../scss/variables';

  .results {
    gap: $space-xs;
    align-items: center;

    .item {
      width: 49%;
      margin-bottom: $space-lg;

      @media (min-width: 1024px) {
        width: 220px;
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

      img {
        width: 100%;
      }

      .date {
        display: block;
        text-align: right;
        font-size: ms(-2);
      }
    }
  }
</style>
