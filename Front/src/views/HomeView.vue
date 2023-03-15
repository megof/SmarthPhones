<template>
  <n-carousel autoplay>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    />
    <img
      class="carousel-img"
      src="../assets/450_1000.jpeg"
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
  max-height: 80vh;
  object-fit: cover;
}
</style>
