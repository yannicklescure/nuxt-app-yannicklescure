<template>
  <div class="container">
    <div ref="main" class="main d-flex p-3">
      <div class="d-flex flex-grow-1 flex-column justify-content-between align-items-center">
        <div class="d-flex flex-column align-items-center w-100">
          <img src="/profile_avatar.jpg" width="96" height="96" alt="yannick lescure" class="my-2 rounded-circle">
          <div class="my-2 text-dark">@yannicklescure</div>
        </div>
        <div ref="buttons" class="d-flex flex-column align-items-center">
          <div class="card w-100 my-2">
            <div class="card-body text-center">
              <a href="https://www.cuisinierrebelle.com/u/yannicklescure" target="_blank" class="p-2 stretched-link text-decoration-none">Aller voir mes recettes ! :)</a>
            </div>
          </div>
          <div class="card w-100 my-2">
            <div class="card-body text-center">
              <a href="mailto:contact@yannicklescure.com" target="_blank" class="p-2 stretched-link text-decoration-none">Me contacter par courriel</a>
            </div>
          </div>
          <div class="card w-100 my-2">
            <div class="card-body text-center">
              <a href="https://paypal.me/yannicklescure" target="_blank" class="p-2 stretched-link text-decoration-none">Faire un don</a>
            </div>
          </div>
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
  computed: {
    containerHeight () {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    },
    buttonsWidth () {
      return this.$refs.buttons.clientWidth - 16
    }
  },
  // methods: {
    // setDOMScale () {
    // }
  // },
  mounted () {
    this.$refs.main.style.height = `${ this.containerHeight }px`;
    this.$refs.links.style.width = `${ this.buttonsWidth }px`;
  },
}
</script>
