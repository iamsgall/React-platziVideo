import React, { Component } from 'react';
import './Carousel.css';

export default class Carousel extends Component {
	render() {
		const { children } = this.props;
		return (
			<section className='carousel'>
				<div className='carousel__container'>{children}</div>
			</section>
		);
	}
}
