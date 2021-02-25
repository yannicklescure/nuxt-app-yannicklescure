<template>
  <div class="container">
    <div ref="main" class="main d-flex p-3">
      <div class="d-flex flex-grow-1 flex-column justify-content-between align-items-center">
        <div class="d-flex flex-column align-items-center w-100">
          <img src="/profile_avatar.jpg" width="96" height="96" alt="yannick lescure" class="my-2 rounded-circle">
          <div class="my-2 text-dark">@yannicklescure</div>
        </div>
        <div ref="cards" class="d-flex flex-column align-items-center">
          <Card :item="card1" />
          <Card :item="card2" />
          <Card :item="card3" />
          <Card :item="card4" />
        </div>
        <div ref="links" class="d-flex justify-content-between align-items-center py-3">
          <a href="https://twitter.com/yannicklescure" target="_blank" class="text-body">
            <font-awesome-icon :icon="['fab', 'twitter']" class="icon-24" />
          </a>
          <a href="https://www.instagram.com/yannicklescure" target="_blank" class="text-body">
            <font-awesome-icon :icon="['fab', 'instagram']" class="icon-24" />
          </a>
          <a href="https://www.youtube.com/c/yannicklescuretv" target="_blank" class="text-body">
            <font-awesome-icon :icon="['fab', 'youtube']" class="icon-24" />
          </a>
          <a href="mailto:contact@yannicklescure.com" class="text-body">
            <font-awesome-icon :icon="['fas', 'envelope']" class="icon-24" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    containerHeight () {
      // return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      return document.documentElement.clientHeight || document.body.clientHeight;
    },
    cardsWidth () {
      return this.$refs.cards.clientWidth - 16
    },
    card1 () {
      return {
        name: 'card-1',
        url: 'https://www.cuisinierrebelle.com/u/yannicklescure',
        content: 'Aller voir mes recettes ! :)'
      }
    },
    card2 () {
      return {
        name: 'card-2',
        url: 'mailto:contact@yannicklescure.com',
        content: 'Me contacter par courriel'
      }
    },
    card3 () {
      return {
        name: 'card-3',
        url: 'https://t.me/yannicklescure',
        content: 'Message privé sur Telegram ...'
      }
    },
    card4 () {
      return {
        name: 'card-4',
        url: 'https://paypal.me/yannicklescure',
        content: 'Faire un don'
      }
    },
  },
  // methods: {
    // setDOMScale () {
    // }
  // },
  mounted () {
    this.$refs.main.style.height = `${ this.containerHeight }px`;
    this.$refs.links.style.width = `${ this.cardsWidth }px`;
  },
}
</script>
