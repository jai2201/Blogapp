import React from "react";
import Logo from "../components/Logo";

const Layout = (props) => (
	<div>
		<Logo />
		{props.children}
	</div>
);

export default Layout;
