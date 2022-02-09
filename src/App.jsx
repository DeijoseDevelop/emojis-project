import { Fragment, useState, useEffect } from 'react';
import Title from './components/Title';
import EmojisList from './components/EmojisList';
import Search from './components/search/Search';
import CambioPagina from './components/cambioPagina/CambioPagina';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  const [fillData, setFillData] = useState('');
  const [limitData, setLimitData] = useState(25);
  /*  */

  let filtrarDatos = data.filter((emoji) =>{
    let emojiTitleLower = emoji.title.toLowerCase()
    let fillDataLower = fillData.toLowerCase()
    if(emojiTitleLower.includes(fillDataLower)){
      return emoji;
    }
  })

  useEffect(() => {
    async function getData(url) {
      let res = await axios.get(url);
      let datos = await res.data;
      /* let obj = datos[0]; */
      setData(datos);
    }
    getData(`http://localhost:3001/emojis?_limit=${limitData}`);
  }, []);

  const actualizarInput = (e)=>{
    let entradaTeclado = e.target.value.trim();
    setFillData(entradaTeclado)
  }
  const cambiarDetras = ()=>{
    setLimitData(limitData - 25);
    console.log(limitData)
}
const cambiarAdelante = ()=>{
  setLimitData(limitData + 25);
  console.log(limitData)
}
  return (
    <Fragment>
      <Title />
      <Search filtrado={fillData} change={actualizarInput}/>
      <CambioPagina retrasar={cambiarDetras} avanzar={cambiarAdelante}/>
      <EmojisList datos={fillData ? filtrarDatos : data} />
    </Fragment>
  );
}

export default App;
