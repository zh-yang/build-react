import React, { useState, useEffect } from 'react';

function Example() {
    const arr = [{name: 1}];
    const [count, setCount] = useState(arr);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        console.log("click", count,arr,count === arr, count[0] === arr[0])
        
    }, [count]);

    return (
        <div>
            <p>You clicked  times</p>
            <button onClick={() => setCount(arr.concat([]))}>
                Click me
      </button>
        </div>
    );
}

export default Example;