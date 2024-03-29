import { createRouter, createWebHistory } from 'vue-router' 

const routes = [
  
  {
    path: '/',
    name: 'home', 
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/marcas',
    name: 'marcas', 
    component: () => import(/* webpackChunkName: "marcas" */ '../views/MarcasView.vue')
  },
  {
    path: '/referencia',
    name: 'referencia', 
    component: () => import(/* webpackChunkName: "marcas" */ '../views/ReferenciaView.vue')
  },
  {
    path: '/empleados',
    name: 'empleados', 
    component: () => import(/* webpackChunkName: "empleados" */ '../views/EmpleadosView.vue')
  },
  {
    path: '/equipos',
    name: 'equipos', 
    component: () => import(/* webpackChunkName: "equipos" */ '../views/EquiposView.vue')
  },
  {
    path: '/asignar',
    name: 'asignar', 
    component: () => import(/* webpackChunkName: "asignar" */ '../views/AsignarEquiposView.vue')
  },
  {
    path: '/actualizar',
    name: 'actualizar', 
    component: () => import(/* webpackChunkName: "actualizar" */ '../components/Update.vue'),
    props: true
  },
  {
    path: '/actualizarempleado/:id/:name/:last/:dir/:phone/:email',
    name: 'actualizarempleado', 
    component: () => import(/* webpackChunkName: "actualizarempleado" */ '../views/UpdateEmployee.vue'),
    props:true
  },
  {
    path: '/actualizarequipo/:id/:name/:imei/:mark/:refe/:description/:status',
    name: 'actualizarequipo', 
    component: () => import(/* webpackChunkName: "actualizarequipo" */ '../views/UpdatePhone.vue'),
    props: true
  },
  {
    path: '/registrarmarcas',
    name: 'registrarmarcas', 
    component: () => import(/* webpackChunkName: "registrarmarcas" */ '../views/RegistrarMarcasView.vue')
  },
  {
    path: '/registrarreferencia',
    name: 'registrarreferencia', 
    component: () => import(/* webpackChunkName: "registrarreferencia" */ '../views/RegistrarReferenciaView.vue')
  },
  {
    path: '/registrarempleados',
    name: 'registrarempleados', 
    component: () => import(/* webpackChunkName: "registrarempleados" */ '../views/RegistrarEmpleadosView.vue')
  },
  {
    path: '/registrarequipos',
    name: 'registrarequipos', 
    component: () => import(/* webpackChunkName: "registrarequipos" */ '../views/RegistrarEquiposView.vue')
  },
  {
    path: '/actualizarmarca/:id/:name',
    name: 'actualizarmarca', 
   component: () => import(/* webpackChunkName: "actualizarmarca" */ '../views/UpdateMark.vue'),
   props:true
  },
  {
    path: '/actualizarreferencia/:id/:name',
    name: 'actualizarreferencia', 
    component: () => import(/* webpackChunkName: "actualizarreferencia" */ '../views/UpdateReference.vue'),
    props:true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
