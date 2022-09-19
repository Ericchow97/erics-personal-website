import React, {createContext} from 'react'

export const ThemeDarkContext = createContext({
  isDark: true,
  changeTheme: (state: boolean) => {}
})
