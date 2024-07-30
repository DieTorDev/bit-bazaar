import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../utils/auth/auth.api';
import { StyledForm, StyledInput, StyledSumbit } from './sign-up-form.styles';

const SignUpForm = () => {
	const navigate = useNavigate();

	return (
		<StyledForm onSubmit={e => handleSubmit(e, navigate)}>
			<StyledInput type='text' placeholder='Username' name='username' />
			<StyledInput type='text' placeholder='Email' name='email' />
			<StyledInput type='password' placeholder='Password' name='password' />

			<StyledSumbit type='submit' value='Sign Up' />
		</StyledForm>
	);
};

const handleSubmit = async (event, navigate) => {
	event.preventDefault();

	const { username, email, password } = event.target;

	const newUser = {
		username: username.value,
		email: email.value,
		password: password.value
	};

	await registerUser(newUser);

	navigate('/');
};

export default SignUpForm;
