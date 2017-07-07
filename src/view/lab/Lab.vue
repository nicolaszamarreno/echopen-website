<template lang="html">
<transition name="slide">
  <section class="lab ">
    <div class="container">

    <div class="row">
    <section class="main--content col-lg-8 col-md-12">
      <div class="card elevation-5">
        <h1 class="title__big title__big--blue title__big--bold">
          Issues
        </h1>
        <ul class="issues">
          <li v-for="issue in issues" class="issue">
            <div class="issue__left">
              <p class="text__regular issue__title">
                {{issue.title}}
              </p>
              <span class="text__regular issue__date">{{issue.updated_at | format}}</span>
            </div>
            <div class="issue__right">
              <div class="issue__labels">
                <span v-for="label in issue.labels"
                      class="label text__regular"
                      :style="{
                        background: '#'+label.color
                                    }">
                  {{label.name}}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="card elevation-5">
        <h1 class="title__big title__big--blue title__big--bold">
          Meetup
        </h1>
        <ul class="padding">
          <li v-for="meetup in meetups" class="issue">
            <div class="issue__left">
              <p class="text__regular issue__title">
                {{meetup.title}}
              </p>
              <span class="text__regular issue__date">{{ meetup.location }}</span>
            </div>
            <div class="issue__right text__regular">
              <p>{{meetup.date}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="card elevation-5">
        <h1 class="title__big title__big--blue title__big--bold">
          Actu
        </h1>
        <div class="padding d-flex justify-content-between flex-wrap-reverse">
          <div class="actu_words col-lg-6 col-sm-12">
            <p class="text__big">1ere conférence a <span class="title__big--bold title__big--magenta">RIO</span> !</p>
            <p class="text__regular">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="actu_img col-lg-6 col-sm-12">
            <img src="../../assets/home_picture.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <aside class="right--content col-lg-4 col-md-12">
      <div class="card elevation-5">
        <h1 class="title__big title__big--blue title__big--bold">
          Top contributors
        </h1>
        <ul class="collaborators">
          <li v-for="contributor in contributors" class="issue">
            <div class="issue__left">
              <p class="text__regular issue__title">
                {{contributor.name}}
              </p>
              <span class="text__regular issue__date">
                {{contributor.contribution}}
              </span>
            </div>
            <div class="issue__right badges" >
              <svg version="1.1" class="collab_img" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              	 viewBox="0 0 100 101" style="enable-background:new 0 0 100 101;" xml:space="preserve">
              <path d="M50,9C34.2,9,21.3,21.8,21.3,37.7c0,11.4,6.7,21.3,16.4,25.9V91L50,80.1L62.3,91V63.5C72,58.9,78.7,49,78.7,37.6
              	C78.7,21.8,65.8,9,50,9z M56.7,40.1l1.6,9.3L50,45l-8.3,4.4l1.6-9.3l-6.8-6.6l9.3-1.3l4.2-8.4l4.2,8.4l9.3,1.3L56.7,40.1z"/>
              </svg>

            </div>
          </li>
        </ul>
      </div>
      <section class="challenge">
        <p>
          Relevez les <br> <span class="challenge--big title__big--magenta">Challenges</span>
        </p>
        <span class="text__lighter"> Du code, de nouvelles fonctionnalité, optimisation, <br> interfacage sonde / Android ...</span>
        <p class="challenge--big">Plus de 25 personnes les ont relevés</p>
        <button type="button" name="button" class="button button__lab button--magenta">
          Découvrir
        </button>
      </section>
      <div class="card elevation-5 bg--blue joinus d-flex justify-content-center align-items-center flex-column">
        <h1 class="title__big title__big--bold">Rejoignez-nous</h1>
        <p class="text__regular">
          Participez au projet ECHOPEN en développant <br>
          une solution innovante et révolutionnaire dans le <br>
          monde de la santé <br>
          <br>
        </p>
        <div>
          <input type="text" name="" value="" placeholder="Votre email">
        </div>
        <button type="button" name="button" class="button button__lab button--magenta">
          Découvrir
        </button>
      </div>
    </aside>
    </div>
    <div class="row padding__little">
      <div class="col-lg-12 col-md-12 card elevation-5 d-flex justify-content-around padding__lg flex-wrap">
        <div class="">
          <h1 class="title__regular title__big--blue title__big--bold">
            Nos contribuables
          </h1>
          <h1 class="title__big title__big--bold align-center">
            440
          </h1>
        </div>
        <div class="">
          <h1 class="title__regular title__big--blue title__big--bold align-center">
            Dons collectés
          </h1>
          <h1 class="title__big title__big--bold align-center">
            12.5k
          </h1>
        </div>
        <div class="">
          <h1 class="title__regular title__big--blue title__big--bold align-center">
            Challenge
          </h1>
          <h1 class="title__big title__big--bold align-center">
            37
          </h1>
        </div>
        <div class="">
          <h1 class="title__regular title__big--blue title__big--bold align-center">
            Problemes résolu
          </h1>
          <h1 class="title__big title__big--bold align-center">
            567
          </h1>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-between padding__little flex-wrap three-card">
      <div class="separate  card elevation-5">
        <h1 class="title__big title__big--blue title__big--bold">
          Soft issues
        </h1>
        <ul class="issues__little">
          <li v-for="issue in issues" class="issue">
            <div class="issue__left">
              <p class="text__regular issue__title">
                {{issue.title}}
              </p>
              <span class="text__regular issue__date">{{issue.updated_at | format}}</span>
            </div>
            <div class="issue__right">
              <div class="issue__labels">
                <span v-for="label in issue.labels"
                      class="label text__regular"
                      :style="{
                        background: '#'+label.color
                                    }">
                  {{label.name}}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="separate card elevation-5">
        <h1 class="title__big title__big--blue title__big--bold">
          Hard issues
        </h1>
        <ul class="issues__little">
          <li v-for="issue in issues" class="issue">
            <div class="issue__left">
              <p class="text__regular issue__title">
                {{issue.title}}
              </p>
              <span class="text__regular issue__date">{{issue.updated_at | format}}</span>
            </div>
            <div class="issue__right">
              <div class="issue__labels">
                <span v-for="label in issue.labels"
                      class="label text__regular"
                      :style="{
                        background: '#'+label.color
                                    }">
                  {{label.name}}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="separate card elevation-5 padding d-flex flex-column">
        <h1 class="title__big title__big--blue title__big--bold">
          Documentation
        </h1>
        <button type="button" name="button" class="button button__lab button--blue">
          Go to Documentation
        </button>
      </div>
    </div>
    </div>
  </section>
</transition>
</template>

<script src="./lab_controller.js">
</script>

<style scoped lang="scss" src="./lab.scss">
</style>
