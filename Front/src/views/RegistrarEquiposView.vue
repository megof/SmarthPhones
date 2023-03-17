<template>
<h2 class="container">Registrar Equipo</h2>

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
      <n-form-item label="Referencia">
        <n-select v-model:value="valuer" :options="lsref" />
      </n-form-item>
      
      <n-form-item>
        <n-button type="primary" @click="submitForm(addPhone)">Guardar</n-button>
      </n-form-item>
    </n-form>
  </n-space>
</template>
<script setup>
  import { useMarkApiStore } from '@/store/MarksApi';
  import { useRefsApiStore } from '@/store/RefsApi';
  import { usePhoneApiStore } from '@/store/PhoneApi';
  import { storeToRefs } from 'pinia';

  const useMarkApi = useMarkApiStore();
  const useRefApi = useRefsApiStore();
  const usePhoneApi = usePhoneApiStore();

  let { getMarks } = useMarkApi;
  let { getRefs } = useRefApi;
  let { addPhone } = usePhoneApi;

  let { marks } = storeToRefs(useMarkApi);
  let { references } = storeToRefs(useRefApi);

  let lsmark = [];
  let lsref = [];

  onMounted(()=>{
    getMarks();
    getRefs();
    console.log(marks.value);
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
import { NSelect,NButton, NForm,NFormItem,NInput } from 'naive-ui';
import { onMounted } from 'vue';

export default{
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
        nombre: '1',
        serial: '2',
        descripcion: '3',
    };
  },
  methods:{
    submitForm(add){
      add(this.nombre, this.serial, this.valuem, this.valuer, this.descripcion, this.value)
      console.log('aiuda'+this.nombre+this.valuer)
    }
  }
};
</script>