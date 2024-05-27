
import { useEffect, useState } from 'react'

interface WindowSize {
	width: number | undefined
	height: number | undefined
	isMobile: boolean
	isTablet: boolean
	isDesktop: boolean
	isPC: boolean
}

const useWindowSize = (): WindowSize => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: 0,
		height: 0,
		isMobile: false,
		isTablet: false,
		isDesktop: true,
		isPC: true,
	})

	useEffect(() => {
		const handleResize = () => {
			const newWidth = window.innerWidth

			setWindowSize({
				width: newWidth,
				height: window.innerHeight,
				isMobile: newWidth < 576,
				isTablet: newWidth >= 576 && newWidth < 1024,
				isDesktop: newWidth >= 1024,
				isPC: newWidth >= 1080,
			})
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}

export default useWindowSize
