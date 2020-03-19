import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Stud = () => <div />;

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Stud} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
