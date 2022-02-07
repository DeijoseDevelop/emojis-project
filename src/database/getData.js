import axios from "axios";

export default async function getData() {
    let res = await axios.get('http://localhost:3001/emojis');
    let datos = await res.data;
    return datos;
  }