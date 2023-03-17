<template>
  <h2 class="container">Asignar Equipo</h2>
  <n-space vertical>
    <n-form label-width="100px" class="lists">
      <n-form-item label="Empleado">
        <n-select v-model:value="valuee" :options="lsemp" />
      </n-form-item>
      <n-form-item label="Dispositivo">
        <n-select v-model:value="valuer" :options="lspho" />
      </n-form-item>
      <n-form-item label="Observación">
        <n-mention type="textarea" v-model:value="observacion" />
      </n-form-item>
      <n-form-item>
        <n-button type="primary" @click="submitForm(addWork)">Guardar</n-button>
      </n-form-item>
    </n-form>
  </n-space>
</template>

<script setup>

  import { useEmployeeApiStore } from '@/store/EmployeesApi';
  import { usePhoneApiStore } from '@/store/PhoneApi';
  import { useRefsApiStore } from '@/store/RefsApi';
  import { useWorkApiStore } from '@/store/WorkApi';
  import { storeToRefs } from 'pinia';

  const useEmployeeApi = useEmployeeApiStore();
  const usePhoneApi = usePhoneApiStore();
  const useRefApi = useRefsApiStore();
  const useWorkApi = useWorkApiStore();

  let { getEmployees } = useEmployeeApi;
  let { getPhones } = usePhoneApi;
  let { getRefs } = useRefApi;
  let { addWork } = useWorkApi;

  let { employees } = storeToRefs(useEmployeeApi);
  let { phones } = storeToRefs(usePhoneApi);
  let { references } = storeToRefs(useRefApi);

  let lspho = [];
  let lsemp = [];

  onMounted(()=>{
    getEmployees();
    getPhones();
    getRefs();

    employees.value.map((ele)=>{
      lsemp.push({      
        label: ele.name+' '+ele.last,
        value: ele._id
      })
    })
    
    phones.value.map((ele)=>{
      let aux = '';
      references.value.map((ment)=>{
        if(ele.id_ref==ment._id){ 
          aux = ment.name;       
        }
      })      
      lspho.push({      
        label: aux+'/'+ele.name,
        value: ele._id
      })
    })
  })
  
</script>
<script>
import { NSelect, NButton, NForm, NFormItem, NMention } from "naive-ui";
import { onMounted } from 'vue';

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
        observacion: "",
    };
  },
  methods:{
    submitForm(add){
      add(this.valuee, this.valuer, '',this.observacion)
    }
  }
};
</script>
