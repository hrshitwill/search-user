import { useState } from "react";
function Button(){
    const [c, sc] = useState(0);
    function handleClick(){
        alert("Button Clicked");
        sc(c + 1);
    }
    return (
        <>
        <h1>count: {c}</h1>
        <button onClick={handleClick}>like button:{c}</button>
        <button onClick={() => sc(c - 1)}>dislike button:{c}</button>
        <button onClick={() => sc(0)}>reset button</button>
        </>
    )
}
export default Button;