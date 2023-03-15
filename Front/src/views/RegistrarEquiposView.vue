<template>

  <n-space vertical>
         <n-form :model="form" label-width="100px">
      <n-form-item label="Nombre">
        <n-input v-model="form.nombre"></n-input>
      </n-form-item>
      <n-form-item label="Serial">
        <n-input v-model="form.serial"></n-input>
      </n-form-item>
      <n-form-item label="Descripción">
        <n-input v-model="form.descripcion"></n-input>
      </n-form-item>
      <n-form-item label="Estado">
        <n-select v-model:value="value" :options="options" />
      </n-form-item>
      
      <n-form-item>
        <n-button type="primary" @click="submitForm">Enviar</n-button>
      </n-form-item>
    </n-form>
  </n-space>
</template>

<script>

import { NSelect,NButton, NForm,NFormItem,NInput } from 'naive-ui'

export default({
    components: {
    NSelect,NButton, NForm,NFormItem,NInput
  },
  data() {
    return {
      options: [
        {
          label: "Nuevo",
          value: "Nuevo"
        },
        {
          label: "Usado",
          value: "Usado"
        }
      ],
       form: {
        nombre: '',
        serial: '',
        descripcion: '',
        email: ''
      }
    };
  }
});
</script>