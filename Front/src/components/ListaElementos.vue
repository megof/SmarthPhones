<template>

  <n-list class="list">
    <n-list-item v-for="(item, index) in items" :key="index">
      {{ item.name }}
    <n-space justify="end">
    <n-button size="small" strong secondary type="error" @click="del(item._id)">
      <n-icon>
        <TrashOutline />
      </n-icon>
    </n-button>
    <n-button size="small" strong secondary type="success" @click="actualizar(item._id, item.name)" >
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
    },
    del:{
      type: Function
    }
  },
  methods: {
  actualizar(_id,name) {
    if (this.$route.path === "/referencia") {
      this.$router.push("/actualizarreferencia");
    } else if (this.$route.path === "/marcas") {
      this.$router.push({name:'actualizarmarca', params:{id:_id, name: name}});
    }
  },
},

}
</script>
<style>

.list {
  margin: auto 2%;
  border: 1px solid #42b983;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 2%;
}
</style>