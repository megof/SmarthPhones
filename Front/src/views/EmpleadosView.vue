<template>
  <div>
    <h1>Lista de Empleados</h1>
    <n-button @click="handleClick">Nueva</n-button>
    <ListaEmpleados :items="items"></ListaEmpleados>
  </div>
</template>

<script>
import ListaEmpleados from '../components/ListaEmpleados.vue'
import { NButton} from 'naive-ui'


export default {
  name: 'EmpleadosView',
  components: { ListaEmpleados, NButton },
  data() {
    return {
     // items: ['Elemento 5', 'Elemento 2', 'Elemento 3']
    }
  },
    methods: {
    handleClick() {
      this.$router.push('/registrarempleados')
    }
  }
}
</script>
