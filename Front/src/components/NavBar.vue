<template>
  <nv-navbar class="navbar navbar-expand-lg navbar-light bg-light">
    <n-space>
    <nv-navbar-item><router-link to="/">Home</router-link></nv-navbar-item>
    <nv-navbar-item><router-link to="/marcas">Marcas</router-link></nv-navbar-item>
    <nv-navbar-item><router-link to="/referencia">Referencia</router-link></nv-navbar-item>
    <nv-navbar-item><router-link to="/empleados">Empleados</router-link></nv-navbar-item>
    <nv-navbar-item><router-link to="/equipos">Equipo</router-link></nv-navbar-item>
    <nv-navbar-item><router-link to="/asignar">Asignar Equipo</router-link></nv-navbar-item>
    </n-space>  
  </nv-navbar>
</template>



<script>
import { NSpace } from 'naive-ui'
    export default {
        name: 'NavBar',
        components:{NSpace}
    }
</script>

<style>

</style>