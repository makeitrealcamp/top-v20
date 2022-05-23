import React from 'react'

import { useTheme } from './ThemeContext'

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return(
    <div>
      <button onClick={handleClick}>
        { theme === 'light' ? 'Dark' : 'Light' }
      </button>
    </div>
  )
}

export default ToggleTheme
