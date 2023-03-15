<template>
    <div class="container">
    <h1>Registrar Marcas</h1>
     </div>
    <RegistrarElementos :items="items"></RegistrarElementos>
 
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

<style>

</style>