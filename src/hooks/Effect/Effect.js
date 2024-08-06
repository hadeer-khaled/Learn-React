import { useEffect, useState } from "react";
function Effect (){

    const [counter , setCounter] = useState(0);
    useEffect(()=>{
                console.log("mount");
                return ()=>{ console.log("Unmount"); }
            }

    , [])

    const counterHandler = () =>{
        setCounter(counter + 1) ;
    }
    return (

        <>
            <h1>{counter}</h1>
            <button onClick={counterHandler}> + </button>
        </>
    )
}

export default Effect ; 