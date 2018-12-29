import './index.scss'

function parallax(intensity, element) {
	window.addEventListener('scroll', () => {
		const property = window.pageYOffset / intensity
		element.style.transform = `matrix(1, 0, 0, 1, 0, ${property})`
	})
}

parallax(2, document.querySelector('.section._preface'))
