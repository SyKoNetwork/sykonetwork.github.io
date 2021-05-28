<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="#page-top"><Logo />The SyKo Network</a>
      <button
        class="
          navbar-toggler navbar-toggler-right
          text-uppercase
          font-weight-bold
          bg-scondary
          text-primary
          rounded
        "
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link
              class="nav-link btn btn-secondary btn-sm m-1 text-white"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link btn btn-secondary btn-sm m-1 text-white"
              to="/docs"
              >Docs</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link btn btn-secondary btn-sm m-1 text-white"
              to="/creations"
              >Creations</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://discord.syko.network"
              target="_blank"
              ><i class="fab fa-discord"></i
            ></a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.youtube.com/channel/UCPWWWiU6fV26jK-Ws5vbY1w"
              target="_blank"
              ><i class="fab fa-youtube"></i
            ></a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://twitter.com/SyKoSoFi"
              target="_blank"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.instagram.com/sykonetwork/"
              target="_blank"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/SykoUSS"
              target="_blank"
              ><i class="fab fa-github"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "../components/logo.vue";
export default {
  name: "Navbar",
  components: {
    Logo,
  },
  props: {
    msg: String,
  },
};
</script>
