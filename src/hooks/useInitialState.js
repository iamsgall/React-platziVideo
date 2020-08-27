import { useState, useEffect } from 'react';

const useInitialState = (API) => {
	const [videos, setVideos] = useState({
		mylist: [],
		trends: [],
		originals: [],
	});
	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const res = await fetch(API);
				const data = await res.json();
				return setVideos(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchVideos();
	}, [API]);
	return videos;
};

export default useInitialState;
