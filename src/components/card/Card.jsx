import { useState, useEffect } from "react";
import Emoji from "./components/Emoji";
import Titulo from "./components/Titulo";
import Text from "./components/Text";
import getData from '../../database/getData';

export default function Card() {

    const [data, setData] = useState([]);

    useEffect( async() => {
        let res = getData();
        setData(res);
    }, []);

    return (
        <div className="">
        {
            data.map(dato =>{
                <div className="card">
                    <Emoji emoji={dato.symbol}/>
                    <div className="card-body"></div>
                    <Titulo className="card-title" titulo={dato.title}/>
                    <Text className="card-text" text={dato.keywords}/>
                </div>
            })
        }
        </div>
    )
}