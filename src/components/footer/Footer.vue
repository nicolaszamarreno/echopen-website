<template lang="html">
  <footer class="footer">
    <div class="container footer__container">
      <div class="row align-items-center footer__row">
        <div class="hidden-xs-down col-md-3 col-lg-2">
          <div class="logo">
            <img alt="a" class="footerLogo" :src="img">
          </div>
        </div>
        <div class="hidden-xs-down col-md-12 col-lg-7">
          <div class="navigation">
            <p class="navigation__title">Menu</p>
            <div class="navigation__list">
              <navigation></navigation>
            </div>
          </div>
        </div>
        <div class="hidden-xs-down col-md-12 col-lg-3">
          <newsletter></newsletter>
        </div>
        <div class="col-9 col-sm-10 col-md-11 col-lg-11">
          <ul class="copyright">
          	<li>Licenses</li>
          	<li>.Echopen</li>
          </ul>
        </div>
        <div class="col-3 col-sm-2 col-md-1 col-lg-1">
          <ul class="socialnetwork">
            <li>
              <a href="https://www.facebook.com/groups/echopen/">
                <img alt="Facebook" :src="social_network.facebook">
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <img alt="Instagram" :src="social_network.insta">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script src="./footer_controller.js">
</script>

<style scoped lang="scss">
</style>

