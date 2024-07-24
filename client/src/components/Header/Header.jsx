import {
	StyledBurger,
	StyledHeader,
	StyledLogo,
	StyledLogoContainer,
	StyledTitle
} from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledLogoContainer>
				<StyledLogo>L</StyledLogo>
				<StyledTitle>Ludora</StyledTitle>
			</StyledLogoContainer>
			<StyledBurger src='/images/menu-icon.svg' alt='' />
		</StyledHeader>
	);
};

export default Header;
