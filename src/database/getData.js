export default async function getData() {
    let res = await fetch('http://localhost:3001/emojis');
    let datos = await res.json();
    return datos;
  }