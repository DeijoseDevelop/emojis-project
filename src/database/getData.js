import axios from "axios";

export default async function getData(url) {
  let res = await axios.get(url);
  let datos = await res.data;

  datos.map( async(dato) => {
    let emoji = {
      emoticon: dato.symbol,
      title: dato.title,
      text: dato.keywords
    }
  })
  }