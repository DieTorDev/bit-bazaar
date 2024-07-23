import styled from 'styled-components';

const StyledUserList = styled.nav`
	display: none;
	@media (min-width: 768px) {
		display: flex;
		list-style: none;
		gap: 16px;
	}
`;

export { StyledUserList };
