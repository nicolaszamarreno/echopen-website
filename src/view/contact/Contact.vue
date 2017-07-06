<template lang="html">
    <div class="contact">
      <div class="row">
        <div class="col-md-8">
          <div id="map">
            <gmap-map
              :center='center'
              :zoom='15'
              style='width: 100%; height: 100%'
            >
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                @click="center=m.position"
              ></gmap-marker>
            </gmap-map>
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
        <div class="contact--content">
          <h1 class="title__medium title__medium--magenta">Contact</h1>
            <div class="contact-block">
              <h4 class="title__small">Adresse</h4>
              <p class="text__regular">Hotel Dieu building A1 - 6th floor </p>
              <p class="text__regular">1 Parvis Notre-Dame - Pl. Jean-Paul II</p>
              <p class="text__regular">75004 Paris, France</p>
            </div>
            <div class="contact-block">
              <h4 class="title__small">Mail</h4>
              <p class="text__regular">contact@echopen.org</p>
            </div>
            <div class="contact-block">
              <h4 class="title__small">Téléphone</h4>
              <p class="tel">01.64.28.92.67</p>
            </div>
             <div class="baseline text__regular ">
          Au plaisir de te rencontrer
          </div>
          </div>
           </div>
        </div>
      </div>
</template>

<script src="./contact_controller.js">
</script>
