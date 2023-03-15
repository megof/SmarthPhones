<template>
  <div class="containers">
    <n-space justify="end">
      <n-layout>
        <h2>Lista de Empleados</h2>
      </n-layout>
    </n-space>
  </div>
   <n-button @click="handleClick" type="primary" class="btn">Registrar Equipo</n-button>
  <ListaEmpleados :items="items" class="list"></ListaEmpleados>
</template>

<script>
import ListaEmpleados from "../components/ListaEmpleados.vue";
import { NButton, NSpace } from "naive-ui";

export default {
  name: "EmpleadosView",
  components: { ListaEmpleados, NButton, NSpace },
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
