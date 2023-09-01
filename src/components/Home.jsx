import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
	console.log("env weather key: ", process.env.REACT_APP_WEATHER_KEY);
	console.log("env weather url: ", process.env.REACT_APP_WEATHER_URL);
	return (
		<Container className="home">
			<Row className="h-100 justify-content-center align-items-center">
				<Col xs={8} className="text-center">
					<h1 className="mb-3">Weather App</h1>
					<Link to="/search">
						<Button variant="primary" className="w-100 p-2">
							Get start
						</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
