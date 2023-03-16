import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export const usePhoneApiStore = defineStore('PhoneApi', () => {
    const Url = 'http://localhost:5000/api/v1/phone';
    const phones = ref([]);
    const phone = ref({});

    const addPhone = (name, imei,description) => {
        axios.post(Url + '/add', { name, imei, description})
            .then(res =>{
                Swal.fire(
                    'Aprobado',
                    'Empelado registrado exitosamente.',
                    'success'
                );
                getPhones();
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

    const getPhones = () => {
        axios.get(Url + '/FindAllPhone')
            .then(res => {
                phones.value = res.data.phones;
            })
            .catch(error => {
                console.log(error)
            });
    }

    return {
        phones,
        phone,
        addPhone,
        getPhones,
    }
});