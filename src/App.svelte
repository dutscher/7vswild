<script lang="ts">
    import "./scss/app.scss";
    import { localStore, storedActiveSelection } from "./stores";
    import Staffel2 from "./staffel/2022.svelte";
    import Staffel1 from "./staffel/2021.svelte";

    let staffelKey;
    const lsStore = localStore.get('latestData')

    storedActiveSelection.subscribe(store => {
        staffelKey = store.staffelKey
        //localStore.set('latestData', JSON.stringify({staffelKey: store.staffelKey, episodeID: store.episodeID}));
    });


    const changeStaffel = (data, reason) => {
        storedActiveSelection.update(store => {
            return {store, reason, ...data};
        });
        if (!lsStore || reason !== 'onmount') {
            localStore.set('latestData', JSON.stringify({staffelKey: data.staffelKey, episodeID: data.episodeID}));
        }
    }

    changeStaffel(lsStore || {staffelKey: 2, episodeID: '1'}, 'onmount');
</script>

<div class="season-{staffelKey}">
<button on:click={() => changeStaffel({staffelKey: 1, episodeID: '1'}, 'change-season')}>Staffel 1</button>
<button on:click={() => changeStaffel({staffelKey: 2, episodeID: '1'}, 'change-season')}>Staffel 2</button>

{#if staffelKey === 1}
    <Staffel1 {staffelKey}/>
{:else}
    <Staffel2 {staffelKey}/>
{/if}

</div>
