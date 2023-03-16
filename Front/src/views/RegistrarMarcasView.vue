<template>
    <div class="container">
    <h1>Registrar Marcas</h1>
     </div>
    <RegistrarElementos :add="addMark"></RegistrarElementos>
 
</template>


<script setup>
  import { useMarkApiStore } from '@/store/MarksApi.js';

  const useMarkApi = useMarkApiStore();
  let { addMark} = useMarkApi;
</script>
<script>
import RegistrarElementos from '../components/RegistrarAll.vue'


export default {
  name: 'RegistrarMarcasView',
  components: { RegistrarElementos },
  data() {
    return {
    //   items: ['Elemento 5', 'Elemento 2', 'Elemento 3']
    }
  }
}
</script>
