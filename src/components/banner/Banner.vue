<template lang="html">
    <section class="banner">
        <svg class="banner__patternTop" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 63.34">
              <path d="M0,0H1280V63.34Q344.52-26.88,0,35.11Z" transform="translate(0 0)"/>
            </svg>
            <div class="row no-gutters align-items-center">
                <div class="col-lg-6 col-md-6 text-left">
                    <img class="home-picture" :src="'assets/' + parameters[0].picture" alt="un projet qui bouge">
                </div>
                <div class="col-lg-4 col-md-6 pl-md-5 banner__desc">
                    <h1 v-html="parameters[0].title" class="banner__title">
                    </h1>
                    <p class="banner__text">
                        {{ parameters[0].text }}
                    </p>
                    <div class="text-center text-sm-left">
                        <a href="" class="button button--white mt-5">Découvrir</a>
                    </div>
                </div>
            </div>
            <svg class="banner__patternBottom" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 77.1">
                <path d="M0,13.2Q480.75,114.75,1280,0V77.1H0Z" transform="translate(0 0)"/>
            </svg>
        </section>
</template>


<script src="./banner_controller.js">
</script>

<style lang="scss" >
</style>
