<template>
    <div class="game-header">
        <div class="game-header-left">
            <h1>Our Games</h1>
            <p>Welcome to the world of Bagheera Games - where tradition meets technology. We craft immersive, skill based games that bring peoples together, combining the charm of classic board games with the thrill of modern online play.</p>
            <p>Every game we design carries our commitment to realism, entertainment, and fair play. Explore our growing library of games below</p>
            <!-- <p>Download Our Games</p> -->
            <DownloadBtns />
        </div>
        <div class="game-header-right">
            <img alt="Bagheera carrom, About Bagheera Carrom" class="game-header-poster"
                src="../../assets/images/game-header.png" />
        </div>
    </div>
</template>

<style>
.game-header {
    padding-inline: 2em;
    padding-block: 1em;
    background-image: url('../../assets/images/Bg2.png');
    color: #adb5bd;
    font-family: sansation;
    background-size: cover;
    display: flex;
    flex-direction: column;
}

.game-header-left h1 {
    font-family: rammetto;
    color: #fcc440;
}

.game-header-left p {
    font-size: 20px;
}

.game-header-poster {
    justify-self: center;
    height: 20em;
}

@media (max-width: 767px) {
    .game-header-poster {
        width: 100%;
    }
}

@media (min-width: 768px) and (max-width: 1023px) {}

/* Lap */
@media (min-width: 1024px) and (max-width: 1919px) {
    .game-header {
        flex-direction: row;
        gap: 3em;
        padding-inline: 8em;
        padding-block: 5em;
    }

    .game-header h1 {
        font-size: 30pt;
    }

    .game-header-left p {
        font-size: 22px;
    }

    .game-header-poster {
        height: 30em;
    }
}

/* H-Lap */
@media (min-width: 1920px) {
    .game-header {
        flex-direction: row;
        gap: 10em;
        padding-inline: 8em;
        padding-block: 5em;
    }

    .game-header-left h1 {
        font-size: 40pt;
        font-family: rammetto;
        color: #fcc440;
    }

    .game-header-left p {
        font-size: 25px;
    }

    .game-header-poster {
        height: 30em;
    }
}
</style>