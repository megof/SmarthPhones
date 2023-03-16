<template>
  <div class="containers">
    <n-space>
      <n-input placeholder="Registrar dato"  v-model:value="va" ></n-input>
      <n-button strong secondary type="success" @click="save">Guardar</n-button>
    </n-space>
  </div>
</template>

<script>

import { NButton, NSpace, NInput } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {NButton, NSpace, NInput },
  props: {
    add: {
      type: Function
    }
  },
  data(){
    return {
      va : ''
    }
  },
  methods:{
    save(){
      this.add(this.va)
    }
  }
})

//let val = 'as2s3';
/*export default {
  name: 'RegistrarElementos',
  components: { NButton, NSpace, NInput },
  props: {
    add: {
      type: Function
    }
  },
  data(){
    return{
      val: ''
    }
  }
}*/
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
