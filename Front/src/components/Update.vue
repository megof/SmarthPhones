<template>

<h2 class="container">Actualizar Nombre</h2>
<div class="containers">
    
<n-space>
  <n-input placeholder="Actualizar dato"></n-input>
  <n-button strong secondary type="success">Guardar</n-button>
</n-space>
</div>
</template>

<script>

import { NButton, NSpace, NInput } from 'naive-ui'

export default {
  name: 'ActualizarDatos',
  components: { NButton, NSpace, NInput },
  props: {
    items: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

.containers {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
