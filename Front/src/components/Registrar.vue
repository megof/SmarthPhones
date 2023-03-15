<template>

<n-space>
  <n-input></n-input>
  <n-button>Guardar</n-button>
</n-space>
</template>

<script>

import { NButton, NSpace, NInput } from 'naive-ui'

export default {
  name: 'RegistrarElementos',
  components: { NButton, NSpace, NInput },
  props: {
    items: {
      type: String,
      required: true
    }
  }
}
</script>
