import Card from './card/Card';

export default function EmojisList({datos}){

    return(
        
        <div className="container" style={{display: 'grid',gridTemplateColumns: 'auto auto auto auto', gridGap: '30px'}}>
            {
                datos.length === 0 
                ? (
                    <h3>Cargando...</h3>
                    )
                : (
                    datos.map((card, index) =>{
                        return (
                            <Card key={index} emoji={card.symbol} titulo={card.title} text={card.keywords}/>
                        )
                    })
                )
            }
        </div>  
    )
}
/* export default function EmojisList({ datos }) {
  return (
     <div>
            <Card key={index} emoji={datos.symbol} titulo={datos.title} text={datos.keywords}/>
        </div> 
    <div className='container' style={{display: 'grid',gridTemplateColumns: 'auto auto auto auto',gridGap: '30px',}}>
      {
        datos.map((card, index) => {
          return <Card key={index} emoji={card.symbol} titulo={card.title}text={card.keywords}/>
        }
      )}
    </div>
  );
}
 */