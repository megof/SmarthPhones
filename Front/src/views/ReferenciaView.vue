<template>
  <div>
    <h1>Referencia</h1>
    <n-button @click="handleClick">Nueva</n-button>
    <ListaElementos :items="items"></ListaElementos>
  </div>
</template>

<script>
import ListaElementos from '../components/ListaElementos.vue'
import { NButton} from 'naive-ui'


export default {
  name: 'ReferenciaView',
  components: { ListaElementos, NButton },
  data() {
    return {
      items: ['Elemento 5', 'Elemento 2', 'Elemento 3']
    }
  },
    methods: {
    handleClick() {
      this.$router.push('/registrarreferencia')
    }
  }
}
</script>
