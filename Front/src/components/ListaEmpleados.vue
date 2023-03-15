<template>
  <n-space vertical>
    <n-table striped>
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellido</th>
          <th>Dirección</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>LUIS</td>
          <td>Marin</td>
          <td>carrera 21</td>
          <td>12605</td>
          <td>marin28c@gmai.com</td>
          <td>
           <n-space>
              <n-button size="small" strong secondary type="error">
                <n-icon>
                  <TrashOutline />
                </n-icon>
              </n-button>
              <n-button size="small" strong secondary type="success">
                <n-icon>
                  <CreateOutline />
                </n-icon>
              </n-button>
           </n-space>
          </td>
        </tr>
        <tr>
          <td>LUIS</td>
          <td>Marin</td>
          <td>carrera 21</td>
          <td>12605</td>
          <td>marin28c@gmai.com</td>
        </tr>
        <tr>
          <td>LUIS</td>
          <td>Marin</td>
          <td>carrera 21</td>
          <td>12605</td>
          <td>marin28c@gmai.com</td>
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
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
