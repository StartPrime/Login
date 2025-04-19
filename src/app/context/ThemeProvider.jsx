'use client'

import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
	const [isReady, setIsReady] = useState(false)
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')
		setIsDark(savedTheme === 'dark')
		setIsReady(true)
	}, [])

	useEffect(() => {
		if (isReady) {
			localStorage.setItem('theme', isDark ? 'dark' : 'light')
		}
	}, [isDark, isReady])

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: isDark ? 'dark' : 'light',
				},
			}),
		[isDark]
	)

	const toggleTheme = () => setIsDark(!isDark)

	if (!isReady) {
		return null
	}

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	)
}

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error()
	}
	return context
}
