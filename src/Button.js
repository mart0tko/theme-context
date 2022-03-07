import React from 'react';
import { useTheme } from "./theme-context";

function Button() {
  const { dispatch, theme } = useTheme();
  return (<button onClick={() => dispatch({ type: 'toggle' })} style={{ backgroundColor: theme, width: '150px', height: '50px' }}>Toggle</button>);
}

export default Button;