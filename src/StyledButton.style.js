import styled from 'styled-components';
import Button from './Button';

export const StyledButton = styled(Button)`
    width: 200px;
    height: 50px;
    background-color: ${(props) => props.setColor ? props.setColor : 'green'};
    &:hover {
        background-color: red !important;
        // rewrite the span styles from the button
        & span {
            color: black;
        }
    }
`;

export const StyledButtonText = styled.span`
    color: yellow;
`;