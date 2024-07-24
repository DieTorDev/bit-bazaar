import { Link } from 'react-router-dom';
import {
	StyledButton1,
	StyledButton2,
	StyledButtonContainer,
	StyledIcon,
	StyledList,
	StyledListElement,
	StyledMenu
} from './menu.styles';
import { MENU_DATA } from '../../constants/menu';
import { useState } from 'react';

const Menu = ({ mobileMenu, setMobileMenu }) => {
	const [currentPage, setCurrentPage] = useState('Home');

	return (
		<StyledMenu $menu={mobileMenu}>
			<StyledList>
				{MENU_DATA.map((element, i) => (
					<StyledListElement key={i}>
						<StyledIcon
							src={
								currentPage === element.name ? element.iconFill : element.icon
							}
							alt={element.name}
						/>
						<Link
							onClick={() =>
								handleClick(setMobileMenu, setCurrentPage, element.name)
							}
							to={element.path}
						>
							{element.name}
						</Link>
					</StyledListElement>
				))}
			</StyledList>

			<StyledButtonContainer>
				<StyledButton1>Sign Up</StyledButton1>
				<StyledButton2>Sign In</StyledButton2>
			</StyledButtonContainer>
		</StyledMenu>
	);
};

const handleClick = (setMobileMenu, setCurrentPage, page) => {
	setMobileMenu(false);
	setCurrentPage(page);
};

export default Menu;
