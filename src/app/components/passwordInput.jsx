'use client'

import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'

export default function PasswordInput({ value, onChange }) {
	const [showPassword, setShowPassword] = useState(false)

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword)
	}

	const handleMouseDownPassword = event => {
		event.preventDefault()
	}

	return (
		<FormControl margin='normal' fullWidth variant='outlined'>
			<InputLabel htmlFor='outlined-adornment-password'>Пароль *</InputLabel>
			<OutlinedInput
				id='outlined-adornment-password'
				type={showPassword ? 'text' : 'password'}
				value={value}
				onChange={onChange}
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
							aria-label={showPassword ? 'hide password' : 'show password'}
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge='end'
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label='Password'
			/>
		</FormControl>
	)
}
