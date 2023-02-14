import {useEffect, useState} from "react"
import api from "./services/api"


//usando o Axios
export default function App() {
  const [user, setUser] = useState();

  //Requisição com GET
  useEffect(() =>{
    api
      .get("/users/Ana-Paula-Ferrari") //requisição vai ser enviada para https://api.github.com/users/romulo27.
       //retorno da solicitação
      .then((response) => setUser(response.data))
      //tratar e exibir o erro
      .catch((err) => { 
        console.error("ops!ocorreu um erro" + err);
      });
  }, []);

  return (
    //exibir dados do usuário
    <div className="App">
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
      <p>Url: {user?.blog}</p>
    </div>
  );
}


 //Requisição com POST
  //useEffect(() => {
    //api
      //endpoint e dados que serão enviados para API(objeto)
      //.post("https://minhaapi/novo-usuario", {
        //nome: "Romulo",  
        //sobrenome: "Sousa"
      //})
      //.then((response) => setUser(response.data))
      //.catch((err) => {
      //console.error("ops! ocorreu um erro" + err);
      //});
  //}, []);

//Verbo GET
//api.get(endpoint)

//Verbo POST/ DELETE/ PUT
//api.post
//api.delete
//api.put(endpoint, dados)