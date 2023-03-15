<template>
      <div class="containers">
    <h1>Referencia</h1>
     </div>
    <n-button @click="handleClick" class="btn" type="primary">Registrar Referencia</n-button>
    <ListaElementos :items="items" class="list"></ListaElementos>
 
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

<style>
.containers {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.btn{
  margin-top:-56px;
  display: flex;
  margin-left: 80%;
  margin-bottom: 2%;
}

</style>