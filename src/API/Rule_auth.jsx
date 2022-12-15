import API from "./Rule_API";

export const iniciarSesion = async (usuario) => {
  let url = "/api/user/login";
  return await API.post(url, usuario)
    .then((response) => {
      setLocalStorage("token", response.data.token);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const registrarUsuario = async (data) => {
  let url = "/api/user/register";
  return await API.post(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const consultarUsuarios = async () => {
  let url = "/api/user/list";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const getUsuario = async () => {
  let url = "/api/user/info";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const isAuth = () => {
  if (typeof window !== "undefined") {
    const tokenChecked = localStorage.getItem("token"); //compruebo que el usuario esté autenticado
    if (tokenChecked) {
      return true;
    } else {
      return false;
    }
  }
};

/* 

const authenticate = (token) => {
  setMyCookie("token", token);

};


const setMyCookie = (key, value) => {
  //validamos que se encuentre en client side
  if (typeof window !== "undefined") {
    setCookie(key, value);
  }
}; */

/* const removeCookie = (key) => {
  //validamos que se encuentre en client side
  if (typeof window !== "undefined") {
    removeCookie(key, {
      expires: 1,
    });
  }
}; */

/* const getCookie = (key) => {
  //Se guarda con key=token
  //validamos que se encuentre en client side
  if (typeof window !== "undefined") {
    return getCookie(key);
  }
}; */

//localstorage
const setLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

const removeLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

/* const isAuth = () => {
  if (typeof window !== "undefined") {
    const cookieChecked = getCookie("token"); //compruebo que el usuario esté autenticado
    if (cookieChecked) {
      return true; //localStorage.getItem("user"));
    } else {
      return false;
    }
  }
}; */
