<template lang="html">
  <div class="navigation">
    <p class="navigation__title">Menu</p>
    <ul class="navigation__menu">
      <li>
        <router-link :to="{name: 'Home'}">Accueil</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Presenting'}">Qui sommes-nous ?</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Product'}">Le Produit</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Contribute'}">Contribuer</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Contact'}">Contact</router-link>
      </li>
    </ul>
  </div>
</template>


<script src="./navigation_controller.js">
</script>

<style scoped lang="scss" src="./navigation.scss">
</style>
