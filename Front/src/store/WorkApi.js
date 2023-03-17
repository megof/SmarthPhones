import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useWorkApiStore = defineStore('WorkApi', () => {
    const Url = 'http://localhost:5000/api/v1/work';
    const works = ref([]);
    const work = ref({});

    const addWork = ( id_employee, id_phone, date, Observation ) => {
        axios.post(Url + '/add', {  id_employee, id_phone, date, Observation })
            .then(res =>{
                Swal.fire(
                    'Aprobado',

                    'Equipo asignado exitosamente.',

                    'success'
                );
                getWorks();
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

    const getWorks = () => {
        axios.get(Url + '/FindAllWork')
            .then(res => {

                works.value = res.data.refs;

            })
            .catch(error => {
                console.log(error)
            });
    }

    return {
        works,
        work,
        addWork,
        getWorks,
    }
});