<template>
  <div>
    <h1>Registrar marcas</h1>
    <RegistrarElementos :items="items"></RegistrarElementos>
  </div>
</template>

<script>
import RegistrarElementos from '../components/Registrar.vue'


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
