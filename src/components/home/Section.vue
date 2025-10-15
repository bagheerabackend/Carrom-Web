<script setup lang="ts">
import DownloadBtns from '../helpers/DownloadBtns.vue';

</script>

<template>
    <div class="section">
        <div class="desc">
            <img alt="Bagheera carrom" class="section-desc" src="../../assets/images/home/sectionDesc.avif" />
        </div>
        <div class="desc-mobile">
            <img alt="Bagheera carrom" class="section-desc-mob" src="../../assets/images/home/offer.avif" />
            <img alt="Bagheera carrom" class="section-desc-mob" src="../../assets/images/home/fair.avif" />
            <img alt="Bagheera carrom" class="section-desc-mob" src="../../assets/images/home/support.avif" />
        </div>

        <div class="game">
            <h3>Try out our games now...</h3>
            <div class="game-sec">
                <img alt="Bagheera carrom" class="section-game-mob" src="../../assets/images/home/posterBg.avif" />
                <div class="poster-container">
                    <img alt="Bagheera carrom 1" class="section-game-poster mob-hidden"
                        src="../../assets/images/home/poster1.avif" />
                    <img alt="Bagheera carrom 3" class="section-game-poster" src="../../assets/images/home/poster3.avif" />
                    <img alt="Bagheera carrom 2" class="section-game-poster mob-hidden"
                        src="../../assets/images/home/poster2.avif" />
                </div>
            </div>
        </div>

        <div class="last-panel">
            <div class="left-panel">
                <img alt="Bagheera carrom" class="section-text-2" src="../../assets/images/home/sectionText.avif" />
                <DownloadBtns />
            </div>
            <div class="right-panel">
                <img alt="Bagheera carrom" class="panther-img" src="../../assets/images/home/pantherImg.avif" />
            </div>
        </div>
    </div>
</template>

<style>
.section {
    font-family: sansation;
    background-image: url('../../assets/images/bg2.avif');
    height: fit-content;
    color: #adb5bd;
}

.desc {
    display: none;
}

.desc-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2em;
}

.section-desc-mob {
    width: 70%;
}

.game {
    margin-block: 3em;
}

.game h3 {
    text-align: center;
    color: #fcc440;
    font-size: 25px;
}

.game-sec {
    z-index: 0;
    padding-inline: 1em;
    position: relative;
}

.section-game-mob {
    width: 100%;
    height: 23em;
    display: block;
}

.poster-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.section-game-poster {
    width: 20em;
}

.mob-hidden {
    display: none;
}

.download-btn {
    width: 12em;
    position: absolute;
    align-content: flex-end;
    bottom: -20px;
    right: 25%;
}

.last-panel {
    background: #000;
    margin-top: 5em;
    margin-bottom: 2em;
    position: relative;
}

.left-panel {
    position: absolute;
    bottom: 4em;
    left: 10%;
}

.section-text-2 {
    width: 80%;
}

.panther-img {
    width: 100%;
}

@media (min-width: 768px) and (max-width: 1023px) {}

/* Lap */
@media (min-width: 1024px) and (max-width: 1919px) {
    .desc {
        display: inline;
    }

    .desc-mobile {
        display: none;
    }

    .section-desc {
        width: 100%;
        margin-top: -12em;
    }

    .game h3 {
        font-size: 40pt;
    }

    .game-sec {
        padding-inline: 5em;
    }

    .poster-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3em;
    }

    .section-game-mob {
        height: 30em;
    }

    .section-game-poster {
        width: 22.5em;
    }

    .download-btn {
        width: 18em;
        position: absolute;
        bottom: -20px;
        left: 42%;
        right: 50%;
    }

    .mob-hidden {
        display: inline;
    }

    .last-panel {
        padding-inline: 8em;
        position: static;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .left-panel {
        position: static;
        width: 100%;
        left: 10%;
    }

    .section-text-2 {
        width: 80%;
    }

    .panther-img {
        width: 100%;
        height: 70%;
    }
}

/* H-Lap */
@media (min-width: 1920px) {
    .desc {
        display: inline;
    }

    .desc-mobile {
        display: none;
    }

    .section-desc {
        width: 100%;
        margin-top: -14em;
    }

    .game h3 {
        font-size: 40pt;
    }

    .game-sec {
        padding-inline: 5em;
    }

    .poster-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3em;
    }

    .section-game-mob {
        height: 40em;
    }

    .section-game-poster {
        width: 30em;
    }

    .download-btn {
        width: 20em;
        position: absolute;
        bottom: -20px;
        left: 42%;
        right: 50%;
    }

    .mob-hidden {
        display: inline;
    }

    .last-panel {
        padding-inline: 8em;
        position: static;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .left-panel {
        position: static;
        width: 100%;
        left: 10%;
    }

    .section-text-2 {
        width: 80%;
    }

    .panther-img {
        width: 100%;
        height: 70%;
    }
}
</style>