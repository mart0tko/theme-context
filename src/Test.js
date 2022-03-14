import { memo } from "react";
import { StyledButton, StyledButtonText } from "./StyledButton.style";

function Test({ increment }) {
    console.log('Test component rendered');
    return (
        <>
            <button onClick={increment}>Increment</button>
            <StyledButton setColor="black">Test</StyledButton>
            <StyledButton><StyledButtonText>Test</StyledButtonText></StyledButton>
        </>
    );
}

export default memo(Test);