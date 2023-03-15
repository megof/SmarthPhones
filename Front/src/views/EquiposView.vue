<template>
 <div>
    <h1>Lista de Equipos</h1>
    <n-button @click="handleClick">Nueva</n-button>
    <ListaElementos :items="items"></ListaElementos>
 </div>
 <div>
    <n-input v-model="searchTerm" placeholder="Buscar"></n-input>
    <n-icon-button>
      <n-icon icon="search" size="18" />
    </n-icon-button>
  </div>
  <n-space vertical>
    <n-table striped>
      <thead>
        <tr>
          <th>Equipo</th>
          <th>Serial</th>
          <th>Descripción</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>LUIS</td>
          <td>Marin</td>
          <td>carrera 21</td>
          <td>12605</td>
        </tr>
         <tr>
          <td>LUIS</td>
          <td>Marin</td>
          <td>carrera 21</td>
          <td>12605</td>
        </tr>
          <tr>
          <td>LUIS</td>
          <td>Marin</td>
          <td>carrera 21</td>
          <td>12605</td>
        </tr>
      </tbody>
    </n-table>
  </n-space>
</template>


<script>
import { NSpace,NTable,NButton,NIcon,NInput } from 'naive-ui'



export default {
  name: 'EquiposView',
  components: { NButton,NSpace,NTable, NIcon,NInput},
  data() {
    return {
    }
  },
    methods: {
    handleClick() {
      this.$router.push('/registrarequipos')
    }
  },
  //   computed: {
  //   filteredItems() {
  //     return this.items.filter(item => item.toLowerCase().includes(this.searchTerm.toLowerCase()))
  //   }
  // }
}
</script>
