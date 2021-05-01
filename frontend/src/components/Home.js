import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
	<div>
		<p style={{ color: "whitesmoke" }}>Welcome</p>
		<Link className="button_to_enter" to="/blog/">
			Check Out our Blogs
		</Link>
	</div>
);

export default Home;
