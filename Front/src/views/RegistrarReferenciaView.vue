<template>
  <div>
    <h1>Registrar Referencia</h1>
    <RegistrarElementos :items="items"></RegistrarElementos>
  </div>
</template>

<script>
import RegistrarElementos from '../components/Registrar.vue'


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
