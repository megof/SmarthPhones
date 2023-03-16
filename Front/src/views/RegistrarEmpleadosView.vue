<template>
  <h2 class="container">Registrar Empleado</h2>
  
  <div class="lists">
    <n-form label-width="100px">
      <n-form-item label="Nombre">
        <n-input v-model:value="nombre" placeholder="Por favor llenar el campo"></n-input>
      </n-form-item>
      <n-form-item label="Apellidos">
        <n-input v-model:value="apellido" placeholder="Por favor llenar el campo"></n-input>
      </n-form-item>
      <n-form-item label="Dirección">
        <n-input v-model:value="direccion" placeholder="Por favor llenar el campo"></n-input>
      </n-form-item>
      <n-form-item label="Teléfeno">
        <n-input v-model:value="telefono" placeholder="Por favor llenar el campo"></n-input>
      </n-form-item>
      <n-form-item label="Email">
        <n-input v-model:value="email" placeholder="Por favor llenar el campo"></n-input>
      </n-form-item>
        <n-button type="primary" @click="submitForm(addEmployee)">Guardar</n-button>
     
    </n-form>
  </div>
</template>

<script setup>
  import { useEmployeeApiStore } from '@/store/EmployeesApi.js';

  const useEmployeeApi = useEmployeeApiStore();
  let { addEmployee } = useEmployeeApi;
  //addEmployee(123456789110,2123456789110,3123456789110,4123456789110,5123456789110)
</script>
<script>
import { NButton, NForm, NFormItem, NInput } from "naive-ui";
import { defineComponent } from 'vue';

export default defineComponent({
  components: { NButton, NForm, NFormItem, NInput },
  data() {
    return {
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
        email: "",
    };
  },
  methods: {
    submitForm(ff) {
      //addEmployee()
      ff( this.nombre, this.apellido, this.direccion, this.telefono, this.email)
      console.log(
        this.nombre, "nombre",
        this.apellido, "apellido",
        this.direccion, "direccion",
        this.telefono, "telefono",
        this.email, "email",);
      // Aquí puedes enviar los datos del formulario a través de una llamada a una API o hacer lo que necesites con ellos
    },
  },
});
</script>

<style>
.lists {
  margin: auto 10%;
  border: 1px solid #42b983;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 2%;
}
</style>