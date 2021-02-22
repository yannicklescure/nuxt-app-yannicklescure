<template>
  <div class="container">
    <div id="container" class="d-flex vh-100 p-3">
      <div class="d-flex flex-grow-1 flex-column justify-content-between align-items-center">
        <div class="d-flex flex-column align-items-center w-100">
          <img src="/profile_avatar.jpg" width="96" height="96" alt="yannick lescure" class="my-2 rounded-circle">
          <div class="my-2 text-dark">@yannicklescure</div>
        </div>
        <div class="d-flex flex-column align-items-center w-100">
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
        <div class="d-flex justify-content-center align-items-center py-3">
          <a href="https://twitter.com/yannicklescure" target="_blank" class="px-3">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a href="https://www.instagram.com/yannicklescure" target="_blank" class="px-3">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="https://www.youtube.com/c/yannicklescuretv" target="_blank" class="px-3">
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
          <a href="mailto:contact@yannicklescure.com" class="px-3">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
