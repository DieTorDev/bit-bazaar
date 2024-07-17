import UserNav from '../UserNav/UserNav';
import { StyledHeader, StyledLogo } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<div>
				<StyledLogo src='images/bitbazaar-logo.png' alt='' />
				<h1>BitBazaar</h1>
				<UserNav />
			</div>
		</StyledHeader>
	);
};

export default Header;
