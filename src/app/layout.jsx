import { Geist, Geist_Mono } from 'next/font/google'
import './index.css'
import { ThemeProvider } from './context/ThemeProvider'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata = {
	title: 'Auth',
}

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
