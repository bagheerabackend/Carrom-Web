<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const DownloadBtns = defineAsyncComponent(() => 
    import('../helpers/DownloadBtns.vue')
);
</script>

<template>
    <div class="about">
        <div class="header">
            <div class="header-left">
                <h1>About Us</h1>
                <p>At Bagheera Carrom, we're passionate about bringing the classic game of carrom to the digital world -
                    keeping its soul intact while infusing it with modern flair, competitive edge, and global
                    assessibility.</p>
                <p>Our journey begin with a simple vision: <br />To create the most immersive, stylish, and
                    community-driven carrom game ever built.</p>
                <p>Download Our Games</p>
                <DownloadBtns />
            </div>
            <div class="header-right">
                <img alt="About Bagheera Carrom - Team and mission"  class="about-header-poster"
                    src="../../assets/images/about/headerPoster.avif" loading="eager" decoding="async" />
            </div>
        </div>
    </div>
</template>

<style>
.about {
    padding-inline: 2em;
    padding-block: 1em;
    background-image: url('../../assets/images/about/footerBg.avif');
    color: #adb5bd;
    font-family: sansation;
    background-size: cover;
}

.header-left h1 {
    font-family: rammetto;
    color: #fcc440;
}

.header-left p {
    font-size: 20px;
}

.about-header-poster {
    justify-self: center;
    height: 15em;
    /* width: 100%;
    margin-top: 1em; */
}

@media (max-width: 767px) {
    .about-header-poster {
        width: 100%;
        margin-top: 3em;
    }
}

@media (min-width: 768px) and (max-width: 1023px) {}

/* Lap */
@media (min-width: 1024px) and (max-width: 1919px) {
    .about {
        padding-inline: 8em;
        padding-block: 5em;
    }

    .header {
        display: flex;
        gap: 3em;
    }

    .header-left h1 {
        font-size: 30pt;
        font-family: rammetto;
        color: #fcc440;
    }

    .header-left p {
        font-size: 22px;
    }

    .about-header-poster {
        height: 30em;
    }
}

/* H-Lap */
@media (min-width: 1920px) {
    .about {
        padding-inline: 8em;
        padding-block: 5em;
    }

    .header {
        display: flex;
        gap: 10em;
    }

    .header-left h1 {
        font-size: 40pt;
        font-family: rammetto;
        color: #fcc440;
    }

    .header-left p {
        font-size: 22px;
    }

    .about-header-poster {
        height: 30em;
    }
}
</style>