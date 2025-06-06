import Api from './api.service';

export default {
    login(credenciales){
        return Api().post("/v1/auth/login", credenciales);
    },
    register(datos){
        return Api().post("/v1/auth/register", credenciales);
    },
    profile:function(){
        return Api().get("/v1/auth/profile");
        
    },
    logout: () => {
        return Api().post("/v1/auth/profile");
    }
}