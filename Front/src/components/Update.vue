<template>

<div class="containers">
    
<n-space>
  <n-input placeholder="Actualizar Dato" v-model:value="val"></n-input>
  <n-button strong secondary type="success" @click="save(_id)">Guardar</n-button>
</n-space>
</div>
</template>

<script>

import { NButton, NSpace, NInput } from 'naive-ui';


export default ({
  name: 'ActualizarDatos',
  components: { NButton, NSpace, NInput },
 props: {
    put: {
      type: Function
    },
    _id: {
      type: String
    },
    name:{
      type:String
    }
  },
  data(){
    return{
      val: this.name,
    }
  },
  methods:{
      save(id) {
        this.put(id, this.val);
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
