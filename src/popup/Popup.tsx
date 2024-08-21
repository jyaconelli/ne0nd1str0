import './Popup.css'

import { useEffect, useState } from 'react'

import { themes } from '../contentScript'

const themeToDisplayName = (theme: keyof typeof themes): string => {
  switch (theme) {
    case 'theme90s':
      return '902'
    case 'theme2000s':
      return '2001'
    case 'themeAbsurdist':
      return 'a*s!rd'
    case 'themeCozy':
      return 'c0z7'
    case 'themeEdgy':
      return '3d9y'
    case 'themeYear3000':
      return '3-o0-1'
  }
}

export const Popup = () => {
  const themeNames = Object.keys(themes) as (keyof typeof themes)[]
  const [theme, setTheme] = useState<(typeof themeNames)[number]>()
  const link = 'https://github.com/guocaoyi/create-chrome-ext'

  useEffect(() => {
    chrome.storage.sync.get(['theme'], (result) => {
      setTheme(result.theme || 'theme2000s')
    })
  }, [])

  useEffect(() => {
    // Send message to background script
    chrome.runtime.sendMessage({
      type: 'theme-change',
      theme: theme,
    })
    chrome.storage.sync.set({ theme })
  }, [theme])

  const selectTheme = (theme: (typeof themeNames)[number]) => {
    setTheme(theme)
  }

  return (
    <main>
      <h3>theme-it!</h3>
      <p>Choose a theme:</p>
      <select
        value={theme}
        onChange={(e) => selectTheme(e.target.value as (typeof themeNames)[number])}
      >
        {themeNames.map((themeName) => (
          <option key={themeName} value={themeName}>
            {themeName}
          </option>
        ))}
      </select>
    </main>
  )
}

export default Popup
