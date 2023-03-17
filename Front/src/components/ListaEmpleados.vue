<template>
  <n-space vertical>
    <n-table striped>
      <thead>
        <tr >
          <th>Nombres</th>
          <th>Apellido</th>
          <th>Dirección</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employees in employees" :key="employees._id">
          <td>{{employees.name}}</td>
          <td>{{employees.last}}</td>
          <td>{{employees.dir}}</td>
          <td>{{employees.phone}}</td>
          <td>{{employees.email}}</td>
          <td>
           <n-space>
              <n-button size="small" strong secondary type="error" @click="del(employees._id)">
                <n-icon>
                  <TrashOutline />
                </n-icon>
              </n-button>
              <n-button size="small" strong secondary type="success" @click="actualizarEmpleado(employees._id, employees.name, employees.last, employees.dir, employees.phone, employees.email)">
                        <UpdateEmployee :put="putEmployee" />

                <n-icon>
                  <CreateOutline />
                </n-icon>
              </n-button>
           </n-space>
          </td>
        </tr>
      </tbody>
    </n-table>
  </n-space>
</template>

<script>
import { NSpace, NTable, NButton, NIcon } from "naive-ui";
import { TrashOutline, CreateOutline } from "@vicons/ionicons5";

export default {
  name: "ListaEmpleados",
  components: { NIcon, NSpace, NTable, TrashOutline, CreateOutline, NButton },
  props: {
    employees: {
      type: Array,
      required: true
    },
    del:{
      type: Function
    },
    putEmployee: {
      type: Function
    }
  },
  methods: {
    actualizarEmpleado(_id, name, last, dir, phone, email) {
      this.$router.push({name:'actualizarempleado', params:{id:_id,name:name, last:last, dir:dir, phone:phone, email:email}});

    },
  },
};
</script>
