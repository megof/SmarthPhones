<template>
  <h1 class="containers">Lista de Equipos</h1>

  <n-button @click="handleClick" type="primary" class="btns"
    >Registrar Equipo</n-button
  >

  <n-input
    round
    placeholder="Buscar"
    class="bu"
    autosize
    v-model:value="searchTerm"
  >
    <template #suffix>
      <n-icon>
        <Search />
      </n-icon>
    </template>
  </n-input>
  <div class="item error" v-if="searchTerm && !filteredItems().length">
    <p>No results found!</p>
  </div>
  <div class="list" v-else>
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
        <tr v-for="phones in filteredItems()" :key="phones.id">
          <td>{{ phones.name }}</td>
          <td>{{ phones.imei }}</td>
          <td>{{ phones.description }}</td>
          <td>
            <n-space justify="center">
              <n-button
                size="small"
                strong
                secondary
                type="error"
                @click="delPhone(phones._id)"
              >
                <n-icon>
                  <TrashOutline />
                </n-icon>
              </n-button>
              <n-button
                size="small"
                strong
                secondary
                type="success"
                @click="
                  actualizarequipo(
                    phones._id,
                    phones.name,
                    phones.imei,
                    phones.id_mark,
                    phones.id_ref,
                    phones.description,
                    phones.status
                  )
                "
              >
                <n-icon>
                  <CreateOutline />
                </n-icon>
              </n-button>
            </n-space>
          </td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { usePhoneApiStore } from "@/store/PhoneApi.js";
import { storeToRefs } from "pinia";

const usePhoneApi = usePhoneApiStore();
let { getPhones, delPhone } = usePhoneApi;
let { phones } = storeToRefs(usePhoneApi);

let searchTerm = ref("");

function filteredItems() {
      return phones.value.filter((item) => {
        // Accede a las propiedades del objeto y conviértelas a minúsculas para compararlas con el término de búsqueda
        console.log(item.name+'=='+searchTerm.value+'->'+item.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
        return (
          item.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.imei.toString().toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
      });
      //return []
    }

onMounted(() => {
  getPhones();
  //addPhone('asdasdasdasdasdasdasd',123456789000,'marks.value[0]._id','asdasdasdasdasdasdasd','asdasdasdasdasdasdasd','asdasdasdasdasdasdasd')
  //console.log(marks.value[0].name)
  console.log("vue: ", JSON.stringify(phones));
});
</script>

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
    Search,
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$router.push("/registrarequipos");
    },
    actualizarequipo(_id, name, imei, id_mark, id_ref, description, status) {
      this.$router.push({
        name: "actualizarequipo",
        params: {
          id: _id,
          name: name,
          imei: imei,
          mark: id_mark,
          refe: id_ref,
          description: description,
          status: status,
        },
      });
    },
  },
  computed: {
    
  },
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

<!--<template>
   <input type="text" v-model="input" placeholder="Search fruitss..." />
  <div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
    <p>{{ fruit }}</p>
  </div>
  <div class="item error" v-if="input&&!filteredList().length">
     <p>No results found!</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
let input = ref("");
const fruits = ["apple", "banana", "orange"];
function filteredList() {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>-->
