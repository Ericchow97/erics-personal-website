import { createContext } from 'react'

export const ThemeContext = createContext({
  isDark: true,
  changeTheme: (state: boolean) => { },
  handleContactClick: (e: React.MouseEvent) => {},
})
