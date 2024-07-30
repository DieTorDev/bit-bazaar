import Cookies from 'js-cookie';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import {
	StyledData,
	StyledDataContainer,
	StyledEmail,
	StyledUserContainer,
	StyledUserImg,
	StyledUsername
} from './user-menu.styles';

const UserMenu = ({ setMobileMenu }) => {
	const { userData, setUserData } = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<StyledUserContainer>
			<StyledData>
				<StyledUserImg>{/* userImage */}</StyledUserImg>

				<StyledDataContainer>
					<StyledUsername>{userData.username}</StyledUsername>
					<StyledEmail>{userData.email}</StyledEmail>
				</StyledDataContainer>
			</StyledData>

			<img
				onClick={() => handleLogout(setUserData, navigate, setMobileMenu)}
				src='/images/icons/logout-icon.svg'
				alt='logout'
			/>
		</StyledUserContainer>
	);
};

const handleLogout = (setUserData, navigate, setMobileMenu) => {
	Cookies.remove('token');
	setUserData(null);
	navigate('/');
	setMobileMenu(false);
};

export default UserMenu;
