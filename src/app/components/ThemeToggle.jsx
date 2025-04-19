'use client'

import { IconButton, Tooltip } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '../context/ThemeProvider'

export default function ThemeToggle() {
	const { isDark, toggleTheme } = useTheme()

	return (
		<Tooltip title={isDark ? 'Светлая тема' : 'Тёмная тема'}>
			<IconButton onClick={toggleTheme} color='inherit'>
				{isDark ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Tooltip>
	)
}
