import "./App.scss";
import axios from "axios";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: `https://jsonplaceholsder.typicode.com/`
});


export const App = () => {

  useEffect(() => {
    instance.get(`todos/1`).then(res => {
      console.log(res)
    })
  }, []);


  return (
    <h1>App works</h1>
  );
};
