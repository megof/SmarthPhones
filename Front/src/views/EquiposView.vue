<template>
  <h1 class="containers">Lista de Equipos</h1>

  <n-button @click="handleClick" type="primary" class="btns"
    >Registrar Equipo</n-button
  >
  <ListaElementos :items="items"></ListaElementos>

   <n-input round placeholder="Buscar" class="bu" autosize>
      <template #suffix>
        <n-icon>
      <Search />
    </n-icon>
      </template>
    </n-input>
  <div class="list">
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
          <td>
            <n-space>
              <n-button size="small" strong secondary type="error">
                <n-icon>
                  <TrashOutline />
                </n-icon>
              </n-button>
              <n-button size="small" strong secondary type="success">
                <n-icon>
                  <CreateOutline />
                </n-icon>
              </n-button>
            </n-space>
          </td>
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
  </div>
</template>

<script>
import { NSpace, NTable, NButton, NIcon, NInput } from "naive-ui";
import { TrashOutline, CreateOutline, Search } from "@vicons/ionicons5";

export default {
  name: "EquiposView",
  components: {
    NButton,
    NSpace,
    NTable,
    NIcon,
    NInput,
    TrashOutline,
    CreateOutline,
    Search
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$router.push("/registrarequipos");
    },
  },
  //   computed: {
  //   filteredItems() {
  //     return this.items.filter(item => item.toLowerCase().includes(this.searchTerm.toLowerCase()))
  //   }
  // }
};
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

.btns {
  margin-top: -38px;
  display: flex;
  margin-left: 80%;
  margin-bottom: 2%;
}
.list {
  margin: auto 2%;
  border: 1px solid #42b983;
  border-radius: 5px;
  padding: 5px;
  margin-top: 2%;
}
.bu {
  border: 1px solid #42b983;
  border-radius: 5px;
  min-width: 50%;
  text-align: center;
  margin: 0 auto;
  margin-left: 3%;
  margin-bottom: 2%;
}

</style>
