import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CarouselItem.css';

// Static Files - Imgs
import playIcon from '../../static/img/play-icon.png';
import plusIcon from '../../static/img/plus-icon.png';

export default class CarouselItem extends Component {
	static propTypes = {
		cover: PropTypes.string,
		title: PropTypes.string,
		contentRating: PropTypes.string,
		year: PropTypes.number,
		duration: PropTypes.number,
	};
	render() {
		const { cover, title, year, contentRating, duration } = this.props;
		return (
			<div className='carousel-item'>
				<img className={cover} alt={title} src={cover} />
				<div className='carousel-item__details'>
					<div>
						<img
							className='carousel-item__details--img'
							src={playIcon}
							alt='Play Icon'
						/>
						<img
							className='carousel-item__details--img'
							src={plusIcon}
							alt='Plus Icon'
						/>
					</div>
					<p className='carousel-item__details--title'>{title}</p>
					<p className='carousel-item__details--subtitle'>
						{`${year} ${contentRating} ${duration}`}
					</p>
				</div>
			</div>
		);
	}
}
