<template lang="html">
    <header class="header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-4 col-md-3">
                    <div class="header__logo"></div>
                </div>
                <div class="col-5 col-md-7 hidden-lg-up">
                  <p class="header__don">Faire un don</p>
                </div>
                <div class="col-3 col-md-2 col-lg-9 text-right">
                    <nav class="header__nav">
                        <div @click='toggleMenu' class="header__burger">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <navigation @incrementCount="incrementC"></navigation>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script src="./header_controller.js">
</script>

<style lang="scss">
</style>

