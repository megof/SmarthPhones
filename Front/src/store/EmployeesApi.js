import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useEmployeeApiStore = defineStore('EmployeeApi', () => {
    const Url = 'http://localhost:5000/api/v1/employee';
    const employees = ref([]);
    const employee = ref({});

    const addEmployee = (name, last, dir, phone, email) => {
        axios.post(Url + '/add', { name, last, dir, phone, email })
            .then(res =>{
                Swal.fire(
                    'Aprobado',
                    'Empelado registrado exitosamente.',
                    'success'
                );
                getEmployees();
                console.log(res);
            }
            )
            .catch(error => {
                Swal.fire(
                    'Error',
                    'Por favor verifica la información suministrada ' + error,
                    'error'
                )
            });
    }

    const getEmployees = () => {
        axios.get(Url + '/FindAllEmployee')
            .then(res => {
                employees.value = res.data.employees;
            })
            .catch(error => {
                console.log(error)
            });
    }


    const putEmployee = (_id, name) => {
        axios.put(Url + '/UpdateEmployee' , { _id, name })
        .then(res => {
            Swal.fire(
                'Aprobado',
                'Empleado modificado exitosamente.',
                'success'
            );
            getEmployees();
            console.log(res);
        }
        )
        .catch(error => {
            Swal.fire(
                'Error',
                'Por favor verifica la información suministrada ' + error,
                'error'
            )
        });
    }
    
    const delEmployee = (id) => {
        console.log(id)
        axios.delete(Url + '/DeleteEmployee/'+ id )
        .then(res => {
            Swal.fire(
                'Aprobado',
                'Empleado Eliminado exitosamente.',
                'success'
            );
            getEmployees();
            console.log(res);
        }
        )
        .catch(error => {
            Swal.fire(
                'Error',
                'Por favor verifica la información suministrada ' + error,
                'error'
            )
        });
    }
    return {
        employees,
        employee,
        addEmployee,
        getEmployees,
        putEmployee,
        delEmployee,
    }
});