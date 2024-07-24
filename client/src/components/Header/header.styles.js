import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`;

const StyledLogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

const StyledLogo = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	background-color: #333333;
	color: white;
	font-family: 'Vollkorn', serif;
	margin: 0;
`;

const StyledTitle = styled.h4`
	color: #333333;
	margin: 0;
	font-weight: 600;
	font-size: 24px;
`;

const StyledBurger = styled.img`
	width: 32px;
`;

export {
	StyledHeader,
	StyledLogoContainer,
	StyledLogo,
	StyledTitle,
	StyledBurger
};
