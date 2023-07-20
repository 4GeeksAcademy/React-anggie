import React from "react";
import Navbar from "./navbar";
import Carousel from "./carousel";
import Card from "./card";
import Footer from "./footer";


//create your first component
const Home = () => {
	return <div>
		<Navbar />
		<Carousel />
		<Card />
		<Footer />
	</div>

};

export default Home;
