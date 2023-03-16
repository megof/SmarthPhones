<template>
 <div class="containers">
    <h1>Actualizar Referencia</h1>
     </div> 
    <ActualizarDatos :put="putMark" :_id="id" :name="name"></ActualizarDatos> 
</template>

<script setup>
import ActualizarDatos from '../components/Update.vue'
  import { useMarkApiStore } from '@/store/MarksApi.js';

  const useMarkApi = useMarkApiStore();
  let { putMark } = useMarkApi;
  
</script>

<script>
export default {
  name: 'UpdateReference',
  components: { ActualizarDatos },
  data() {
    return {

    }
  },
  props:{
    id: {
      type: String
    },
    name:{
        type:String
    }
  },

}
</script>
