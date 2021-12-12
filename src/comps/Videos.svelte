<script lang="ts">
    import { storedData } from '../stores';

    let data;

    storedData.subscribe(store => {
        data = store
    });
</script>

<h2>
    Videos
</h2>
<div class="results flex flex--wrap">
    {#each data.videos as video, index}
        <div class="item">
            <span>{video.title}</span>
            <a href="{video.url}" target="_blank">
                <img src="{video.thumb}" alt="{video.title}"/>
            </a>
        </div>
    {/each}
</div>

<style lang="scss">
  @import '../scss/variables';

  .results {
    gap: $space-md;
    align-items: center;

    .item {
      width: 49%;

      @media (min-width: 1024px) {
        width: 220px;
      }

      span {
        font-size: ms(-1);
        display: block;
        font-weight: bold;

        &:first-letter {
          text-transform: capitalize;
        }
      }

      img {
        width: 100%;
      }
    }
  }
</style>
