import styled from 'styled-components';

const StyledMenu = styled.nav`
	position: absolute;
	width: 100%;
	height: 80%;
	background-color: white;
	top: 100px;
	transform: ${({ $menu }) => ($menu ? `translateX(0%)` : `translateX(-100%)`)};
	transition: ease-in-out 0.2s;
	z-index: 999;
`;

const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding-left: 20px;
	padding-top: 40px;
`;

const StyledListElement = styled.li`
	display: flex;
	align-items: center;
	gap: 12px;
	font-size: 24px;
	font-weight: 600;
	color: #333333;
`;

const StyledIcon = styled.img`
	width: 32px;
`;

const StyledButtonContainer = styled.div`
	padding-top: 60px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding-inline: 20px;
`;

const StyledButton1 = styled.button`
	height: 45px;
	border: none;
	border-radius: 24px;
	color: #333333;
	font-family: 'Asap', sans-serif;
	font-weight: 600;
	font-size: 18px;
`;

const StyledButton2 = styled(StyledButton1)`
	background-color: #333333;
	color: white;
`;

export {
	StyledMenu,
	StyledList,
	StyledListElement,
	StyledIcon,
	StyledButtonContainer,
	StyledButton1,
	StyledButton2
};
