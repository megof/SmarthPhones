<template>
 <div class="containers">
    <h1>Actualizar Marca</h1>
     </div> 
    <ActualizarDatos :put="putMark" :_id="id"></ActualizarDatos>
 
</template>

<script setup>

  import { useMarkApiStore } from '@/store/MarksApi.js';

  const useMarkApi = useMarkApiStore();
  let { putMark } = useMarkApi;


//   onMounted(() =>{
//     //putMark('6411e070ecf96b41feaf5d3e', 'pruebaweb');
//     //delMark('6411e070ecf96b41feaf5d3e');
//     //addMark('Eliminamepe');
//     putMark();
  

//   })
</script>

<script>
import ActualizarDatos from '../components/Update.vue'


export default {
  name: 'UpdateMark',
  components: { ActualizarDatos },
  data() {
    return {
    }
  },
  props:{
    id: {
      type: String
    }
  },

  methods:{
    hola(id){
        console.log(id)
    }
  }
}
</script>
