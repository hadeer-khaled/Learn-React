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
    const [filteredKey , setFilteredKey ] = useState("");

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
        setFilteredKey(value);
    }

    const filterHandler = () =>{
        if(filteredKey.length !== 0){
            return products.filter((product)=> product.name.includes(filteredKey) )
        }
        return products ;
    }

    return (
        <>
            <div className={`products`}>

                <Filter filteration={filteration}></Filter>


                {filterHandler().map((product , idx)=>
                     <Card product ={product} key={idx}  deleteHandler = {deleteHandler} ></Card>
                )}

            </div>
        </>
    )
}

export default Product ;