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

    const putRef = (_id, name) => {
        axios.put(Url + '/UpdateRef' , { _id, name })
        .then(res => {
            Swal.fire(
                'Aprobado',
                'Referencia modificada exitosamente.',
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
    
    const delRef = (id) => {
        console.log(id)
        axios.delete(Url + '/DeleteRef/'+ id )
        .then(res => {
            Swal.fire(
                'Aprobado',
                'Referencia Eliminada exitosamente.',
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

    return {
        references,
        reference,
        addRef,
        getRefs,
        putRef,
        delRef,
    }
});