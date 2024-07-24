import {
	StyledBurger,
	StyledHeader,
	StyledLogo,
	StyledLogoContainer,
	StyledTitle
} from './header.styles';

const Header = ({ mobileMenu, setMobileMenu }) => {
	return (
		<StyledHeader>
			<StyledLogoContainer>
				<StyledLogo>L</StyledLogo>
				<StyledTitle>Ludora</StyledTitle>
			</StyledLogoContainer>
			<StyledBurger
				$menu={mobileMenu}
				onClick={() => setMobileMenu(!mobileMenu)}
				src='/images/menu-icon.svg'
				alt='menu icon'
			/>
		</StyledHeader>
	);
};

export default Header;
