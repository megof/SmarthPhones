import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useRefsApiStore = defineStore('RefApi', () => {
    const Url = 'http://localhost:5000/api/v1/ref';
    const references = ref([]);
    const reference = ref({});

    const addRef = (name) => {
        axios.post(Url + '/add', { name })
            .then(res =>{
                Swal.fire(
                    'Aprobado',

                    'Referencia registrada exitosamente.',

                    'Marca registrada exitosamente.',

                    'success'
                );
                getRefs();
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

    const getRefs = () => {
        axios.get(Url + '/FindAllRef')
            .then(res => {

                references.value = res.data.refs;

            })
            .catch(error => {
                console.log(error)
            });
    }

    return {
        references,
        reference,
        addRef,
        getRefs,
    }
});