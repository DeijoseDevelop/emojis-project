import { Fragment } from "react";
import InputSearch from "./components/InputSearch";

export default function Search(props){
    return(
        <div className="my-5 pagination justify-content-end">
            <InputSearch valorInput={props.filtrado} onInputChange={props.change}/>
        </div>
    )
}