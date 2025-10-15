<template>
    <div class="contact-header">
        <div class="contact-header-right">
            <img alt="Bagheera carrom, About Bagheera Carrom" class="contact-header-poster"
                src="../../assets/images/contact/contact-header.svg" />
        </div>
        <div class="contact-header-left">
            <h1>Contact Us</h1>
            <p>At Bagheera Carrom, we love hearing from our players, partners, and community. Whether you have a
                question, feedback, or business inquyiry, our team is here to help you.</p>
        </div>
    </div>
</template>

<style>
.contact-header {
    padding-inline: 2em;
    padding-block: 1em;
    background-image: url('../../assets/images/bg2.avif');
    color: #adb5bd;
    font-family: sansation;
    background-size: cover;
    display: flex;
    flex-direction: column;
}

.contact-header-left h1 {
    font-family: rammetto;
    color: #fcc440;
}

.contact-header-left p {
    font-size: 20px;
}

.contact-header-poster {
    justify-self: center;
    height: 20em;
}

@media (min-width: 768px) and (max-width: 1023px) {}

/* Lap */
@media (min-width: 1024px) and (max-width: 1919px) {
    .contact-header {
        flex-direction: row;
        gap: 3em;
        padding-inline: 8em;
        padding-block: 5em;
    }

    .contact-header h1 {
        font-size: 30pt;
    }

    .contact-header-left p {
        font-size: 22px;
    }

    .contact-header-poster {
        height: 20em;
    }
}

/* H-Lap */
@media (min-width: 1920px) {
    .contact-header {
        flex-direction: row;
        gap: 10em;
        padding-inline: 10em;
        padding-block: 5em;
    }

    .contact-header-left h1 {
        font-size: 40pt;
        font-family: rammetto;
        color: #fcc440;
    }

    .contact-header-left p {
        font-size: 25px;
    }

    .contact-header-poster {
        height: 25em;
    }
}
</style>