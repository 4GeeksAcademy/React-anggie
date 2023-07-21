import React from "react";
import Navbar from "./navbar";
import Carousel from "./carousel";
import Card from "./card";
import Footer from "./footer";
import CardContainer from "./card_container";


//create your first component
const Home = () => {
	return <div>
		<Navbar />
		<Carousel />
		<CardContainer>
			<Card title="Card1" image="https://picsum.photos/200/300?random=1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam blanditiis perspiciatis repellat quos corporis perferendis explicabo officiis et, ut soluta, aliquam vitae aut, earum fugit quia cum rerum inventore!</Card>
			<Card title="Card2" image="https://picsum.photos/200/300?random=2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam blanditiis perspiciatis repellat quos corporis perferendis explicabo officiis et, ut soluta, aliquam vitae aut, earum fugit quia cum rerum inventore!</Card>
			<Card title="Card3" image="https://picsum.photos/200/300?random=3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam blanditiis perspiciatis repellat quos corporis perferendis explicabo officiis et, ut soluta, aliquam vitae aut, earum fugit quia cum rerum inventore!</Card>
			<Card title="Card4" image="https://picsum.photos/200/300?random=4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam blanditiis perspiciatis repellat quos corporis perferendis explicabo officiis et, ut soluta, aliquam vitae aut, earum fugit quia cum rerum inventore!</Card>
		</CardContainer>
		<Footer />
	</div>

};

export default Home;
