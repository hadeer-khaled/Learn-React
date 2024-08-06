import { useState } from "react";
function Filter ({filteration}){

    const [textToFilterWith , setTextToFilterWith ] = useState("")

    const filterHandler = (e)=> {
        setTextToFilterWith(e.target.value)
        filteration(e.target.value)
    }

    return  (
        <input type='text' name='filter' placeholder='input anything to filter with' value={textToFilterWith} onChange={filterHandler}></input>
    )
    
 
}

export default Filter ;