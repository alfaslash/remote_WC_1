import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { App, AppProps } from './components/App';
import './styles/index.sass';

class MainWebComponents extends HTMLElement {
	private container: HTMLDivElement;
	private options: AppProps;
	private root: Root;

	constructor() {
		super();

		try {
			this.options = JSON.parse(this.getAttribute("props"));
		} catch (ex) {
			console.log(ex);
		}
	}

	set props(props: AppProps) {
		this.options = props;
		this.render();
	}

	connectedCallback() {
		this.container = document.createElement('div');
		this.root = createRoot(this.container);
		this.appendChild(this.container);

		this.render()
	}

	disconnectedCallback() {
		this.root.render(null);
	}

	private render() {
		if (!!this.container && !!this.options) {
			this.root.render(<App {...this.options} />);
		}
	}
}

if (!customElements.get('main-web-components')) {
	customElements.define('main-web-components', MainWebComponents);
}
