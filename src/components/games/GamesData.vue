<script setup>
import { fetchGame } from '../../../services/gameSevice.js'
const { data, error } = fetchGame()
const url = 'https://api.bagheeracarrom.com/'
</script>

<template>
    <div class="game-section">
        <div v-if="error" class="error">🕹️ New adventures loading… please wait!</div>
        <div v-else-if="!data">🕹️ New adventures loading… please wait!</div>
        <div v-else>
            <div class="game-items" v-for="(game, index) in data" :key="index"
                :style="{ backgroundImage: `url(${url}${game.bg_image})` }"
                :class="{ 'left-image': index % 2 === 0, 'right-image': index % 2 !== 0 }">
                <img :src="`${url}${game.game_image}`" :alt="`${game.name} game preview`"  class="game-image" loading="lazy" decoding="async" />
                <div class="game-content">
                    <span class="live-info" :class="[game.live && 'live']">LIVE - AVAILABLE NOW</span>
                    <h1>{{ game.name }}</h1>
                    <p>{{ game.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.error {
    color: rgb(139, 139, 139);
    font-size: 20pt;
    text-align: center;
    margin-block: 1em;
}

.game-section {
    color: #adb5bd;
    font-family: sansation;
    background-size: cover;
    display: flex;
    flex-direction: column;
}

.game-items {
    padding-inline: 1em;
    padding-block: 2em;
    height: 100%;
    display: flex;
    flex-direction: column;
}


.game-image {
    height: 100%;
}

.game-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.live-info {
    margin-top: 1em;
    display: none;
    padding: 0.5em 1.5em;
    border-radius: 2em;
    background: #1b4332;
    color: #52b788;
    border: 1px solid #52b788;
}

.download-btns {
    display: none;
}

.live {
    display: block;
}

.game-content h1 {
    font-family: rammetto;
    color: #fcc440;
    font-size: 20pt;
}

.game-content p {
    margin-top: -0.5em;
    text-align: center;
    font-size: 15pt;
}

@media (min-width: 768px) and (max-width: 1023px) {}

/* Lap */
@media (min-width: 1024px) and (max-width: 1919px) {
    .game-items {
        padding-inline: 5em;
        padding-block: 5em;
        height: 100%;
        display: flex;
        gap: 10em;
    }

    .left-image {
        flex-direction: row;
    }

    .right-image {
        flex-direction: row-reverse;
    }

    .game-image {
        height: 30em;
    }

    .game-content h1 {
        font-size: 30pt;
    }

    .game-content p {
        font-size: 18pt;
    }
}

/* H-Lap */
@media (min-width: 1920px) {
    .game-items {
        padding-inline: 10em;
        padding-block: 10em;
        height: 100%;
        display: flex;
        gap: 10em;
    }

    .left-image {
        flex-direction: row;
    }

    .right-image {
        flex-direction: row-reverse;
    }

    .game-image {
        height: 30em;
    }

    .game-content h1 {
        font-size: 30pt;
    }

    .game-content p {
        font-size: 18pt;
    }
}
</style>