import React from "react";
import {
	SideBarContainer,
	Icon,
	CloseIcon,
	SideBarMenu,
	SideBarLink,
	SideBtnWrap,
	SideBarRoute,
} from "./SideBarElements";

export default function SideBar({ toggle, isOpen }) {
	return (
		<SideBarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SideBarMenu>
				<SideBarLink to="/">Pizzas</SideBarLink>
				<SideBarLink to="/">Postres</SideBarLink>
				<SideBarLink to="/">Menu Completo</SideBarLink>
			</SideBarMenu>
			<SideBtnWrap>
				<SideBarRoute to="/">Ordenar Ahora</SideBarRoute>
			</SideBtnWrap>
		</SideBarContainer>
	);
}
