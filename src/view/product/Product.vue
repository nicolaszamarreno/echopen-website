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
            {picture: 'home_rio.png', title: '1<sup>ère</sup> conférence à <strong>RIO !</strong>', text: 'Petit blabla comment ca va bien today tu as vu il fait beau dehors et on mange bien a la cantine.', link: ''}
        ]"></banner>
    </section>

    <section class="product-pin">
        <h2 class="title__medium text-center mb-5">Ils nous ont <strong>aidés</strong></h2>

        <pin :options="[
            {picture: 'home_donateur.svg', title: 'Donateur', text: 'Petit blabla comment ca va bien today tu as vu il fait beau dehors et on mange bien a la cantine.', link: ''},
            {picture: 'home_contributeur.svg', title: 'Contributeur', text: 'Petit blabla comment ca va bien today tu as vu il fait beau dehors et on mange bien a la cantine.', link: ''},
            {picture: 'home_developpeur.svg', title: 'Developpeur', text: 'Petit blabla comment ca va bien today tu as vu il fait beau dehors et on mange bien a la cantine.', link: ''}
        ]"></pin>
    </section>
    
    
    <section class="container-fluid no-marginpadding">
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
