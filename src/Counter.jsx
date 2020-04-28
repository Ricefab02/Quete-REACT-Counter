import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState () 
  return (
         
    <div>
        
      <href >Entré une valeur :<input type="number" onChange={(event) => setCount(Number(event.target.value))}/></href>
      
      <p>Le compteur est  à : { count } </p>  
      
      <button onClick={() => setCount(count + 1) } >
        +1
      </button>
      
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>

     
    </div>
  );

}

export default Counter;
