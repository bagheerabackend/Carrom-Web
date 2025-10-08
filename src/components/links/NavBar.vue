<template>
    <div class="navbar" :class="{ 'scrolled': isScrolled }">

        <!-- Support -->
        <div class="support" :class="{ 'hidden': isScrolled }">
            <!-- <div class="support-list">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#adb5bd">
                    <path
                        d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z" />
                </svg>
                <p>Support</p> |
            </div> -->
            <div class="support-list">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#adb5bd">
                    <path
                        d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
                <a href="mailto:support@bagheeracarrom.com">support@bagheeracarrom.com</a>
            </div>
        </div>

        <!-- Nav -->
        <div class="nav-setting">
            <div class="nav-items">
                <a href="/" @click.prevent="navigate('/')" :class="{ active: currentpath === '/' }"><img
                        alt="Bagheera carrom" class="logo" src="../../assets/images/logo.png" /></a>
                <div class="nav-links">
                    <a href="/" @click.prevent="navigate('/')" :class="{ active: currentpath === '/' }">Home</a>
                    <a href="/about" @click.prevent="navigate('/about')"
                        :class="{ active: currentpath === '/about' }">About</a>
                    <a href="/game" @click.prevent="navigate('/game')"
                        :class="{ active: currentpath === '/game' }">Games</a>
                    <a href="/contact" @click.prevent="navigate('/contact')"
                        :class="{ active: currentpath === '/contact' }">Contact</a>
                </div>

                <!-- Mobile Menu Button -->
                <button class="menu-button golden-border" @click="isMenuOpen = true" aria-label="Open menu">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#adb5bd">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Dialog -->
        <div class="menu-dialog" :class="{ 'open': isMenuOpen }" @click.self="isMenuOpen = false">
            <div class="menu-content">
                <button class="close-button golden-border" @click="isMenuOpen = false" aria-label="Close menu">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#adb5bd">
                        <path
                            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </button>
                <nav class="mobile-nav">
                    <a href="/" @click="isMenuOpen = false" :class="{ active: currentpath === '/' }">Home</a>
                    <a href="/about" @click="isMenuOpen = false" :class="{ active: currentpath === '/about' }">About</a>
                    <a href="/game" @click="isMenuOpen = false" :class="{ active: currentpath === '/game' }">Games</a>
                    <a href="/contact" @click="isMenuOpen = false"
                        :class="{ active: currentpath === '/contact' }">Contact</a>
                </nav>
                <div class="mobile-support">
                    <!-- <div class="support-item">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                            fill="#adb5bd">
                            <path
                                d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z" />
                        </svg>
                        <span>Support</span>
                    </div> -->
                    <div class="support-item">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                            fill="#adb5bd">
                            <path
                                d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                        </svg>
                        <a href="mailto:support@bagheeracarrom.com">support@bagheeracarrom.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentpath: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isScrolled: false,
            isMenuOpen: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 150
        }
    },
    watch: {
        isMenuOpen(newVal) {
            if (newVal) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = ''
            }
        }
    }
}
</script>

<style scoped>
/* Mobile */
.navbar {
    z-index: 1;
    font-family: sansation;
    background: #000;
    /* height: 11svh; */
}

.navbar.scrolled {
    /* height: 10dvh; */
    position: fixed;
    width: 100%;
}

.support {
    display: none;
}

.support-item a, .support-list a {
    color: #adb5bd;
    text-decoration: none;
}

.nav-setting {
    padding: 1em;
}

.nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 8em;
    height: 2em;
}

.nav-links {
    display: none;
}

.menu-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
}

.golden-border {
    position: relative;
    border: none;
    background: #000;
    border-radius: 6px;
    padding: 6px 8px;
}

.golden-border::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px;
    padding: 2px;
    background: linear-gradient(135deg, #FFD700, #fcc440, #FFD700);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
}

/* Mobile Dialog */
.menu-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #000;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.menu-dialog.open {
    opacity: 1;
    visibility: visible;
}

.menu-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: #0c0b0b;
    border-left: 1px solid #fcc440;
    padding: 2em 1.5em;
    transform: translateX(100%);
    transition: transform 0.3s ease;
}

.menu-dialog.open .menu-content {
    transform: translateX(0);
}

.close-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-bottom: 2em;
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 2em;
}

.mobile-nav a {
    text-decoration: none;
    color: #adb5bd;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.1em;
    transition: color 0.3s ease;
}

.mobile-nav a:hover, .support-item a:hover, .support-list a:hover {
    color: #fcc440;
}

.mobile-support {
    margin-top: 3em;
    padding-top: 2em;
    border-top: 1px solid #fcc440;
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.support-item {
    display: flex;
    align-items: center;
    gap: 0.5em;
    color: #adb5bd;
    font-size: 0.9em;
}

.nav-links a.active,
.mobile-nav a.active {
    color: #fcc440;
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
    .nav-setting {
        padding: 1.5em 3em;
    }

    .logo {
        width: 10em;
        height: 3em;
    }

    .menu-content {
        width: 350px;
        padding: 2.5em 2em;
    }

    .mobile-nav a {
        font-size: 1.2em;
    }
}

/* Lap */
@media (min-width: 1024px) and (max-width: 1919px) {
    .navbar {
        font-family: sansation;
        background: #000;
        /* height: 16dvh; */
    }

    .navbar.scrolled {
        /* height: 10dvh; */
        position: fixed;
        width: 100%;
    }

    .support {
        padding-inline: 8em;
        padding-bottom: 0;
        display: flex;
        justify-content: end;
        color: #adb5bd;
        gap: 1em;
    }

    .support.hidden {
        display: none;
    }

    .support-list {
        margin: 0.5em 0;
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    .logo {
        width: 11em;
        height: 2.5em;
    }

    .nav-setting {
        padding: 0;
        padding-inline: 8em;
    }

    .nav-items {
        border-top: 1px #495057 solid;
        padding-block: 0.5em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2em;
    }

    .navbar.scrolled .nav-items {
        border-top: 0;
        height: 4em;
    }

    .nav-links {
        display: flex;
        gap: 4em;
    }

    .nav-links a {
        text-decoration: none;
        color: #adb5bd;
        font-weight: bold;
        text-transform: uppercase;
    }

    .nav-links a:hover {
        color: #fcc440;
    }

    .menu-button {
        display: none;
    }

    .menu-dialog {
        display: none;
    }
}

/* Hig Lap */
@media (min-width: 1919px) {
    .navbar {
        font-family: sansation;
        background: #000;
        /* height: 16dvh; */
    }

    .support {
        padding-inline: 8em;
        padding-top: 0.5em;
        display: flex;
        justify-content: end;
        color: #adb5bd;
        gap: 1em;
    }

    .support.hidden {
        display: none;
    }

    .support-list {
        margin: 0.5em 0;
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    .logo {
        width: 12em;
        height: 3em;
    }

    .nav-setting {
        padding-inline: 8em;
    }

    .nav-items {
        border-top: 1px #495057 solid;
        padding-block: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2em;
    }

    .navbar.scrolled .nav-items {
        border-top: 0;
    }

    .nav-links {
        display: flex;
        gap: 4em;
    }

    .nav-links a {
        text-decoration: none;
        color: #adb5bd;
        font-weight: bold;
        text-transform: uppercase;
        transition: color 0.3s ease;
    }

    .nav-links a:hover {
        color: #fcc440;
    }

    .menu-button {
        display: none;
    }

    .menu-dialog {
        display: none;
    }
}
</style>