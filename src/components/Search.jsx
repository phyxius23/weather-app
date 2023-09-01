import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = () => {
	const [query, setQuery] = useState("");
	const [cities, setCities] = useState([]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const baseEndpoint = process.env.REACT_APP_WEATHER_URL;
	const key = process.env.REACT_APP_WEATHER_KEY;

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSearchCities = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(baseEndpoint + "/search.json?key=" + key + "&q=" + query + "&lang=it");

			if (response.ok) {
				const data = await response.json();

				setCities(data);
				setQuery("");

				// console.log(data);
			} else {
				alert("alert: error fetching results");
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleSetCity = (city) => {
		dispatch({ type: "SET_CITY", payload: city });
		navigate(`/city/${city.name}`);
	};

	return (
		<Container className="search">
			<Row className="h-100 flex-column align-content-center">
				<Col xs={8}>
					<h1 className="mt-5 mb-3">Weather App</h1>
					<Form className="d-flex" onSubmit={handleSearchCities}>
						<Form.Control type="search" className="me-2" placeholder="Cerca città" value={query} onChange={handleChange} />
						<Button type="submit" variant="outline-primary">
							Search
						</Button>
					</Form>
				</Col>
				<Col xs={8}>
					{cities.map((city) => (
						<div key={city.id}>
							<Button className="mt-4" onClick={() => handleSetCity(city)}>
								{city.name}, {city.country}
							</Button>
						</div>
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default Search;
