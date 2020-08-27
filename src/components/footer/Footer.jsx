import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<a href='/'>Terminos de uso</a>
				<a href='/'>Declaración de privacidad</a>
				<a href='/'>Centro de ayuda</a>
			</footer>
		);
	}
}
