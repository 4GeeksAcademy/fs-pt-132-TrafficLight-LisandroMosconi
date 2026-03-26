import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
import TrafficLight from "./TrafficLight";

const Home = () => {
	return (
		<div className="container text-center">
			<TrafficLight />
		</div>
	);
};

export default Home;