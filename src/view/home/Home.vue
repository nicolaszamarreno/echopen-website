<template lang="html">
<main class="main home">
    <section class="home-hero">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-10 col-xl-8 col-md-10 text-center text-sm-left">
                    <h1 class="title__big title__big--white ">
                        La <strong>communauté Échopen</strong> s’engage à sauver des vies!
                    </h1>
                    <p class="text__regular text__regular--white mt-3 hidden-xs-down">
                        Iam in altera philosophiae parte. quae est quaerendi ac disserendi, quae logikh dicitur, iste vester plane, ut mihi quidem videtur, inermis ac nudus est. tollit definitiones, nihil de dividendo ac partiendo docet, non quo modo efficiatur concludaturque ratio tradit, non qua via captiosa solvantur ambigua distinguantur ostendit; iudicia rerum in sensibus ponit, quibus si semel aliquid falsi pro vero probatum sit, sublatum esse omne iudicium veri et falsi putat.
                    </p>
                    <a href="" class="button button--white mt-5">Découvrir</a>
                </div>
            </div>
        </div>
    </section>
    <section class="home-revolution section">
        <div class="container">
            <h2 class="title__medium text-center">Un produit <strong>révolutionnaire</strong></h2>
            <h4 class="title__small text-center">Le futur est à notre portée</h4>
            <div class="row">
                <div class="col-lg-4 mt-5">
                    <div class="home-revolution__probe text-center">
                        <img class="home-revolution__probe" src="../../../src/assets/home_probe.svg" alt="Probe">
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex align-items-center mt-4">
                    <div class="home-card">
                        <h4 class="home-card__title">Portatif</h4>
                        <p class="text__regular home-card__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex align-items-center mt-4">
                    <div class="home-card">
                        <h4 class="home-card__title">Portatif</h4>
                        <p class="text__regular home-card__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row flex-row-reverse">
                <div class="col-lg-4 home-revolution__connect mt-5">
                    <div class=" text-center">
                        <img class="home-revolution__connect" src="../../../src/assets/home_connect.svg" alt="Probe">
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex align-items-center mt-4">
                    <div class="home-card">
                        <h4 class="home-card__title">Portatif</h4>
                        <p class="text__regular home-card__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex align-items-center mt-4">
                    <div class="home-card">
                        <h4 class="home-card__title">Portatif</h4>
                        <p class="text__regular home-card__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="home-save">
        <svg class="home-save__cacheTop" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1307.3 235.28">

  <path class="cls-1" d="M-231,168l-.1,124.8S-125.9,112,241.1,227.9c0,0,273.6,96.1,295.7,104s355.4,151.1,539.4,8.3L1074.3,168Z" transform="translate(231.1 -168)"/>
</svg>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-12">
                    <h1 class="title__big title__big--white mb-4">
                    <strong>Des milliards de personne a sauver</strong>
                    </h1>
                    <p class="text__regular text__regular--white">
                        Iam in altera philosophiae parte. quae est quaerendi ac disserendi, quae logikh dicitur, iste vester plane, ut mihi quidem videtur, inermis ac nudus est. tollit definitiones, nihil de dividendo ac partiendo docet, non quo modo efficiatur concludaturque ratio tradit, non qua via captiosa solvantur ambigua distinguantur ostendit; iudicia rerum in sensibus ponit, quibus si semel aliquid falsi pro vero probatum sit, sublatum esse omne iudicium veri et falsi putat.
                    </p>
                    <div class="text-center text-sm-left">
                        <a href="" class="button button--white mt-5">Découvrir</a>
                    </div>
                </div>
            </div>
        </div>
<svg class="home-save__cacheBottom" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1306.3 90.5">

  <path class="cls-1" d="M-231,252s120,91.3,681.1,64.6c0,0,170.9-1.7,625-64.6l.2,89.5-1306.3,1V252Z" transform="translate(231 -252)"/>
</svg>
    </section>
    <section class="home-pin">
        <pin :options="[
            {picture: 'home_donateur.svg', title: 'Donateur', text: 'Petit blabla comment ca va bien today tu as vu il fait beau dehors et on mange bien a la cantine.', link: ''},
            {picture: 'home_contributeur.svg', title: 'Contributeur', text: 'Petit blabla comment ca va bien today tu as vu il fait beau dehors et on mange bien a la cantine.', link: ''},
            {picture: 'home_developpeur.svg', title: 'Developpeur', text: 'Petit blabla comment ca va bien today tu as vu il fait beau dehors et on mange bien a la cantine.', link: ''}
        ]"></pin>
    </section>
    <banner :parameters="[
            {picture: 'home_rio.png', title: '1<sup>ère</sup> conférence à <strong>RIO !</strong>', text: 'Petit blabla comment ca va bien today tu as vu il fait beau dehors et on mange bien a la cantine.', link: ''}
        ]"></banner>
     <section class="home-newsletter">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-9 home-newsletter__baseline text-center text-md-left">
                    <strong>Plus d’actus ?</strong> Rejoingnez la communauté et recevez nos actualités avec notre <b>newsletter</b>
                </div>
                <div class="col-lg-3 text-center mt-4">
                    <a href="" class="button button--blue ">M'inscrire</a>
                </div>
            </div>
        </div>
    </section>
    <section class="home-move">
        <h2 class="title__medium text-center">ECHOPEN, Un projet qui <strong>bouge</strong></h2>
        <h4 class="title__small text-center">Le futur est à notre portée</h4>

        <div class="row align-items-center no-gutters row flex-row-reverse">
            <div class="col-md-6 mt-5 text-right">
                <img class="home-picture" src="../../assets/home_nenes.png" alt="un projet qui bouge">
            </div>
            <div class="col-md-6 pr-lg-5 text-right">
                <div class="home-move__wrapper">
                    <h1 class="home-move__title">
                        Opération Nénés
                    </h1>
                    <h3 class="home-move__underTitle">
                        Echopen, dépiste le cancer du Seins <span>gratuitement</span>
                    </h3>
                    <p class="text__regular home-move__text">
                        Ponsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.
                    </p>
                    <p class="text__regular home-move__text">
                        Ponsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.
                    </p>
                    <div class="text-center text-sm-left">
                        <a href="" class="button button--blue mt-3">Découvrir</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <InteractiveMap></InteractiveMap>
</main>

</template>

<script src="./home_controller.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
