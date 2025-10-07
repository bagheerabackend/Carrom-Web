<template>
    <div class="footer">
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
</template>

<style scoped>
.footer {
    color: #adb5bd;
    border-top: 2px solid #fcc440;
    font-family: sansation;
    background: #14213d;
    padding-block: 5em;
    padding-inline: 2em;
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
    gap: 1.5em;
}

h2 {
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

/* Tab */
@media (min-width: 768px) and (max-width: 1023px) {}

/* Lap */
@media (min-width: 1024px) and (max-width: 1919px) {
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        padding-block: 8em;
        padding-inline: 10em;
    }

    .icon {
        align-self: center;
    }

    .logo {
        width: 15em;
        height: 5em;
    }
}

/* H-Lap */
@media (min-width: 1920px) {
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        padding-block: 8em;
        padding-inline: 15em;
    }

    .icon {
        align-self: center;
    }

    .logo {
        width: 15em;
        height: 5em;
    }
}
</style>