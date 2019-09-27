import React, {useState} from "react"

function Counter()
{
    const [count, setCounter] = useState(0);

    return(
        <div className="counter">
            <b style={{border:"solid",backgroundColor:"lightblue"}}> Counter world!!</b>
            <br/>
            <br/>
            <div id="main">
                <p>You have clicked {count} times...</p>
                <br/>
                <button onClick={()=>setCounter(count+1)} style={{marginRight:"40px",color:"Green"}}>Increase Me</button>
                <button onClick={()=> setCounter(count-1)} style={{color:"red"}}>Decrease Me</button>
            </div>
        </div>
    )
}

export default Counter;