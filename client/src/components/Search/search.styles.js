import styled from 'styled-components';

const StyledSearchContainer = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 12px;
	padding: 20px;
`;

const StyledSearch = styled.div`
	display: flex;
	width: 240px;
	height: 32px;
	padding: 4px;
	background-color: #f0f0f0;
	gap: 6px;
	border-radius: 24px;
`;

const StyledSearchInput = styled.input`
	border: none;
	width: 100%;
	background-color: transparent;
	font-family: 'Asap', sans-serif;
	color: #333333;
	font-size: 16px;

	&:focus {
		outline: none;
	}

	&::placeholder {
		letter-spacing: 1.2px;
	}
`;

const StyledFilterContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 8px;
	width: 100%;
`;

const StyledFilter = styled.p`
	background-color: #f0f0f0;
	color: #333333;
	border-radius: 12px;
	font-size: 16px;
	font-weight: 500;
	text-align: center;
	padding-inline: 15px;
	padding-block: 5px;
	cursor: pointer;
	display: flex;
	gap: 4px;

	&:hover {
		background-color: #333333;
		color: white;
	}
`;

const StyledFilterIcon = styled.img`
	width: 12px;
`;

export {
	StyledSearchContainer,
	StyledSearch,
	StyledSearchInput,
	StyledFilterContainer,
	StyledFilter,
	StyledFilterIcon
};
