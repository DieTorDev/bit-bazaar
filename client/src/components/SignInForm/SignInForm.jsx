import { useContext } from 'react';
import { loginRequest } from '../../utils/auth/auth.api';
import {
	StyledForm,
	StyledInput,
	StyledSumbit
} from '../SignUpForm/sign-up-form.styles';
import { UserContext } from '../../contexts/userContext';

const SignInForm = () => {
	const { setUserData } = useContext(UserContext);
	return (
		<StyledForm onSubmit={e => handleSubmit(e, setUserData)}>
			<StyledInput type='text' placeholder='Email' name='email' />
			<StyledInput type='password' placeholder='Password' name='password' />

			<StyledSumbit type='submit' value='Sign In' />
		</StyledForm>
	);
};

const handleSubmit = async (event, setUserData) => {
	event.preventDefault();

	const { email, password } = event.target;

	const loginData = {
		email: email.value,
		password: password.value
	};

	await loginRequest(loginData, setUserData);
};

export default SignInForm;
