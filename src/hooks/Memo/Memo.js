import 'App.css';

import { useState , useMemo } from 'react';

function Memo() {

    const [slowCounter ,  setSlowCounter] = useState(0);
    const [fastCounter ,  setFastCounter] = useState(0);

    function slowIncrement(){
       
        setSlowCounter( slowCounter + 1 ) ; 
    }

    function fastIncrement(){
        setFastCounter( fastCounter + 1 ) ; 
    }

    const  isEven = useMemo(()=> {
        let k  = 0 ; 
        while (k < 2000000000 ) k++ ; 
        return slowCounter %  2 === 0 ; 
    }, [slowCounter])

  return (
        <>
            <div className='centered-box'>
                <p> {slowCounter} </p>
                <button onClick={slowIncrement}> slow increment</button>
                {isEven  ? <p> Even</p> : <p> Odd </p>}
            </div>        
            <div className='centered-box'>
                <p> {fastCounter} </p>
                <button onClick={fastIncrement}> fast increment</button>
            </div>        
        </>
  );
}

export default Memo;


