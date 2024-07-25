import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { UserContext } from '../contexts/userContext';
import { verifyToken } from '../utils/auth/auth.api';

const UserProvider = ({ children }) => {
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);

	console.log(userData);

	useEffect(() => {
		checkLogin(setUserData, setLoading);
	}, []);

	return (
		<UserContext.Provider value={{ userData, setUserData, loading }}>
			{children}
		</UserContext.Provider>
	);
};

const checkLogin = async (setUserData, setLoading) => {
	const cookies = Cookies.get();

	if (!cookies.token) {
		setLoading(false);
		return;
	}

	try {
		const data = await verifyToken();

		if (!data) {
			setLoading(false);
			return;
		}

		setUserData(data);
		setLoading(false);
	} catch (error) {}
};

export default UserProvider;
