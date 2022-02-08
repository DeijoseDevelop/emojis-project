import { Fragment, useState, useEffect } from "react";
import Card from './card/Card';
import axios from "axios";

export default function EmojisList(){

    const [data, setData] = useState([])

    let persona = {
        nombre: 'Deiver',
        apellido: 'Vazquez',
        correo: 'thebigdeijose@gmail.com'
    };
    let persona2 = {
        nombre: 'Deiver',
        apellido: 'Vazquez',
        correo: 'thebigdeijose@gmail.com'
    };
    let persona3 = {
        nombre: 'Deiver',
        apellido: 'Vazquez',
        correo: 'thebigdeijose@gmail.com'
    };

    let personas = [persona, persona2, persona3];

    useEffect(() => {
        async function getData(url) {
            let res = await axios.get(url);
            let datos = await res.data.slice(0, 10);
            
            setData(datos);
            }
            getData('http://localhost:3001/emojis');
        }, [])
    console.log(data)
    return(
        <div className="d-grid" style={{gridTemplateColumns: 'auto auto auto auto'}}>
            {
                personas.map((persona)=>{
                    <Card symbol={persona.nombre} title={persona.apellido} keywords={persona.correo}/>
                })
            }
                {
                    data.length === 0 ? (
                        <h3>Cargando...</h3>
                    ) : (
                        data.map((card, index) =>{
                            <div>
                                <Card key={index} symbol={card.symbol} title={card.title} keywords={card.keywords}/>
                            </div>
                        })
                    )
                }
            </div>
    )
}
