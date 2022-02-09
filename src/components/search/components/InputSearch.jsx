import { Fragment } from "react";


export default function InputSearch({valorInput, onInputChange}){
    return(
        <Fragment>
            <input onChange={onInputChange} value={valorInput} className="mx-2" type="text" placeholder="Search Emoji"/>
        </Fragment>
    )
}