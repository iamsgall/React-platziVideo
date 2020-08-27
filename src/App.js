import React from 'react';
import './App.css';

// Hooks
import useInitialState from './hooks/useInitialState';

// Components
import Header from './components/header/Header';
import Search from './components/search/Search';
import Categories from './components/categories/Categories';
import Carousel from './components/carousel/Carousel';
import CarouselItem from './components/carouselItem/CarouselItem';
import Footer from './components/footer/Footer';

const API = 'http://127.0.0.1:8080/initialState';
function App() {
	const initialState = useInitialState(API);
	console.log(initialState);
	return (
		<div>
			<Header />
			<Search />
			{initialState.mylist.length > 0 && (
				<Categories title={'My List'}>
					<Carousel>
						{initialState.mylist.map((item) => (
							<CarouselItem key={item.id} {...item} />
						))}
					</Carousel>
				</Categories>
			)}
			<Categories title={'Trends'}>
				<Carousel>
					{initialState.trends.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>
			<Categories title={'Originals Platzi-Video'}>
				<Carousel>
					{initialState.originals.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>
			<Footer />
		</div>
	);
}

export default App;
