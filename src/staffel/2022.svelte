<script lang="ts">
    import Welcome from "../comps/Welcome.svelte";
    import Results from "../comps/Results.svelte";
    import Challenges from "../comps/Challenges.svelte";
    import Videos from "../comps/Videos.svelte";
    import Reactions from "../comps/Reactions.svelte";
    import Github from "../comps/Github.svelte";

    export let staffelKey;
</script>

<main>
    <Github/>
    <Welcome>
        <img slot="header" src="./images/header-2.jpg" alt="7 Vs Wild Staffel 2"/>
        <p>
            Dies ist eine von der Community gebaute Übersichtsseite für Staffel 2.<br/>
            Hier seht ihr die Challenge Ergebnisse und zu allen Videos die Reactions der Kandidaten und Ex-Kandidaten.<br/>
            <b>Viel Spaß damit und Grüße gehen raus an Fritz, Max und Johannes für dieses geile Projekt</b>.
        </p>
    </Welcome>

    <center>
        Quellen:
        <a class="link" href="https://de.wikipedia.org/wiki/7_vs._Wild" target="_blank">Wikipedia</a> &
        <a class="link" href="https://www.youtube.com/playlist?list=PLPyDkYYqNkPZPb7wkBcfli6PFbyEOi9lL" target="_blank">Youtube Playlist</a>
        &
        <a class="link" href="https://www.instagram.com/7vswild/" target="_blank">Instagram</a>
    </center>

    <Videos {staffelKey}/>
    <Reactions {staffelKey}/>
    <br/>
    <br/>
    <Results {staffelKey}><h2>Teilnehmerranking <!-- (nach "{latestVideo.title}")--></h2></Results>
    <Challenges {staffelKey}/>

    <br/>
    <img src="./images/logo-2.png" alt="7 vs. Wild Logo"/>
    <br/>
    <center>2022</center>
    <br/>
    <br/>
</main>

<style>
    :global(.season-2) {
        background-image: url('../images/background-2.jpg');
        background-size: cover;
        background-attachment: fixed;
    }

    img {
        border-radius: 50%;
    }
</style>
