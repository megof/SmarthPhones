<template>
 <div class="containers">
    <h1>Actualizar Referencia</h1>
     </div> 
    <ActualizarDatos :put="putRef" :_id="id" :name="name"></ActualizarDatos> 
</template>

<script setup>
import ActualizarDatos from '../components/Update.vue'
import { useRefsApiStore } from '@/store/RefsApi.js';

  const useRefApi = useRefsApiStore();
  let { putRef } = useRefApi;
  
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
