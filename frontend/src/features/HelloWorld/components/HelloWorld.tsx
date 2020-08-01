// Main component used should be the same naem as the folder of the feature
import "../css/HelloWorld.css";

import React from "react";
import HelloPerson from "./HelloPerson/HelloPerson";
import { NetworkConfig } from "shared/settings";

const HelloWorld: React.FC = () => {
	return (
		<div className="hw-container">
			{NetworkConfig.port}
			<HelloPerson />
		</div>
	);
};

export default HelloWorld;
