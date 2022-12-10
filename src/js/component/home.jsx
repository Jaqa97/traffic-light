import React from "react";
import { Traffic } from "./traffic.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid text-center">
			
			<Traffic/>
			
		</div>
	);
};

export default Home;
