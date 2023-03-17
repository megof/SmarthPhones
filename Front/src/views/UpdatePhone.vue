<template>
<h2 class="container">Actualizar Equipo</h2>

  <n-space vertical>
         <n-form label-width="100px" class="lists">
      <n-form-item label="Nombre">
        <n-input v-model:value="nombre"></n-input>
      </n-form-item>
      <n-form-item label="Serial">
        <n-input v-model:value="serial"></n-input>
      </n-form-item>
      <n-form-item label="Descripción">
        <n-input v-model:value="descripcion"></n-input>
      </n-form-item>
      <n-form-item label="Estado">
        <n-select v-model:value="value" :options="options" />
      </n-form-item>
      <n-form-item label="Marcas">
        <n-select v-model:value="valuem" :options="lsmark" />
      </n-form-item>
      <n-form-item label="Referencias">
        <n-select v-model:value="valuer" :options="lsref" />
      </n-form-item>
      
      <n-form-item>
        <n-button type="primary" @click="save(putPhone)">Guardar</n-button>
      </n-form-item>
    </n-form>
  </n-space>
</template>
<script setup>
  import { usePhoneApiStore } from '@/store/PhoneApi';
  import { useMarkApiStore } from '@/store/MarksApi';
  import { useRefsApiStore } from '@/store/RefsApi';

  const usePhoneApi = usePhoneApiStore();
  const useMarkApi = useMarkApiStore();
  const useRefApi = useRefsApiStore();

  let { putPhone } = usePhoneApi;
  let { getMarks } = useMarkApi;
  let { getRefs } = useRefApi;  

  let { marks } = storeToRefs(useMarkApi);
  let { references } = storeToRefs(useRefApi);

  let lsmark = [];
  let lsref = [];

  onMounted(()=>{
    getMarks();
    getRefs();
    marks.value.map((ele)=>{
      lsmark.push({      
        label: ele.name,
        value: ele._id
      })
    })
    references.value.map((ele)=>{
      lsref.push({      
        label: ele.name,
        value: ele._id
      })
    })
  })
</script>
<script>

import { NSelect,NButton, NForm,NFormItem,NInput } from 'naive-ui'
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

export default{
    components: {
    NSelect,NButton, NForm,NFormItem,NInput
  },
  props:{
    id:{
      type: String,
    },
    name:{
      type: String
    }, 
    imei:{
      type: Number
    }, 
    mark:{
      type: String
    }, 
    refe:{
      type: String
    }, 
    description:{
      type: String
    }, 
    status:{
      type: String
    }
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
      ids: this.id,
      nombre: this.name,
      serial: this.imei,
      descripcion: this.description,
      value: this.status
    };
  },
  methods:{
    save(mb){
      console.log(this.ids+'-'+this.nombre+'-'+ this.serial+'-'+ this.descripcion+'-'+ this.value)
      mb(this.ids,this.nombre, this.serial, this.valuem, this.valuer, this.descripcion, this.value)
    }
  }
};
</script>