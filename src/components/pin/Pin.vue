<template lang="html">
    <div class="container pin">
        <div class="pin__list main-carousel">
            <div class="pin__item">
                <div class="pin__wrapper">
                    <figure class="pin__picture">
                        <img :src="'../assets/' + options[0].picture" alt="Développeur">
                    </figure>
                    <figcaption class="pin__legend">
                        {{ options[0].title }}
                    </figcaption>
                </div>
                <p class="pin__text">
                    {{ options[0].text }}
                </p>
                <a href="" class="pin__button">
                    Voir +
                </a>
            </div>
            <div class="pin__item pin__item--big">
                <div class="pin__wrapper">
                    <figure class="pin__picture">
                        <img :src="'assets/' + options[1].picture" alt="Développeur">
                    </figure>
                    <figcaption class="pin__legend">
                        {{ options[1].title }}
                    </figcaption>
                </div>
                <p class="pin__text">
                    {{ options[1].text }}
                </p>
                <a href="" class="pin__button">
                    Voir +
                </a>
            </div>
            <div class="pin__item">
                <div class="pin__wrapper">
                    <figure class="pin__picture">
                        <img :src="'assets/' + options[2].picture" alt="Développeur">
                    </figure>
                    <figcaption class="pin__legend">
                        {{ options[2].title }}
                    </figcaption>
                </div>

                <p class="pin__text">
                    {{ options[2].text }}
                </p>
                <a href="a" class="pin__button">
                    Voir +
                </a>
            </div>
        </div>
    </div>
</template>


<script src="./pin_controller.js">
</script>

<style lang="scss" >
</style>
