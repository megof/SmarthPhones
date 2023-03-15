import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useMarkApiStore = defineStore('MarkApi', () => {
    const Url = 'http://localhost:5000/api/v1/mark';
    const marks = ref([]);
    const mark = ref({});

    const addMark = (name) => {
        axios.post(Url + '/add', { name })
            .then(res =>{
                Swal.fire(
                    'Aprobado',
                    'Marca registrada exitosamente.',
                    'success'
                );
                getMarks();
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

    const getMarks = () => {
        axios.get(Url + '/FindAllMark')
            .then(res => {
                marks.value = res.data.marks;
            })
            .catch(error => {
                console.log(error)
            });
    }

    return {
        marks,
        mark,
        addMark,
        getMarks,
    }
});