<template lang="html">
<div class="navigation">
    <ul>
        <li>
            <router-link :to="{name: 'Home'}">Accueil</router-link>
        </li>
        <li @click="closeMenu">
            <router-link :to="{name: 'Product'}">Le Produit</router-link>
        </li>
        <li @click="closeMenu">
            <router-link :to="{name: 'Lab'}">Contribuer</router-link>
        </li>
        <li @click="closeMenu">
            <router-link :to="{name: 'Contact'}">Contact</router-link>
        </li>
        <li @click="closeMenu">
            <router-link :to="{name: 'Don'}">Faire un don</router-link>
        </li>
    </ul>
  </div>
</template>


<script src="./navigation_controller.js">
</script>

<style lang="scss" >
</style>
