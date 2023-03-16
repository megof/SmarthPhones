<template>
  <div class="containers">
    
      <n-layout>
        <h2>Lista de Empleados</h2>
      </n-layout>
    
  </div>
   <n-button @click="handleClick" type="primary" class="btn">Registrar Empleado</n-button>
  <div v-for="employees in employees" :key="employees">

  </div>
  <ListaEmpleados :employees="employees" :del="delEmployee" :mod="putEmployee" class="list"></ListaEmpleados>
</template>


<script setup>
  import { onMounted } from 'vue';
  import { useEmployeeApiStore } from '@/store/EmployeesApi.js';
  import { storeToRefs } from 'pinia';

  const useEmployeeApi = useEmployeeApiStore();
  let { getEmployees, delEmployee, putEmployee } = useEmployeeApi;
  let { employees } = storeToRefs(useEmployeeApi);

  onMounted(() =>{
    getEmployees()
    console.log("vue: ", JSON.stringify(employees));

  })
</script>

<script>
import ListaEmpleados from "../components/ListaEmpleados.vue";
import { NButton, } from "naive-ui";

export default {
  name: "EmpleadosView",
  components: { ListaEmpleados, NButton, },
  data() {
    return {
      // items: ['Elemento 5', 'Elemento 2', 'Elemento 3']
    };
  },
  methods: {
    handleClick() {
      this.$router.push("/registrarempleados");
    },
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

.btn{
  margin-top:-56px;
  display: flex;
  margin-left: 80%;
  margin-bottom: 2%;
}

.list {
  margin: auto 2%;
}
</style>
