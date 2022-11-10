<script lang="ts">
    import "../scss/app.scss";
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
        <img slot="header" src="./images/header.jpg" alt="7 Vs Wild Staffel 1"/>
        <p>
            Dies ist eine von der Community gebaute Übersichtsseite für Staffel 1.<br/>
            Hier seht ihr die Challenge Ergebnisse und zu allen Videos die Reactions der Kandidaten und Ex-Kandidaten.<br/>
            <b>Viel Spaß damit und Grüße gehen raus an Fritz, Max und Johannes für dieses geile Projekt</b>.
        </p>
    </Welcome>

    <center>
        Quellen:
        <a class="link" href="https://de.wikipedia.org/wiki/7_vs._Wild" target="_blank">Wikipedia</a> &
        <a class="link" href="https://www.youtube.com/playlist?list=PLPyDkYYqNkPa364y3LyawL8jBTd2Ald2G" target="_blank">Youtube Playlist</a>
        &
        <a class="link" href="https://www.instagram.com/7vswild/" target="_blank">Instagram</a>
    </center>

    <Results {staffelKey} ><h2>Endergebnisse</h2></Results>
    <Challenges {staffelKey}/>
    <Videos {staffelKey}/>
    <Reactions {staffelKey}/>

    <br/>
    <h2>Locations</h2>
    <img src="./images/sea.png" alt="Challengers Locations"/>
    <br/>
    <center>Quelle: <a class="link" href="https://www.instagram.com/p/CW5JXAxMqX2/" target="_blank">Instagram</a>
    </center>
    <br/>
    <img src="./images/logo.png" alt="7 vs. Wild Logo"/>
    <br/>
    <center>2021</center>
    <br/>
    <br/>
</main>

<style>
    :global(.season-1) {
        background-image: url('../images/background.jpg');
        background-size: cover;
        background-attachment: fixed;
    }

    img {
        border-radius: 50%;
    }
</style>
