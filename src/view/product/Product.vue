<template lang="html">
  <div class="product">
    <section class="countrySlider">
    
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

      <div class="countrySlider__content" :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
        <div class="countrySlider__content--filter"></div>
        <div class="countrySlider__content--wrapper">
          <p class="countrySlider__date">1973</p>
          <p class="countrySlider__text">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          </div>
      </div>
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
</template>

<script src="./product_controller.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
