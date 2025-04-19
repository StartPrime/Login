import { Box, TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import PhoneMaskInput from '../../utils/PhoneMaskInput'

export default function PhoneTab() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onBlur',
	})

	const onSubmit = data => {
		console.log(data)
	}

	return (
		<Box component='form' onSubmit={handleSubmit(onSubmit)}>
			<TextField
				margin='normal'
				required
				fullWidth
				label='Телефон'
				error={!!errors.phone}
				helperText={errors.phone?.message}
				{...register('phone', {
					required: 'Поле обязательно для заполнения',
					validate: value => {
						return !value?.includes('_') || 'Введите полный номер телефона'
					},
				})}
				slotProps={{ input: { inputComponent: PhoneMaskInput } }}
			/>

			<Button
				type='submit'
				fullWidth
				disabled={!isValid}
				variant='contained'
				sx={{ mt: 3, mb: 2 }}
			>
				ВОЙТИ
			</Button>
		</Box>
	)
}
