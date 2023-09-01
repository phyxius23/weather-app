import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Search = () => {
	return (
		<Container className="search">
			<Row className="h-100 justify-content-center align-items-center">
				<Col xs={8} className="">
					<h1 className="mb-3">Weather App</h1>
					<Form
						className="d-flex"
						// onSubmit={handleSubmit}
					>
						<Form.Control
							type="search"
							className="me-2"
							placeholder="Cerca città"
							// value={query}
							// onChange={handleChange}
						/>
						<Button type="submit" variant="outline-primary">
							Search
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Search;
