import { useContext } from 'react';
import { loginRequest } from '../../utils/auth/auth.api';
import {
	StyledForm,
	StyledInput,
	StyledSumbit
} from '../SignUpForm/sign-up-form.styles';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
	const { setUserData } = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<StyledForm onSubmit={e => handleSubmit(e, setUserData, navigate)}>
			<StyledInput type='text' placeholder='Email' name='email' />
			<StyledInput type='password' placeholder='Password' name='password' />

			<StyledSumbit type='submit' value='Sign In' />
		</StyledForm>
	);
};

const handleSubmit = async (event, setUserData, navigate) => {
	event.preventDefault();

	const { email, password } = event.target;

	const loginData = {
		email: email.value,
		password: password.value
	};

	await loginRequest(loginData, setUserData);

	navigate('/');
};

export default SignInForm;
