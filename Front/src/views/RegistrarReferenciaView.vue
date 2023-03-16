<template>
  <div class="container">
    <h1>Registrar Referencia</h1>
  </div>  
    <RegistrarElementos :items="items"></RegistrarElementos>
</template>

<script>
import RegistrarElementos from '../components/RegistrarAll.vue'


export default {
  name: 'RegistrarReferenciaView',
  components: { RegistrarElementos },
  data() {
    return {
    //   items: ['Elemento 5', 'Elemento 2', 'Elemento 3']
    }
  }
}
</script>
