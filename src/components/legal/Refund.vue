<template>
    <div class="privacy">
        <div class="privacy-header">
            <div class="privacy-header-left">
                <h1>Refund Policy</h1>
                <p>At Bagheera Carrom, we value our players and their experience. If you have any questions or concerns
                    about payments or refunds, our team is here to assist you promptly and professionally.</p>
            </div>
            <div class="privacy-header-right">
                <img alt="Bagheera carrom, About Bagheera Carrom" class="privacy-logo"
                    src="../../assets/images/logo.png" />
            </div>
        </div>
        <div class="privacy-content">
            <div class="privacy-items">
                <h2>1. Discretionary Refunds</h2>
                <div class="items-head">
                    <p>In certain exceptional cases and at the sole discretion of <strong>Bagheera Carrom OPC Private Limited</strong>
                        ("the Company"), a refund may be issued to the User. Any refund shall be made after deducting
                        applicable cancellation charges and taxes, including GST where applicable.</p>
                </div>
            </div>
            <div class="privacy-items">
                <h2>2. Failed Transactions</h2>
                <div class="items-head">
                    <p>If you complete a transaction on the Platform and the amount is debited from your card or bank
                        account but not credited to your Bagheera Carrom account within 24 hours, please notify us by
                        emailing <strong>support@bagheeracarrom.com</strong> from your registered email address. Include the following
                        details in your email:</p>
                </div>
                <ul>
                    <li>
                        <div class="items-row">
                            <p>Mobile Number</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Transaction ID</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Transaction Value</p>
                        </div>
                    </li>
                    <li>
                        <div class="items-row">
                            <p>Transaction Date</p>
                        </div>
                    </li>
                </ul>
                <div class="items-head" style="margin-top: 1em;">
                    <p>Upon confirmation, if the issue is verified, a refund will be processed within 7 business days
                        and credited to your account on the Platform.</p>
                </div>
            </div>
            <div class="privacy-items">
                <h2>3. Voided Games</h2>
                <div class="items-head">
                    <p>In cases where any game or fixture is cancelled or abandoned without an official result, all game
                        entries are considered void. The contribution amount will be refunded to the User. No winnings
                        or platform fees will be applied for such voided games.</p>
                </div>
                <div class="items-head">
                    <p><strong>Note: </strong>All refunds will be credited to the User’s Bagheera Carrom wallet/account. No cash refunds will be issued.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.privacy {
    background-image: url('../../assets/images/bg2.avif');
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

    .items-head {
        margin-top: 1em;
        margin-bottom: 2em;
    }

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