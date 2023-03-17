<template>
  <h2 class="container">Actualizar Empleado</h2>

  <div class="lists">
    <n-form :model="form" label-width="100px">
      <n-form-item label="Nombre">
        <n-input
          v-model:value="names"
          placeholder="Por favor llenar el campo"
        ></n-input>
      </n-form-item>
      <n-form-item label="Apellidos">
        <n-input
          v-model:value="lasts"
          placeholder="Por favor llenar el campo"
        ></n-input>
      </n-form-item>
      <n-form-item label="Dirección">
        <n-input
          v-model:value="dirs"
          placeholder="Por favor llenar el campo"
        ></n-input>
      </n-form-item>
      <n-form-item label="Teléfeno">
        <n-input
          v-model:value="phones"
          placeholder="Por favor llenar el campo"
        ></n-input>
      </n-form-item>
      <n-form-item label="Email">
        <n-input
          v-model:value="emails"
          placeholder="Por favor llenar el campo"
        ></n-input>
      </n-form-item>
      <n-button type="primary" @click="save(_id, putEmployee)">Guardar
      </n-button>
    </n-form>
  </div>
</template>

<script setup>
import { useEmployeeApiStore } from "@/store/EmployeesApi.js";

const useEmployeeApi = useEmployeeApiStore();
let { putEmployee } = useEmployeeApi;
</script>

<script>
import { NButton, NForm, NFormItem, NInput } from "naive-ui";

export default {
  name: "UpdateEmployee",
  components: {
    NButton,
    NForm,
    NFormItem,
    NInput,
  },
  props: {
    put: {
      type: Function,
    required: true
    },
    _id: {
      type: String,
    },
    name: {
      type: String,
    },
    last: {
      type: String,
    },
    dir: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  data() {
    return {
      names: this.name,
      lasts: this.last,
      dirs: this.dir,
      phones: this.phone,
      emails: this.email,
    };
  },
  methods: {
    save(id, md) {
      console.log(id,+' -'+md)
      md(id, this.names, this.lasts, this.dirs, this.phones, this.emails);
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
