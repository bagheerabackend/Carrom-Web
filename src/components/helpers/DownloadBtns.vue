<template>
    <div class="download-btn-div">
        <!-- <a href="" class="download-btn-about">
            <svg width="5em" height="5em" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3"
                stroke="#fcc440" fill="none">
                <path
                    d="M12.36,53.33V10.67a1,1,0,0,1,1.56-.91L51.11,31a1,1,0,0,1,0,1.81L13.93,54.24A1.05,1.05,0,0,1,12.36,53.33Z" />
                <line x1="12.36" y1="10.67" x2="42.07" y2="38.02" />
                <line x1="12.36" y1="53.33" x2="41.24" y2="25.35" />
            </svg>
            <span>
                <span style="font-family: sansation; font-size: medium;">Download on</span>
                Google Play
            </span>
        </a> -->
        <a href="" class="download-btn-about">
            <svg fill="#fcc440" width="5em" height="5em" viewBox="-3 -2 24 24" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin" class="jam jam-android">
                <path
                    d='M1.247 6.51h-.051c-.656 0-1.19.537-1.19 1.19v5.183c0 .656.534 1.19 1.19 1.19h.052c.655 0 1.19-.535 1.19-1.19V7.7c-.001-.654-.536-1.19-1.191-1.19zM3.007 14.883c0 .602.492 1.092 1.094 1.092h1.17v2.8c0 .657.535 1.191 1.19 1.191h.05c.657 0 1.192-.535 1.192-1.192v-2.799h1.634v2.8c0 .657.538 1.191 1.192 1.191h.05c.657 0 1.191-.535 1.191-1.192v-2.799h1.17c.601 0 1.093-.49 1.093-1.092V6.701H3.007v8.182zM11.266 1.738l.929-1.433a.197.197 0 1 0-.33-.215l-.963 1.483a6.276 6.276 0 0 0-2.38-.462c-.854 0-1.658.166-2.382.462L5.179.09a.197.197 0 0 0-.275-.058.197.197 0 0 0-.058.273l.93 1.433C4.1 2.56 2.97 4.107 2.97 5.882c0 .11.006.217.016.323h11.07c.008-.106.014-.214.014-.323 0-1.775-1.13-3.322-2.805-4.144zM5.955 4.305a.532.532 0 1 1-.002-1.064.532.532 0 0 1 .002 1.064zm5.132 0a.532.532 0 1 1-.003-1.064.532.532 0 0 1 .003 1.064zM15.845 6.51h-.05c-.655 0-1.191.537-1.191 1.19v5.183c0 .656.537 1.19 1.191 1.19h.05c.657 0 1.191-.535 1.191-1.19V7.7c0-.654-.535-1.19-1.191-1.19z' />
            </svg>
            <span>
                <span style="font-family: sansation; font-size: medium;">Download on</span>
                Android
            </span>
        </a>
        <a href="" class="download-btn-about">
            <svg fill="#fcc440" width="5em" height="5em" viewBox="-3.5 -2 24 24" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin" class="jam jam-apple">
                <path
                    d='M13.623 10.627c-.025-2.533 2.066-3.748 2.159-3.808-1.175-1.72-3.005-1.955-3.657-1.982-1.557-.158-3.039.917-3.83.917-.788 0-2.008-.894-3.3-.87C3.299 4.909 1.734 5.87.86 7.39c-1.764 3.06-.452 7.595 1.267 10.077.84 1.215 1.842 2.58 3.157 2.53 1.266-.05 1.745-.819 3.276-.819 1.531 0 1.962.82 3.302.795 1.363-.026 2.226-1.239 3.06-2.457.965-1.41 1.362-2.775 1.386-2.845-.03-.013-2.658-1.02-2.684-4.045zm-2.518-7.433c.698-.847 1.169-2.022 1.04-3.194C11.14.04 9.921.67 9.2 1.515c-.647.75-1.214 1.945-1.062 3.094 1.122.088 2.268-.57 2.967-1.415z' />
            </svg>
            <span
                style="display: flex; flex-direction: column; font-size: x-large; font-family: rammetto; justify-content: center; align-items: center;">
                <span style="font-family: sansation; font-size: medium;">Download on</span>
                App Store
            </span>
        </a>
    </div>
</template>

<style>
.download-btn-div {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.download-btn-about {
    display: flex;
    gap: 0.5em;
    padding: 0.5em 1.5em;
    border-radius: 2em;
    color: #fcc440;
    border: 1px solid #fcc440;
    text-decoration: none;
}

.download-btn-about span {
    display: flex;
    flex-direction: column;
    font-size: x-large;
    font-family: rammetto;
    justify-content: center;
    align-items: center;
}

@media (min-width: 768px) and (max-width: 1023px) {}

/* Lap */
@media (min-width: 1024px) and (max-width: 1919px) {
    .download-btn-div {
        display: flex;
        flex-direction: row;
        gap: 2em;
    }

    .download-btn-about {
        display: flex;
        gap: 0.5em;
        padding: 0.5em 1em;
        border-radius: 2em;
        color: #fcc440;
        border: 1px solid #fcc440;
        text-decoration: none;
    }

    .download-btn-about span {
        display: flex;
        flex-direction: column;
        font-size: large;
        font-family: rammetto;
        justify-content: center;
        align-items: center;
    }
}

/* H-Lap */
@media (min-width: 1920px) {
    .download-btn-div {
        flex-direction: row;
        gap: 2em;
    }

    .download-btn-about {
        display: flex;
        gap: 0.5em;
        padding: 0.5em 1.5em;
        border-radius: 2em;
        color: #fcc440;
        border: 1px solid #fcc440;
        text-decoration: none;
    }
}
</style>