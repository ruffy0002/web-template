import "../../css/HelloWorld.css";

import React from "react";

interface HelloPersonProps {
	name?: string;
}

const HelloPerson: React.FC<HelloPersonProps> = ({ name = "World" }: HelloPersonProps) => {
	return <h1 className="hw-hp-text"> Hello {name}!</h1>;
};

export default HelloPerson;
