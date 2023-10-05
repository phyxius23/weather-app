import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { baseEndpoint } from "../utils/utils";
import { key } from "../utils/utils";
import { getImageCity, resetImageAction } from "../store/imageCity/imageCityActions";
import { getCityAction } from "../store/city/cityActions";
import { getForecastsAction } from "../store/forecasts/forecastsActions";
import { addFavoritesAction, removeFavoritesAction } from "../store/favorites/favoritesActions";

const Search = () => {
	const [query, setQuery] = useState("");
	const [cities, setCities] = useState([]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const favorites = useSelector((state) => state.favorites.favorites);

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSearchCities = async (e) => {
		e.preventDefault();

		if (query !== "") {
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
		}
	};

	const handleSetCity = (city) => {
		dispatch(resetImageAction());
		dispatch(getImageCity(city.name));
		dispatch(getCityAction(city));
		dispatch(getForecastsAction(city));
		navigate(`/city/${city.name}`);
	};

	const handleAddFavorites = (e, cityId) => {
		e.stopPropagation();
		dispatch(addFavoritesAction(cityId));
	};

	const handleRemoveFavorites = (e, cityId) => {
		e.stopPropagation();
		dispatch(removeFavoritesAction(cityId));
	};

	return (
		<Container className="search" fluid>
			<Row className="h-100 flex-column align-content-center">
				<Col xs={8}>
					<h1 className="mt-5 mb-3">Weather App</h1>
					<Form className="d-flex" onSubmit={handleSearchCities}>
						<Form.Control type="search" className="me-2" placeholder="Search city" value={query} onChange={handleChange} />
						<Button type="submit" variant="outline-primary">
							Search
						</Button>
					</Form>
				</Col>
				<Col xs={8}>
					{cities.map((city) => (
						<div key={city.id}>
							<Button className="mt-4 w-100 d-flex justify-content-between align-items-center" onClick={() => handleSetCity(city)}>
								<span>
									{city.name}, {city.country === "United States of America" ? "USA" : city.country}
								</span>
								{favorites.includes(city.id) ? <HeartFill onClick={(e) => handleRemoveFavorites(e, city.id)} /> : <Heart onClick={(e) => handleAddFavorites(e, city.id)} />}
							</Button>
						</div>
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default Search;
