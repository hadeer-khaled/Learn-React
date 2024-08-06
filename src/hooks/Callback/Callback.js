import {useCallback , useState} from 'react'

function Callback(){

    const [count, setCount] = useState(0);

    // const increment = () => {
    //   setCount(count + 1);
    // };
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
      }, []); 
    
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <Button incrementHandler={increment} />
      </div>
    );
  }

function Button({ incrementHandler }) {
    console.log('Child component re-rendered');
    return <button onClick={incrementHandler}>Increment</button>;
}
export default Callback ; 

