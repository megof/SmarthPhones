import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export const usePhoneApiStore = defineStore('PhoneApi', () => {
    const Url = 'http://localhost:5000/api/v1/phone';
    const phones = ref([]);
    const phone = ref({});

    const addPhone = ( name, imei, id_mark, id_ref, description, status ) => {
        axios.post(Url + '/add', {  name, imei, id_mark, id_ref, description, status })
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

    const putPhone = (_id, name) => {
        axios.put(Url + '/UpdatePhone' , { _id, name })
        .then(res => {
            Swal.fire(
                'Aprobado',
                'Dispositivo modificado exitosamente.',
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
    
    const delPhone = (id) => {
        console.log(id)
        axios.delete(Url + '/DeletePhone/'+ id )
        .then(res => {
            Swal.fire(
                'Aprobado',
                'Dispositivo Eliminado exitosamente.',
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
    return {
        phones,
        phone,
        addPhone,
        getPhones,
        putPhone,
        delPhone,
    }
});