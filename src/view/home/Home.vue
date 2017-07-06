<template lang="html">
<transition name="slide">
    <main class="main home">
        <section class="home-hero">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-10 col-xl-8 col-md-10 text-center text-sm-left">
                        <h1 class="title__big title__big--white ">
                            La <strong>communauté Échopen</strong> s’engage à sauver des vies!
                        </h1>
                        <p class="text__regular text__regular--white mt-3 hidden-xs-down">
                            Lancée en 2014, Echopen a pour ambition de sauver des millions de vies partout dans le monde ! Grâce à une communauté diverse et variée, composée de développeurs, d’ingénieurs et médecins. Nous avons conçu un produit révolutionnaire : EchoLife, un écho-stéthoscope portable et connecté !
                                <strong>Participer à l’aventure dès maintenant en rejoignant notre communauté ! </strong>
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
                            <h4 class="home-card__title">Smart</h4>
                            <p class="text__regular home-card__text">
                                L’EchoLife est une sonde “intelligente” grâce à son application, il est possible de sélectionner en quelques secondes la zone à analyser et de lancer l’échographie !
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-flex align-items-center mt-4">
                        <div class="home-card">
                            <h4 class="home-card__title">Robuste</h4>
                            <p class="text__regular home-card__text">
                                Construit grâce à des matériaux robustes, l’EchoLife a été développé pour résister à toutes les situations possibles !
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
                                Sa petite taille et son faible poids lui permettent d’être glissé dans n’importe quel sac ou poche !

                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-flex align-items-center mt-4">
                        <div class="home-card">
                            <h4 class="home-card__title">Communautaire</h4>
                            <p class="text__regular home-card__text">
                                EchoPen est avant tout une communauté ouverte, permettant d’échanger entre utilisateurs via un forum dédié au contributeur de l’association et aux utilisateurs d’EchoLife.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="home-save">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <h1 class="title__big title__big--white mb-4">
                        <strong>Des millions de personnes à sauver ! </strong>
                        </h1>
                        <p class="text__regular text__regular--white">
                            Aujourd’hui, des millions de personnes meurent chaque année suite à un diagnostic trop faible ou à une prise en charge difficile. EchoLife permet un diagnostic plus simple, plus rapide, moins coûteux qu’un échographe classique.

                            <strong>Participer à EchoPen c'est avant tout, sauver des vies.</strong>
                        </p>
                        <div class="text-center text-sm-left">
                            <a href="" class="button button--white mt-5">Découvrir</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="home-pin">
            <pin :options="[
                {picture: 'home_donateur.svg', title: 'Donateur', text: 'Donner à une association était pour moi essentiel. À la différence d’autres associations, EchoPen a pour ambition de développeur des produits innovants. C’est pour cette raison que j’ai choisi de donner à EchoPen. ', link: ''},
                {picture: 'home_contributeur.svg', title: 'Contributeur', text: 'Participer à l’aventure EchoPen, c’est avant tout participer à une aventure humaine, collaborative Devenir contributeur m’a permis de développer mes compétences à travers une équipe riche et motivée à réaliser un projet fou ! ', link: ''},
                {picture: 'home_developpeur.svg', title: 'Developpeur', text: 'Développer au sein d’EchoPen, c’est participé à projet OpenSource innovant et intéressant. Toute notre équipe est prête à aider les nouveaux développeurs ! ', link: ''}
            ]"></pin>
        </section>
        <banner :parameters="[
                {picture: 'home_rio.png', title: '1<sup>ère</sup> conférence à <strong>RIO !</strong>', text: 'Venez nous rencontrer lors d’une conférence unique dirigée par notre fondateur Medhi Benchoufi. Au programme : une démonstration de l’EchoLife et un colloque composé de nombreux médecins. ', link: ''}
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
                            Nous serons présents partout en France durant l’été, pour vous faire découvrir l’EchoLife grâce à un dépistage gratuit du cancer du sein !
                        </p>
                        <p class="text__regular home-move__text">
                            N’hésitez pas à nous suivre les réseaux sociaux pour savoir quand nous serons dans votre ville !

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
</transition>
</template>

<script src="./home_controller.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
