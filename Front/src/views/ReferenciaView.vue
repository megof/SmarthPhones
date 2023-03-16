<template>
      <div class="containers">
    <h1>Lista de Referencia</h1>
     </div>
    <n-button @click="handleClick" class="btn" type="primary">Registrar Referencia</n-button>
    <ListaElementos :items="references" class="list"></ListaElementos>
 
</template>
<script setup>
  import { onMounted } from 'vue';
  import { useRefsApiStore } from '@/store/RefsApi.js';
  import { storeToRefs } from 'pinia';

  const useRefApi = useRefsApiStore();
  let { getRefs, } = useRefApi;
  let { references } = storeToRefs(useRefApi);

  onMounted(() =>{
    getRefs()
    console.log("vue: ", JSON.stringify(references));

  })
</script>
    

<script>
import ListaElementos from '../components/ListaElementos.vue'
import { NButton} from 'naive-ui'


export default {
  name: 'ReferenciaView',
  components: { ListaElementos, NButton },
  data() {
    return {
    }
  },
    methods: {
    handleClick() {
      this.$router.push('/registrarreferencia')
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