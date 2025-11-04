<template>
    <div class="about-section">
        <div class="section-header">
            <h2>TAKE A LOOK AT</h2>
            <h1>OUR MISSION</h1>
            <p>To build a global carrom platform where players of all ages and skill levels can connect, <br> compete,
                and celebrate their love for the game</p>
        </div>
        <div class="section-content">
            <div class="section-content-items">
                <div class="content-img">
                    <img alt="Creative innovation in Bagheera Carrom" src="../../assets/images/about/about-creativity.svg" loading="lazy" decoding="async" />
                </div>
                <div style="text-align: center;">
                    <h2>CREATIVE</h2>
                    <p>"Innovative ideas that inspire growth and progress"</p>
                </div>
            </div>
            <div class="section-content-items">
                <div class="content-img">
                    <img alt="Extensive global reach of Bagheera Carrom" src="../../assets/images/about/about-extension.svg" loading="lazy" decoding="async"  />
                </div>
                <div style="text-align: center;">
                    <h2>EXTENSIVE</h2>
                    <p>"Reaching people and communities across the globe"</p>
                </div>
            </div>
            <div class="section-content-items">
                <div class="content-img">
                    <img alt="Caring community support at Bagheera Carrom" src="../../assets/images/about/about-caring.svg" loading="lazy" decoding="async"  />
                </div>
                <div style="text-align: center;">
                    <h2>CARING</h2>
                    <p>"Building trust through compassion and support"</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style>
.about-section {
    margin-block: 1.5em;
    padding-inline: 2em;
    padding-block: 1em;
    color: #adb5bd;
    font-family: sansation;
}

.section-header {
    text-align: center;
}

.section-header h1 {
    font-size: 28pt;
    margin-top: -0.7em;
    text-align: center;
    font-family: rammetto;
    color: #fcc440;
}

.section-header p {
    font-size: 12pt;
    margin-top: -0.7em;
    text-align: center;
}

.section-content {
    margin-block: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    justify-content: space-between;
}

.section-content-items {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    align-items: center;
}

.content-img {
    border-radius: 100%;
    border: 4px solid #fcc440;
}

.section-content-items img {
    padding: 2em;
    width: 5em;
    height: 5em;
}

.section-content-items h2 {
    color: #fcc440;
}

@media (min-width: 768px) and (max-width: 1023px) {}

/* Lap */
@media (min-width: 1024px) and (max-width: 1919px) {
    .about-section {
        margin-block: 2em;
        padding-inline: 8em;
    }

    .section-header p {
        font-size: 15pt;
    }

    .section-content {
        margin-block: 5em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}

/* H-Lap */
@media (min-width: 1920px) {
    .about-section {
        margin-block: 2em;
        padding-inline: 15em;
    }

    .section-header h1 {
        font-size: 30pt;
    }

    .section-header p {
        font-size: 17pt;
    }

    .section-content {
        margin-block: 5em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }


    .section-content-items img {
        padding: 2em;
        width: 7em;
        height: 7em;
    }
}
</style>