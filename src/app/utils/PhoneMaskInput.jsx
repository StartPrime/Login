import { IMaskInput } from 'react-imask'
import { forwardRef } from 'react'

const PhoneMaskInput = forwardRef(function PhoneMaskInput(props, ref) {
	const { onChange, ...other } = props
	return (
		<IMaskInput
			{...other}
			mask='+7 (000) 000-00-00'
			definitions={{ 0: /[0-9]/ }}
			inputRef={ref}
			onAccept={value => {
				onChange({ target: { name: props.name, value } })
			}}
			overwrite
			lazy={false}
		/>
	)
})

export default PhoneMaskInput
