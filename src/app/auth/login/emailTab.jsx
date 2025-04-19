import { useForm } from 'react-hook-form'
import { Box, TextField, Button } from '@mui/material'
import PasswordInput from '../../components/passwordInput'
import { validatePassword } from '../../utils/validatePassword'

export default function EmailTab() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onBlur',
	})

	function onSubmit(data) {
		console.log(data)
	}

	return (
		<>
			<Box component='form' onSubmit={handleSubmit(onSubmit)}>
				<TextField
					slotProps={{
						input: {
							autoComplete: 'off',
							readOnly: true,
							onFocus: e => e.target.removeAttribute('readonly'),
						},
					}}
					margin='normal'
					type='email'
					required
					fullWidth
					id='email'
					label='E-mail'
					name='email'
					helperText={errors?.email?.message}
					error={errors?.email}
					{...register('email', {
						required: 'Поле обязательно для заполнения',
						pattern: {
							value: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
							message: 'Некорректный email',
						},
					})}
				/>
				<PasswordInput
					register={register}
					name='password'
					error={!!errors.password}
					helperText={errors?.password?.message}
					{...register('password', {
						validate: validatePassword,
					})}
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
		</>
	)
}
