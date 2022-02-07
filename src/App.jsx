import { useEffect, useState } from "react";
import getData from "./database/getData.js";

function App() {
  const [data, setData] = useState([]);

  useEffect( async() =>{
    let res = await getData();
    console.log(res)
    setData(res);
  }, [])

  return(
    <ul>
      {
        data.map( datos => <li>{datos.symbol}</li>)
      }
    </ul>
  )

}

export default App
