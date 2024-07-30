import styled from 'styled-components';

const StyledUserContainer = styled.div`
	padding: 20px;
	display: flex;
	gap: 16px;
	align-items: center;
	justify-content: space-between;
`;

const StyledData = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
`;

const StyledUserImg = styled.div`
	width: 70px;
	height: 70px;
	background-color: gray;
	border-radius: 50%;
	cursor: pointer;
`;

const StyledDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const StyledUsername = styled.p`
	font-size: 20px;
	font-weight: 700;
	color: #333333;
	margin: 0;
`;

const StyledEmail = styled.p`
	font-size: 14px;
	font-weight: 500;
	color: gray;
	margin: 0;
`;

export {
	StyledUserContainer,
	StyledData,
	StyledUserImg,
	StyledDataContainer,
	StyledUsername,
	StyledEmail
};
