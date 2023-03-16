<template>
      <div class="containers">
    <h1>Lista de Referencia</h1>
     </div>
    <n-button @click="handleClick" class="btn" type="primary">Registrar Referencia</n-button>
    <ListaElementos :items="references" class="list"></ListaElementos>
 
</template>

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
<script setup>
  import { onMounted } from 'vue';
  import { useRefsApiStore } from '@/store/RefsApi.js';
  import { storeToRefs } from 'pinia';

  const useRefApi = useRefsApiStore();
  let { getRefs, } = useRefApi;
  let { references } = storeToRefs(useRefApi);

  onMounted(() =>{
    getRefs()
<<<<<<< Updated upstream
    console.log("vue: ", JSON.stringify(references));

  })
</script>
=======
    console.log("vue: ", references);
  })
</script>

>>>>>>> Stashed changes
<script>
import ListaElementos from '../components/ListaElementos.vue'
import { NButton} from 'naive-ui'


export default {
  name: 'ReferenciaView',
  components: { ListaElementos, NButton },
  data() {
    return {
<<<<<<< Updated upstream
      //items: ['Elemento 5', 'Elemento 2', 'Elemento 3']
=======
    //  items: ['Elemento 5', 'Elemento 2', 'Elemento 3']
>>>>>>> Stashed changes
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