<template>
  <n-carousel autoplay>
    <img
      class="carousel-img"
      src="../assets/pcMesa.jpeg"
    />
    <img
      class="carousel-img"
      src="../assets/portatil.jpeg"
    />
    <img
      class="carousel-img"
      src="../assets/celular.jpg"
    />
    <img
      class="carousel-img"
      src="../assets/tablet.jpg"
    />
  </n-carousel>
</template>

<script>
import { NCarousel } from "naive-ui";

export default {
  name: "MarcasView",
  components: { NCarousel },
};
</script>

<style scoped>
.carousel-img {
  width: 100%;
  object-fit: cover;
}

img {
  width: 500px;
  height: 500px;
}

</style>
