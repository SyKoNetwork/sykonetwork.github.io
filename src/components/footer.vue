<template>
  <footer class="bg-light text-center text-white">
    <!-- Grid container -->
    <div class="container p-3 pb-0">
      <!-- Section: Social media -->
      <section class="p-2">
        <!-- Facebook -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #7289da"
          href="https://discord.syko.network"
          target="_blank"
          role="button"
          ><i class="fab fa-discord"></i
        ></a>

        <!-- Youtube -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #e3321a"
          href="https://www.youtube.com/channel/UCPWWWiU6fV26jK-Ws5vbY1w"
          target="_blank"
          role="button"
          ><i class="fab fa-youtube"></i
        ></a>

        <!-- Twitter -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #55acee"
          href="https://twitter.com/SyKoSoFi"
          target="_blank"
          role="button"
          ><i class="fab fa-twitter"></i
        ></a>

        <!-- Instagram -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #ac2bac"
          href="https://www.instagram.com/sykonetwork/"
          target="_blank"
          role="button"
          ><i class="fab fa-instagram"></i
        ></a>

        <!-- Github -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #333333"
          href="https://github.com/SykoUSS"
          target="_blank"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="bg-secondary text-center p-4">
      © 2021 Copyright:
      <a class="text-white" href="http://localhost:8080//">SyKo.Network</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>
