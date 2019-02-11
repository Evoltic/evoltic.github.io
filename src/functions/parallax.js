function parallax(intensity, element) {
	window.addEventListener('scroll', () => {
		const property = window.pageYOffset / intensity
		element.style.transform = `matrix(1, 0, 0, 1, 0, ${property})`
	})
}

export default parallax
