import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const StyledLogoContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const StyledLogo = styled.img`
	width: 64px;
	height: 48px;
`;

const StyledTitleLogo = styled.h1`
	margin: 0;
	display: flex;
	align-items: center;
`;

export { StyledHeader, StyledLogoContainer, StyledLogo, StyledTitleLogo };
