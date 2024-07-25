import { Route, Routes } from 'react-router-dom';
import Shop from '../pages/Shop';
import Home from '../pages/Home';
import Layout from '../layout/layout';
import Favorites from '../pages/Favorites';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default Router;
