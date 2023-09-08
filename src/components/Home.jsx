import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<Container className="home" fluid>
			<Row className="h-100 justify-content-center align-items-center">
				<Col xs={8} className="text-center">
					<h1 className="mb-3">Weather App</h1>
					<Link to="/search">
						<Button variant="primary" className="w-100 p-2">
							Welcome!
						</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
