<template>
    <div class="privacy">
        <div class="privacy-header">
            <div class="privacy-header-left">
                <h1>Privacy Policy</h1>
                <p>At Bagheera Carrom, we love hearing from our players, partners, and community. Whether you have a
                    question, feedback, or business inquyiry, our team is here to help you.</p>
            </div>
            <div class="privacy-header-right">
                <img alt="Bagheera carrom, About Bagheera Carrom" class="privacy-logo"
                    src="../../assets/images/logo.png" />
            </div>
        </div>
        <div class="privacy-content">
            <div class="privacy-items">
                <h2>1. Information We Collect</h2>
                <ul>
                    <li>
                        <div class="items-row">
                            <p>Personal Information: Email Address, Phone Number, Name (only if you create an account)
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Device Information: Device type, model, OS version, app version, IP address, Advertising
                                ID.</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Gameplay Data: Game progress, match history, scores, achievements.</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Third-Party Services: We may use Google Play Games, Apple Game Center, Firebase, and Ad
                                networks (AdMob, Unity
                                Ads).</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="privacy-items">
                <h2>2. How We Use Your Information</h2>
                <div class="items-head">
                    <p>We use your information to:</p>
                </div>
                <ul>
                    <li>
                        <div class="items-row">
                            <p>Provide and improve game experience</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Save game progress across devices</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Display relevant ads and offers</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Fix bugs and monitor app performance</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Prevent unauthorized access</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="privacy-items">
                <h2>3. Data Sharing and Security</h2>
                <div class="items-head">
                    <p>We do not sell your personal data. Limited data may be shared with:</p>
                </div>
                <ul>
                    <li>
                        <div class="items-row">
                            <p>Analytics and advertising partners</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Cloud providers for saving game data</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Authorities, only if required by law</p>
                        </div>
                    </li>
                </ul>
                <div class="items-head" style="margin-top: 1em;">
                    <p>We use secure technologies to protect your data.</p>
                </div>
            </div>
            <div class="privacy-items">
                <h2>4. Children's Privacy</h2>
                <div class="items-head">
                    <p>This game is not intended for children under 13. We do not knowingly collect data from children.
                    </p>
                </div>
            </div>
            <div class="privacy-items">
                <h2>5. Your Choices</h2>
                <ul>
                    <li>
                        <div class="items-row">
                            <p>Disable ad personalization in your device settings</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Request data deletion by emailing us</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Opt out of analytics where applicable</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="privacy-items">
                <h2>6. Changes to This Policy</h2>
                <div class="items-head">
                    <p>We may update this policy. Updates will be posted in the app or on our website with the
                        updated
                        date.</p>
                </div>
            </div>
            <div class="privacy-items">
                <h2>7. Contact Us</h2>
                <div class="items-head">
                    <p>If you have any questions or concerns:</p>
                </div>
                <ul>
                    <li>
                        <div class="items-row">
                            <p><strong>Email:</strong> info@bagheeracarrom.com</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p><strong>Website:</strong> www.bagheeracarrom.com</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.privacy {
    background-image: url('../../assets/images/Bg2.png');
    padding-inline: 2em;
    padding-block: 1em;
    color: #adb5bd;
    font-family: sansation;
    background-size: cover;
}

.privacy-header {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.privacy-header-left h1 {
    font-family: rammetto;
    color: #fcc440;
}

.privacy-header-left p {
    font-size: 20px;
}

.privacy-logo {
    justify-self: center;
    height: 8em;
    width: 20em;
}

.privacy-content {
    margin-top: 2em;
}

.privacy-items {
    margin-bottom: 3em;
}

.privacy-items h2 {
    font-family: rammetto;
    color: #fcc440;
    font-size: 15pt;
}

/* .items-row {
    display: flex;
    align-items: center;
    gap: 1em;
} */

.items-row h4 {
    font-family: sansation-bold;
}

@media (min-width: 768px) and (max-width: 1023px) {}

/* Lap */
@media (min-width: 1024px) and (max-width: 1919px) {
    .privacy {
        padding-inline: 8em;
        padding-block: 5em;
    }

    .privacy-header {
        flex-direction: row;
        gap: 3em;
    }

    .privacy-header h1 {
        font-size: 30pt;
    }

    .privacy-header-left p {
        font-size: 22px;
    }

    .privacy-header-poster {
        height: 20em;
    }

    .privacy-content {
        margin-top: 5em;
    }
}

/* H-Lap */
@media (min-width: 1920px) {
    .privacy {
        padding-inline: 10em;
        padding-block: 5em;
    }

    .privacy-header {
        flex-direction: row;
        gap: 10em;
    }

    .privacy-header-left {
        width: 60%;
    }

    .privacy-header-left h1 {
        font-size: 40pt;
        font-family: rammetto;
        color: #fcc440;
    }

    .privacy-header-left p {
        font-size: 25px;
    }

    .privacy-logo {
        height: 10em;
        width: 25em;
    }

    .privacy-content {
        margin-top: 5em;
    }

    .privacy-items h2 {
        font-size: 20pt;
    }
/* 
    .items-head {
        margin-top: 1em;
        margin-bottom: 1.5em;
    } */
/* 
    .items-row {
        display: flex;
        align-items: center;
        gap: 1em;
    } */

    .items-row h4 {
        font-family: sansation-bold;
        font-size: 20px;
    }

    .items-row p,
    .items-head p {
        font-size: 20px;
    }

    li {
        height: 2em;
    }
}
</style>