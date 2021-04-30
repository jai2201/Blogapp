import React from "react";
import Logo from "../components/Logo";
import ScrollButton from "../components/ScrollButton";

const Layout = (props) => (
	<div>
		<Logo />
		<ScrollButton />
		{props.children}
	</div>
);

export default Layout;
