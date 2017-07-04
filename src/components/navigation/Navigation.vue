<template lang="html">
    <ul>
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
</template>


<script src="./navigation_controller.js">
</script>

<style scoped lang="scss" src="./navigation.scss">
</style>
