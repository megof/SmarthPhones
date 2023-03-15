<template>
  <div class="container mx-auto h-100" style="background-color: #f8f9fa">
    <nav-bar />
  </div>
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px; /* ajusta el valor según tu preferencia */
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

nv-navbar {
  padding: 20px;
}

nv-navbar a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nv-navbar a.router-link-exact-active {
  color: #42b983;
}
</style>
