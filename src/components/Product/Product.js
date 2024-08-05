import 'App.css';
import Card from "../Card/Card";
import { useState , useRef} from 'react';

import styles from "./Product.module.css"

function Product (){

    const inputToFilterWith = useRef(null);
    const [showProducts , setShowProducts] = useState(true)

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

    const toggleShowHandler = () =>{
        setShowProducts(!showProducts)
    }

    const filterHandler = () =>{
        console.log(inputToFilterWith.current.value)
    }

    return (
        <>
            <button onClick={()=>toggleShowHandler()}>
                {showProducts ? "hide ptoducts" :  "show products"}
            </button>
                
            <div className={`products ${showProducts ? styles.show : styles.hide} `}>
                <input type='text' name='filter' placeholder='input anything to filter with' ref={inputToFilterWith} onChange={filterHandler}></input>
                {products.map((product , idx)=>
                     <Card product ={product} key={idx}  deleteHandler = {deleteHandler}></Card>
                )}
            </div>
        </>
    )
}

export default Product ;