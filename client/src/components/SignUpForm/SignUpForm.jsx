import { registerUser } from '../../utils/auth/auth.api';
import { StyledForm, StyledInput, StyledSumbit } from './sign-up-form.styles';

const SignUpForm = () => {
	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledInput type='text' placeholder='Username' name='username' />
			<StyledInput type='text' placeholder='Email' name='email' />
			<StyledInput type='password' placeholder='Password' name='password' />

			<StyledSumbit type='submit' value='Sign Up' />
		</StyledForm>
	);
};

const handleSubmit = async event => {
	event.preventDefault();

	const { username, email, password } = event.target;

	const newUser = {
		username: username.value,
		email: email.value,
		password: password.value
	};

	await registerUser(newUser);
};

export default SignUpForm;
