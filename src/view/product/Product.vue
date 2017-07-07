<template lang="html">
<transition name="slide">
  <div class="product">
  <div class="container-fluid countrySlider__container">
        <div class="row countrySlider__tab">
          <div class="col-4 countrySlider__tabItem afrique active">
            <p class="countrySlider__tabItemText">#Afrique</p>
          </div>
          <div class="col-4 countrySlider__tabItem europe">
            <p class="countrySlider__tabItemText">#Europe</p>
          </div>
          <div class="col-4 countrySlider__tabItem asie">
            <p class="countrySlider__tabItemText">#Asie</p>
          </div>
        </div>
      </div>
    <section class="countrySlider">
      <div class="countrySlider__content">
        <div v-for="(el, index) in dateObject" class="countrySlider__item" :style="{ 'background-image': 'url(' + el.img + ')' }" >
            <p class="countrySlider__date">{{ el.date }}</p>
            <p class="countrySlider__text">{{ el.text }}</p>
        </div>
      </div>
      
        <div class="countrySlider__selection">
          <div v-for="(dateItem, index) in dateObject" class="countrySlider__selectionChoice">{{ dateItem.date }}
          </div>
        </div>
    </section>

    <section class="product-banner">
        <banner :parameters="[
            {picture: 'home_rio.png', title: '1<sup>ère</sup> <strong>conférence</strong>', text: 'Venez nous rencontrer lors d’une conférence unique dirigée par notre fondateur Medhi Benchoufi. Au programme : une démonstration de l’EchoLife et un colloque composé de 	nombreux médecins.', link: ''}
        ]"></banner>
    </section>

    <section class="product-pin">
        <h2 class="title__medium text-center mb-5">Ils nous ont <strong>aidés</strong></h2>

        <pin :options="[
            {picture: 'portrait1.png', title: 'Donateur', text: 'Donner à une association était pour moi essentiel. À la différence d’autres associations, EchoPen a pour ambition de développeur des produits innovants. C’est pour cette raison que j’ai choisi de donner à EchoPen. ', link: ''},
            {picture: 'portrait2.png', title: 'Contributeur', text: 'Participer à l’aventure EchoPen, c’est avant tout participer à une aventure humaine, collaborative Devenir contributeur m’a permis de développer mes compétences à travers une équipe riche et motivée à réaliser un projet fou !', link: ''},
            {picture: 'portrait3.png', title: 'Développeur', text: 'Développer au sein d’EchoPen, c’est participé à projet OpenSource innovant et intéressant. Toute notre équipe est prête à aider les nouveaux développeurs !', link: ''}
        ]"></pin>
    </section>
    
    
    <section class="container-fluid no-marginpadding product-partner">
      <div class="row no-marginpadding">
        <div class="col-md-6 no-marginpadding">
          <bepartner></bepartner>
        </div>
         <div class="col-md-6 no-marginpadding">
          <becontributor></becontributor>
        </div>
      </div>
    </section>
  </div>
</transition>

</template>

<script src="./product_controller.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
