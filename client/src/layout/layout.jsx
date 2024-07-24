import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import { useState } from 'react';

const Layout = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<>
			<Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
			<Menu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
			<Outlet />
		</>
	);
};

export default Layout;
