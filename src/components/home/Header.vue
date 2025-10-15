<template>
    <div class="home">
        <img alt="Bagheera carrom" class="home-image2-mob" src="../../assets/images/home/headerText.avif" />
        <img alt="Bagheera carrom" class="home-image" src="../../assets/images/home/model.avif" />
        <img alt="Bagheera carrom" class="home-image2" src="../../assets/images/home/headerText.avif" />
    </div>
</template>

<style scoped>
.home {
    background-image: url('../../assets/images/bg1.avif');
    height: 89svh;
    color: white;
}

.home-image2-mob {
    width: 100%;
    margin-top: 1em;
    height: 33svh;
}

.home-image {
    display: block;
    justify-self: center;
    margin-top: 1em;
    height: 53svh;
}

.home-image2{display: none;}

@media (min-width: 768px) and (max-width: 1023px) {}

/* Lap */
@media (min-width: 1024px) {
    .home{
        height: 84lvh;
        padding-inline: 12em;
        display: flex;
        justify-content: space-between;
    }

    .home-image {
        margin-top: 15lvh;
        height: 69svh;
    }

    .home-image2 {
        display: inline;
        margin-top: 25lvh;
        height: 40svh;
    }

    .home-image2-mob{display: none;}
}

</style>