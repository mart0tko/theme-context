import * as React from 'react'

const ThemeContext = React.createContext();

function themeReducer(state, action) {
    switch (action.type) {
        case 'toggle': {
            return { theme: state.theme === 'red' ? 'blue' : 'red' };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function ThemeProvider({ children }) {
    const [state, dispatch] = React.useReducer(themeReducer, { theme: 'red' });
    const value = { theme: state.theme, dispatch };
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export { ThemeProvider, useTheme }