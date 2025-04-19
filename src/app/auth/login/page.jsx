'use client'

import classes from './page.module.scss'
import {
	Container,
	Typography,
	Paper,
	Box,
	Divider,
	FormControlLabel,
	Checkbox,
	Tabs,
	Tab,
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import EmailTab from './emailTab'
import PhoneTab from './phoneTab'
import ThemeToggle from '../../components/ThemeToggle'

export default function Login() {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<div className={classes.main}>
			<Container maxWidth='sm' sx={{ py: 4 }}>
				<Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
					<Image
						src='/hat.jpg'
						width={120}
						height={100}
						alt='Логотип'
						priority
					/>
				</Box>

				<Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
					<Tabs
						value={activeTab}
						onChange={(_, newValue) => setActiveTab(newValue)}
						variant='fullWidth'
						sx={{ mb: 2 }}
					>
						<Tab label='E-MAIL / ПАРОЛЬ' />
						<Tab label='НОМЕР ТЕЛЕФОНА' />
					</Tabs>

					<Divider sx={{ mb: 3 }} />

					{activeTab === 0 ? <EmailTab /> : <PhoneTab />}

					<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
						<FormControlLabel
							control={<Checkbox size='small' />}
							label='Запомнить меня'
						/>
						<ThemeToggle />
					</Box>
				</Paper>

				<Typography
					variant='body2'
					color='text.secondary'
					align='center'
					sx={{ mt: 4 }}
				>
					Copyright © Управa 2025.
				</Typography>
			</Container>
		</div>
	)
}
