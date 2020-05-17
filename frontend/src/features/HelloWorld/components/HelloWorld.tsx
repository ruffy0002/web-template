// Main component used should be the same naem as the folder of the feature
import "../css/HelloWorld.css";

import React from "react";
import HelloPerson from "./HelloPerson/HelloPerson";

const HelloWorld = () => {
	return (
		<div className="hw-container">
			{" "}
			<HelloPerson />
		</div>
	);
};

export default HelloWorld;
