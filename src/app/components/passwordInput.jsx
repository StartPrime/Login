'use client'

import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	FormHelperText,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'

export default function PasswordInput({ register, name, error, helperText }) {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<FormControl margin='normal' fullWidth variant='outlined' error={error}>
			<InputLabel>Пароль *</InputLabel>
			<OutlinedInput
				type={showPassword ? 'text' : 'password'}
				{...register(name)}
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
							onClick={() => setShowPassword(!showPassword)}
							edge='end'
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label='Пароль *'
			/>
			{helperText && <FormHelperText>{helperText}</FormHelperText>}
		</FormControl>
	)
}
