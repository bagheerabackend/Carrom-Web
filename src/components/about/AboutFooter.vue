<template>
    <div class="about-footer">
        <p class="footer-desc">
            At Bagheera Carrom, we believe games are more than just entertainment, they're a way to connect people,
            spark joy, and build lasting communities.
            Our vision is to become a global hub for classic and casual games like Ludo, Carrom, and more, while
            constantly innovating to keep the excitement alive.
        </p>
        <img class="footer-img" alt="Bagheera carrom, About Bagheera Carrom"
            src="../../assets/images/about/footerPoster.avif" />
        <div class="footer-points">
            <div class="footer-contents">
                <img alt="Bagheera carrom, About Bagheera Carrom" class="footer-point-imgs"
                    src="../../assets/images/about/people.svg" />
                <h2>Inclusive Gaming</h2>
                <p>Bagheera Carrom welcomes players of all backgrounds and skill levels. We believe in creating a
                    supportive and fun environment where everyone can enjoy the game.</p>
            </div>
            <div class="footer-contents">
                <img alt="Bagheera carrom, About Bagheera Carrom" class="footer-point-imgs"
                    src="../../assets/images/about/security.svg" />
                <h2>Fair Play</h2>
                <p>Integrity is at the heart of our platform. Our anti-cheat mechanisms and transparent gameplay rules
                    ensure that every match is fair and competitive.</p>
            </div>
            <div class="footer-contents">
                <img alt="Bagheera carrom, About Bagheera Carrom" class="footer-point-imgs"
                    src="../../assets/images/about/rocket.svg" />
                <h2>Fast-Paced Action</h2>
                <p>Enjoy quick matchmaking, responsive gameplay, and exciting challenges. Bagheera Carrom is built for
                    players who love thrilling, real-time action.</p>
            </div>
        </div>
    </div>
</template>

<style>
.about-footer {
    padding-inline: 2em;
    padding-block: 2em 3em;
    background-image: url('../../assets/images/about/footerBg.avif');
    color: #adb5bd;
    font-family: sansation;
    background-size: cover;
}

.footer-desc {
    padding-bottom: 1em;
    text-align: center;
    font-size: 13pt;
}

.footer-img {
    width: 100%;
    height: 12em;
    border: 2px solid #fcc440;
}

.footer-points {
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.footer-contents {
    padding-inline: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer-point-imgs {
    width: 5em;
    height: 5em;
}

.footer-contents h2 {
    text-transform: uppercase;
    color: #fcc440;
}

.footer-contents p {
    margin-top: -0.5em;
    text-align: center;
}

@media (min-width: 768px) and (max-width: 1023px) {}

@media (min-width: 1024px) and (max-width: 1919px) {
    .about-footer {
        padding-inline: 8em;
        padding-block: 2em 4em;
    }

    .footer-desc {
        padding-inline: 10em;
        padding-block: 1em;
        text-align: center;
        font-size: 15pt;
    }

    .footer-img {
        height: 100%;
    }

    .footer-points {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    
}

@media (min-width: 1920px) {
    .about-footer {
        padding-inline: 15em;
        padding-block: 3em 5em;
    }

    .footer-desc {
        padding-inline: 10em;
        padding-block: 1em;
        text-align: center;
        font-size: 18pt;
    }

    .footer-img {
        height: 100%;
    }

    .footer-points {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

}
</style>