<template>
  <div class="home" id="page-top">
    <Navbar />
    <header class="bg-primary text-white text-center">
      <div class="container d-flex align-items-end flex-column">
        <div class="row d-flex align-items-center flex-row-reverse p-4">
          <div class="rounded col align-self-center">
            <img
              class="bg-white rounded"
              src="../assets/pack_icon_alpha.png"
              alt=""
            />
          </div>
          <div class="col align-self-center text-uppercase">
            <h3>Addons, Maps, Texture Packs</h3>
          </div>
        </div>
      </div>
    </header>
    <div class="bg-secondary text-white text-center p-5">
      <div class="container d-flex align-items-center">
        <div
          id="carouselIndicators"
          class="carousel slide col"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselIndicators" data-slide-to="1"></li>
            <li data-target="#carouselIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <router-link class="nav-link" to="/LP">
                <img
                  alt="First slide"
                  class="d-block w-100"
                  src="../assets/content/creations/images/LP/pack_icon.png"
                />
                <div class="carousel-caption d-none d-md-block">
                  <p>The most recent Addon</p>
                </div>
              </router-link>
            </div>
            <div class="carousel-item">
              <router-link class="nav-link" to="/TLT">
                <img
                  alt="Second slide"
                  class="d-block w-100"
                  src="../assets/content/creations/images/TLT/pack_icon.png"
                />
                <div class="carousel-caption d-none d-md-block">
                  <p>The very first Addon</p>
                </div>
              </router-link>
            </div>
            <div class="carousel-item">
              <router-link class="nav-link" to="/EELV">
                <img
                  alt="Third slide"
                  class="d-block w-100"
                  src="../assets/content/creations/images/EELV/pack_icon.png"
                />
                <div class="carousel-caption d-none d-md-block">
                  <p>The most intricate Addon</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";

// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
  },
};
</script>
