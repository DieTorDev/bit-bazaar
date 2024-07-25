import styled from 'styled-components';

const StyledForm = styled.form`
	margin-top: 40px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 36px;
`;

const StyledInput = styled.input`
	height: 55px;
	border: none;
	background-color: #f0f0f0;
	border-radius: 12px;
	padding-left: 20px;
	font-family: 'Asap', sans-serif;
	font-weight: 300;
	font-size: 24px;
	color: #333333;

	&:focus {
		outline: 1px solid #333333;
	}
`;

const StyledSumbit = styled.input`
	margin-top: 60px;
	height: 55px;
	border: none;
	border-radius: 24px;
	color: white;
	background-color: #333333;
	font-family: 'Asap', sans-serif;
	font-weight: 600;
	font-size: 18px;
`;

export { StyledForm, StyledInput, StyledSumbit };
