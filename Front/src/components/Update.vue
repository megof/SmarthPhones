<template>

<h2 class="container">Actualizar Nombre</h2>
<div class="containers">
    
<n-space>
  <n-input placeholder="Actualizar dato" v-model:value="val"></n-input>
  <n-button strong secondary type="success" @click="save">Guardar</n-button>
</n-space>
</div>
</template>

<script>

import { NButton, NSpace, NInput } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ActualizarDatos',
  components: { NButton, NSpace, NInput },
  props: {
    items: {
      type: String,
      required: true
    },
    id:{
      type: String
    },
    mod: {
      type: Function
    }
  },
  data(){
    return{
      val: ''
    }
  },
  methods:{
    save(){
      console.log('comoqueno?', this.mod)
      JSON.parse(this.mod)
      this.mod(this.id, this.val);
    }
  }
})
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
