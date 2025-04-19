export function validatePassword(value) {
	if (!value) return 'Поле обязательно для заполнения'

	if (!/^[A-Za-z0-9~!@#$%^&*()\-_+=]+$/.test(value)) {
		return 'Допустимы символы A-Z, a-z, 0-9 и ~!@#$%^&*()-_+='
	}

	if (value.length < 8) return 'Минимальная длина 8 символов'

	if (!/[A-Z]/.test(value))
		return 'Пароль должен содержать хотя бы одну заглавную букву'

	if (!/[a-z]/.test(value))
		return 'Пароль должен содержать хотя бы одну строчную букву'

	if (!/[0-9]/.test(value)) return 'Пароль должен содержать хотя бы одну цифру'

	if (!/[~!@#$%^&*()\-_+=]/.test(value)) {
		return 'Пароль должен содержать хотя бы один спецсимвол (~!@#$%^&*()-_+=)'
	}

	return true
}
