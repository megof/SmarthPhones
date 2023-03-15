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
        </tr>
      </thead>
      <tbody>
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
import { NSpace,NTable } from 'naive-ui'
// import { TrashOutline, CreateOutline } from "@vicons/ionicons5";

export default {
  name: 'ListaEmpleados',
  components: { NSpace, NTable },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
