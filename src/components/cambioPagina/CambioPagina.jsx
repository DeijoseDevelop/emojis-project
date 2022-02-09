export default function CambioPagina({retrasar, avanzar}){
    return(
        <div className="d-flex justify-content-around">
            <button onClick={retrasar} className="btn btn-primary">Anterior</button>
            <button onClick={avanzar} className="btn btn-primary">Siguiente</button>
        </div>
    )
}