import 'App.css';
import Card from "components/Card/Card";
import Filter from "components/Filter/Filter";
import { useState , useRef} from 'react';

import styles from "./Product.module.css"

function Product (){


    const [products , setProducts] = useState([
        { id: 1 ,name:"mobile", salary:2000 },
        { id: 2 ,name:"car",    salary:5222000 },
        { id: 3 ,name:"bag", salary:600 },
    ])

    const deleteHandler = (e , clickedIdx) =>{
            // console.log(clickedIdx)
            // const remainingProduct = products.filter((product)=>{
            //     return product.id !== clickedIdx
            // })
            // setProducts(remainingProduct)
            // console.log(products)
            
            
            setProducts((prevProductState)=>{
                return prevProductState.filter((product)=> product.id !== clickedIdx)
            })
            console.log(products)
    }

    const filteration = (value) =>{
        console.log("from product" , value)
    }




    return (
        <>
            <div className={`products`}>
                <Filter filteration={filteration}></Filter>
                {products.map((product , idx)=>
                     <Card product ={product} key={idx}  deleteHandler = {deleteHandler} ></Card>
                )}
            </div>
        </>
    )
}

export default Product ;