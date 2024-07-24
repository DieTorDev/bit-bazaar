import { useState, useEffect } from 'react';
import { NEWS_BANNER } from '../../constants/news-banner';
import { StyledBanner, StyledContainer } from './news-banner.styles';

const NewsBanner = () => {
	const [slider, setSlider] = useState(0);

	useEffect(() => {
		const intervalId = initSlider(setSlider);
		return () => clearInterval(intervalId); // Cleanup interval on component unmount
	}, []);

	return (
		<StyledContainer>
			<StyledBanner $slider={slider}>
				{NEWS_BANNER.map((banner, i) => (
					<img key={i} src={banner} alt='' />
				))}
			</StyledBanner>
		</StyledContainer>
	);
};

const initSlider = setSlider => {
	let index = 0;
	return setInterval(() => {
		index++;
		if (index > NEWS_BANNER.length - 1) index = 0;
		const percentage = index * -100;
		setSlider(percentage);
	}, 4000);
};

export default NewsBanner;
