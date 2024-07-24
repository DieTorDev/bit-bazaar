import styled from 'styled-components';

const StyledContainer = styled.section`
	margin: 20px;
	overflow: hidden;
	border-radius: 12px;
`;

const StyledBanner = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	width: 100%;
	translate: ${({ $slider }) => $slider + '%'};
	transition: ease-in-out 1s;
`;

export { StyledContainer, StyledBanner };
