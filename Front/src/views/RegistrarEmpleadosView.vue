<template>
  <h2 class="container">Registrar Empleado</h2>
  
  <div class="lists">
    <n-form :model="form" label-width="100px">
      <n-form-item label="Nombre">
        <n-input v-model="form.nombre" placeholder="Por favor llenar el campo"></n-input>
      </n-form-item>
      <n-form-item label="Apellidos">
        <n-input v-model="form.apellido" placeholder="Por favor llenar el campo"></n-input>
      </n-form-item>
      <n-form-item label="Dirección">
        <n-input v-model="form.direccion" placeholder="Por favor llenar el campo"></n-input>
      </n-form-item>
      <n-form-item label="Teléfeno">
        <n-input v-model="form.telefono" placeholder="Por favor llenar el campo"></n-input>
      </n-form-item>
      <n-form-item label="Email">
        <n-input v-model="form.email" placeholder="Por favor llenar el campo"></n-input>
      </n-form-item>
        <n-button type="primary" @click="submitForm">Guardar</n-button>
     
    </n-form>
  </div>
</template>

<script>
import { NButton, NForm, NFormItem, NInput } from "naive-ui";

export default {
  components: { NButton, NForm, NFormItem, NInput },
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes enviar los datos del formulario a través de una llamada a una API o hacer lo que necesites con ellos
    },
  },
};
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