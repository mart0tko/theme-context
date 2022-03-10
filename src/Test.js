import { memo } from "react";

function Test({ increment }) {
    console.log('Test component rendered');
    return (
        <>
            <button onClick={increment}>Increment</button>
        </>
    );
}

export default memo(Test);