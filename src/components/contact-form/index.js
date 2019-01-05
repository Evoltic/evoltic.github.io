class HintPopup extends HTMLElement {
	constructor() {
		super()

		this.shadow = this.attachShadow({ mode: 'closed' })
		this.wrapper = document.createElement('div')

		this.wrapper.textContent = this.textContent

		this.shadow.appendChild(this.wrapper)
	}
}

customElements.define('hint-popup', HintPopup)
