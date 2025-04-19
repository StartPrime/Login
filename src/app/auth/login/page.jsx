'use client'

import {
	Container,
	Typography,
	Paper,
	Box,
	TextField,
	Divider,
	FormControlLabel,
	Checkbox,
	Button,
} from '@mui/material'
import classes from './page.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import PasswordInput from '../../components/passwordInput'

export default function Login() {
	const [activeTab, setActiveTab] = useState('email')
	const [formData, setFormData] = useState({
		email: '',
		phone: '',
		password: '',
		rememberMe: false,
	})

	const handleSubmit = e => {
		e.preventDefault()
		console.log(formData)
	}

	const handleInputChange = field => e => {
		setFormData({
			...formData,
			[field]: e.target.value,
		})
	}

	const isSubmitDisabled = () => {
		if (activeTab === 'email') {
			return !formData.email || !formData.password
		}
		return !formData.phone
	}

	return (
		<div className={classes.main}>
			<Container maxWidth={'sm'}>
				<Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
					<Image src='/hat.jpg' width={120} height={100} alt='img' priority />
				</Box>

				<Paper elevation={3} sx={{ p: 2, borderRadius: 4 }}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-around',
							px: { xs: 0, sm: 4, md: 8 },
						}}
					>
						<Typography
							sx={{
								cursor: 'pointer',
								pb: 1,
								fontSize: { xs: '0.8rem', sm: '1rem' },
							}}
							className={
								activeTab === 'email' ? classes.activeTab : classes.notActiveTab
							}
							onClick={() => setActiveTab('email')}
						>
							E-MAIL / ПАРОЛЬ
						</Typography>
						<Typography
							sx={{
								cursor: 'pointer',
								pb: 1,
								fontSize: { xs: '0.8rem', sm: '1rem' },
							}}
							className={
								activeTab === 'phone' ? classes.activeTab : classes.notActiveTab
							}
							onClick={() => setActiveTab('phone')}
						>
							НОМЕР ТЕЛЕФОНА
						</Typography>
					</Box>

					<Divider sx={{ mb: 3 }} />

					<Box component='form' onSubmit={handleSubmit}>
						{activeTab === 'email' ? (
							<Box>
								<TextField
									margin='normal'
									required
									fullWidth
									id='email'
									label='E-mail'
									name='email'
									autoFocus
									value={formData.email}
									onChange={handleInputChange('email')}
								/>
								<PasswordInput
									value={formData.password}
									onChange={handleInputChange('password')}
								/>
							</Box>
						) : (
							<TextField
								margin='normal'
								required
								fullWidth
								name='phone'
								label='Телефон'
								value={formData.phone}
								onChange={handleInputChange('phone')}
							/>
						)}

						<FormControlLabel
							control={
								<Checkbox
									checked={formData.rememberMe}
									onChange={e =>
										setFormData({ ...formData, rememberMe: e.target.checked })
									}
								/>
							}
							label='Запомнить меня'
						/>

						<Button
							type='submit'
							fullWidth
							variant='contained'
							disabled={isSubmitDisabled()}
							sx={{ mt: 3, mb: 2 }}
						>
							ВОЙТИ
						</Button>
					</Box>
				</Paper>

				<Typography
					variant='body2'
					color='text.secondary'
					align='center'
					sx={{ mt: { xs: 4, sm: 8, md: 12 } }}
				>
					Copyright © Управa 2025.
				</Typography>
			</Container>
		</div>
	)
}
