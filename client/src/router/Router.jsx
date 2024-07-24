import { Route, Routes } from 'react-router-dom';
import Shop from '../pages/Shop';
import Home from '../pages/Home';
import Layout from '../layout/layout';
import Favorites from '../pages/Favorites';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/favorites' element={<Favorites />} />
			</Route>
		</Routes>
	);
};

export default Router;
