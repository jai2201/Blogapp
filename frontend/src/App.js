import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./hocs/Layout";
import BlogDetail from "./components/BlogDetail";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Blog from "./components/Blog";

const App = () => (
	<Router>
		<Layout>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/blog/user/1" component={Blog}></Route>
				<Route exact path="/blog/:pk" component={BlogDetail}></Route>
				<Route
					exact
					path="/blog/user/myblogs/:pk"
					component={UserProfile}
				></Route>
			</Switch>
		</Layout>
	</Router>
);

export default App;
