<template>
    <div class="containers">
    <h1>Lista de marcas</h1>
     </div>
    <n-button  class="btn" @click="handleClick" type="primary">Registrar Marca</n-button>
    
    <ListaElementos :items="items" class="list"></ListaElementos>
 
</template>
<script setup>
  import { onMounted } from 'vue';
  import { useMarkApiStore } from '@/store/MarksApi.js';
  import { storeToRefs } from 'pinia';

  const useMarkApi = useMarkApiStore();
  let { getMaks, } = useMarkApi;
  let { marks } = storeToRefs(useMarkApi);

  onMounted(() =>{
    getMaks()
    console.log("vue: ", marks);
  })
</script>
<script>
import ListaElementos from '../components/ListaElementos.vue'
import { NButton} from 'naive-ui'


export default {
  name: 'MarcasView',
  components: { ListaElementos, NButton },
  data() {
    return {
      items: ['Elemento 5', 'Elemento 2', 'Elemento 3']
    }
  },
    methods: {
    handleClick() {
      this.$router.push('/registrarmarcas')
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

.btn{
  margin-top:-56px;
  display: flex;
  margin-left: 80%;
  margin-bottom: 2%;
}
</style>