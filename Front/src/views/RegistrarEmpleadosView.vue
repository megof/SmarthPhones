<template>
  <div>
    <n-form :model="form" label-width="100px">
      <n-form-item label="Nombre">
        <n-input v-model="form.nombre"></n-input>
      </n-form-item>
      <n-form-item label="Apellidos">
        <n-input v-model="form.apellido"></n-input>
      </n-form-item>
       <n-form-item label="Dirección">
        <n-input v-model="form.direccion"></n-input>
      </n-form-item>
       <n-form-item label="Teléfeno">
        <n-input v-model="form.telefono"></n-input>
      </n-form-item>
      <n-form-item label="Email">
        <n-input v-model="form.email"></n-input>
      </n-form-item>
      <n-form-item>
        <n-button type="primary" @click="submitForm">Enviar</n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script>
import { NButton, NForm,NFormItem,NInput} from 'naive-ui'

export default {
components: { NButton, NForm,NFormItem,NInput },
  data() {
    return {
      form: {
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        email: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Aquí puedes enviar los datos del formulario a través de una llamada a una API o hacer lo que necesites con ellos
    }
  }
}
</script>
