<template>

  <n-list>
    <n-list-item v-for="(item, index) in items" :key="index">
      {{ item }}
    <n-space justify="end">
    <n-button size="small">
      <n-icon>
        <TrashOutline />
      </n-icon>
    </n-button>
    <n-button size="small">
      <n-icon>
        <CreateOutline />
      </n-icon>
    </n-button>
    </n-space>
    </n-list-item>
  </n-list>
</template>

<script>
import { NList, NListItem, NButton, NSpace, NIcon } from 'naive-ui'
import { TrashOutline, CreateOutline } from "@vicons/ionicons5";

export default {
  name: 'ListaElementos',
  components: { NList, NListItem, TrashOutline, CreateOutline, NButton, NSpace, NIcon },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
