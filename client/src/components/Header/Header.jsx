import UserNav from '../UserNav/UserNav';
import {
	StyledHeader,
	StyledLogo,
	StyledLogoContainer,
	StyledTitleLogo
} from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledLogoContainer>
				<StyledLogo src='images/bitbazaar-logo.png' alt='' />
				<StyledTitleLogo>BitBazaar</StyledTitleLogo>
			</StyledLogoContainer>
			<UserNav />
		</StyledHeader>
	);
};

export default Header;
