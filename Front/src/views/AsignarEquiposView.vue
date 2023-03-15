<template>
  <h2 class="container">Asignar Equipo</h2>
  <n-space vertical>
    <n-form :model="form" label-width="100px" class="lists">
      <n-form-item label="Empleado">
        <n-select v-model:value="value" :options="options" />
      </n-form-item>
      <n-form-item label="Referencia">
        <n-select v-model:value="values" :options="optiones" />
      </n-form-item>
      <n-form-item label="Observación">
        <n-mention type="textarea" v-model="form.observacion" />
      </n-form-item>
      <n-form-item>
        <n-button type="primary" @click="submitForm">Guardar</n-button>
      </n-form-item>
    </n-form>
  </n-space>
</template>

<script>
import { NSelect, NButton, NForm, NFormItem, NMention } from "naive-ui";

export default {
  components: {
    NSelect,
    NButton,
    NForm,
    NFormItem,
    NMention,
  },
  data() {
    return {
      options: [
        {
          label: "Oscar",
          value: "Oscar",
        },
        {
          label: "David",
          value: "David",
        },
      ],
      optiones: [
        {
          label: "PC",
          value: "PC",
        },
        {
          label: "Celular",
          value: "Celular",
        },
      ],
      form: {
        observacion: "",
      },
    };
  },
};
</script>
