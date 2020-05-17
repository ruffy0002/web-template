import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HelloWorld from "features/HelloWorld/components/HelloWorld";

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={HelloWorld} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
