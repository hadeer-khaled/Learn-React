import CardCss from "./Card.module.css"
function Card ({product , deleteHandler}){

    return(
        <>
            <div className={CardCss.card}>
                    <p>{product.name}</p>
                    <p>{product.salary}</p>
                <button onClick={(e)=>deleteHandler(e,product.id)}> X </button>
            </div>
        </>
    );

}

export default Card ;