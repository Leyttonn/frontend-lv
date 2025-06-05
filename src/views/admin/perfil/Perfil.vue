<template>
    <h1>Mi Perfil</h1>

    <div v-if="perfil">
        <h3>Nombre: {{perfil.name}}</h3>
        <h3>EMAIL: {{perfil.email}}</h3>
        <input type="button" value="Obtener Datos" @click="obtenerDatos()">
        <br>
        <button @click="funSalir()">Cerrar Sesion</button>
    </div>
    
    <div v-else>
        <h1>Cargando....</h1>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import authService from '../../../services/auth.service';
import { useRouter } from 'vue-router';

const perfil = ref();

const route = useRouter();

onMounted(() => {
    getPerfil();
})

const getPerfil = async () => {
    const {data} = await authService.profile();
    perfil.value = data
}

const obtenerDatos = () => {
    console.log(perfil.value.name);
    console.log(perfil.value.email);
}

async function funSalir(){
    await authService.logout();
    localStorage.removeItem('access_token');

    route.push({name : 'Login'})
    
}

</script>