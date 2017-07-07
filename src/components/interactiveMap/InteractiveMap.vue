<template lang="html">
  <section class="interactiveMap__container" :class="{mobile: isMobile}">
    <svg class="interactiveMap__draw"></svg>
    <div class="character__card col-md-3 col-xs-12">
      <img :src="cardData.imgPath" :class="{change:transitionClass}" alt="">
      <p :class="{change:transitionClass}">{{cardData.description}}</p>
      <div class="">
        <a href="#" class="pull-right">Voir</a>
      </div>
    </div>
    <div class="character__container">
      <div  class="character"
            v-for="character in characters"
            v-on:click="changeCard(character)"
            v-bind:style="{ top: character.y + '%',
                            left: character.x + '%',
                            height: character.s + 'px',
                            width: character.s + 'px',
                            'background-image': 'url('+character.imgPath+')'
                          }"
            >
      </div>
    </div>
    <div class="row">
    </div>
  </section>
</template>

<script src="./InteractiveMap_controller.js">
</script>

<style lang="scss">
</style>
