import React from "react";
import { createContext } from "react"; 
// import { backendApi } from "../services/backendApi";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  //   const createUser = async (formData) => {
  //     try {
  //       await backendApi.post("/register", formData);
  //       //   toast.success("Conta criada com sucesso", {
  //       //     autoClose: 900,
  //       //     className: "toast__message",
  //       //   });
  //       console.log("entrou");
  //       setTimeout(() => {
  //         navigate("/");
  //       }, 2000);
  //     } catch (error) {
  //       console.log(error);
  //       //   toast.error("Ops, algo deu errado!", {
  //       //     autoClose: 900,
  //       //     className: "toast__message",
  //       //   });
  //     }
  //   };

  const userLogin = async (
    formData
    //  setIsLoading
  ) => {
    try {
      //   setIsLoading(true);
      const data = await backendApi.post("/login", formData);
      localStorage.setItem("@TOKEN", data.token);
      //   localStorage.setItem("USERID", data.user.id);

      alert("Login realizado com sucesso");
      //   {
      // autoClose: 900,
      // className: "toast__message",
      //   });
      setTimeout(() => {
        // navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.error(error);
      //   toast.error("E-mail ou senha inválidos", {
      //     autoClose: 900,
      //     className: "toast__message",
      //   });
    } finally {
      //   setIsLoading(false);
    }
  };

  //   const userLogout = () => {
  //     localStorage.removeItem("@TOKEN");
  //     localStorage.removeItem("USERID");
  //     setUserInfos(null);
  //   };

  return (
    <UserContext.Provider value={{ userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
