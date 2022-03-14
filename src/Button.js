import React from 'react';
import { useTheme } from "./theme-context";

// className is used to apply the styled-components styles
function Button({ className }) {
  const { dispatch, theme } = useTheme();
  return (<button className={className} onClick={() => dispatch({ type: 'toggle' })} style={{ backgroundColor: theme, width: '150px', height: '50px' }}>Toggle</button>);
}

export default Button;