import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { URLS } from '../../constants/urls';

const registerUser = async user => {
	const response = await fetch(URLS.REGISTER_USER, {
		method: 'POST',
		body: JSON.stringify(user),
		headers: HEADERS
	});
	const data = await response.json();
	console.log(data);
};

const loginRequest = async (user, setUserData) => {
	try {
		const response = await fetch(URLS.LOGIN_USER, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: HEADERS,
			credentials: 'include'
		});
		if (!response.ok) {
			throw new Error(`Error al realizar la solicitud: ${response.status}`);
		}
		const data = await response.json();
		setUserData(data);
	} catch (error) {
		console.error('Error en la solicitud de inicio de sesión:', error);
		throw error;
	}
};

const verifyToken = async () => {
	try {
		const response = await fetch(URLS.VERIFY_TOKEN, {
			method: METHODS.GET,
			headers: HEADERS,
			credentials: 'include'
		});

		if (!response.ok) {
			throw new Error(`Failed response: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (err) {
		console.error('Invalid Token');
		return false;
	}
};

export { registerUser, loginRequest, verifyToken };
