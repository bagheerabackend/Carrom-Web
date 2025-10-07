<script setup>
const year = new Date().getFullYear();
</script>

<template>
    <div class="footer">
        <div class="footer-row">
            <div class="icon">
                <img alt="Bagheera carrom" class="logo" src="../../assets/images/logo.png" />
            </div>
            <div class="links">
                <h2>Navigation</h2>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/game">Games</a>
                <a href="/contact">Contact</a>
            </div>
            <div class="legal">
                <h2>Legal</h2>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-and-conditions">Terms & Conditions</a>
                <a href="/refund-policy">Refund Policy</a>
            </div>
        </div>
        <div class="copyright-banner">
            Copyright ©{{ year }}. All Rights Reserved By <a href="/">Bagheera Carrom</a>
        </div>
    </div>
</template>

<style scoped>
.footer {
    color: #adb5bd;
    border-top: 2px solid #fcc440;
    font-family: sansation;
    background: #081c15;
    padding-block: 3em 0;
    padding-inline: 2em;
}

.footer-row {
    margin-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo {
    width: 15em;
    height: 4em;
}

.links,
.legal {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

.legal h2,
.links h2 {
    margin-bottom: 0.1em;
    color: #fcc440;
}

.links a,
.legal a {
    text-decoration: none;
    color: #adb5bd;
    font-weight: bold;
    text-transform: uppercase;
}

.links a:hover,
.legal a:hover {
    color: #fcc440;
}

.copyright-banner {
    padding-block: 1em;
    font-size: 10pt;
    border-top: 1px solid #adb5bd;
}

.copyright-banner a {
    color: #adb5bd;
}

.copyright-banner a:hover {
    color: #fcc440;
}

/* Tab */
@media (min-width: 768px) and (max-width: 1023px) {}

/* Lap */
@media (min-width: 1024px) and (max-width: 1919px) {
    .footer {
        padding-block: 5em 0;
        padding-inline: 10em;
    }

    .footer-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
    }

    .icon {
        align-self: center;
    }

    .logo {
        width: 15em;
        height: 5em;
    }

    .links,
    .legal {
        gap: 1.5em;
    }

    .copyright-banner {
        font-size: 12pt;
    }
}

/* H-Lap */
@media (min-width: 1920px) {
    .footer {
        padding-block: 5em 0;
        padding-inline: 15em;
    }

    .footer-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
    }

    .icon {
        align-self: center;
    }

    .logo {
        width: 15em;
        height: 5em;
    }

    .links,
    .legal {
        gap: 1.5em;
    }

    .copyright-banner {
        padding-block: 1.5em;
        font-size: 13pt;
    }
}
</style>