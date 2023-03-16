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
        <tr v-for="employees in employees" :key="employees.id">
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
              <n-button size="small" strong secondary type="success" @click="actualizarEmpleado">
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
    mod: {
      type: Function
    }
  },
  methods: {
    actualizarEmpleado() {
      this.$router.push("/actualizarempleado");
    },
  },
};
</script>
