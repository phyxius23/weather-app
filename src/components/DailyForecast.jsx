/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDailyForecastAction, getNextForecastAction } from "../assets/redux/actions";
import { Col, Container, Image, Row } from "react-bootstrap";

const DailyForecast = () => {
	const dispatch = useDispatch();
	const city = useSelector((state) => state.city.content);
	const dailyForecast = useSelector((state) => state.dailyForecast.content.current);
	const nextForecast = useSelector((state) => state.nextForecast.content.forecast);

	useEffect(() => {
		dispatch(getDailyForecastAction(city));
		dispatch(getNextForecastAction(city));
	}, []);

	const convertDate = (date) => {
		const setDate = new Date(date);
		const options = { weekday: "long", year: "numeric", month: "short", day: "2-digit" };
		const newDate = setDate.toLocaleDateString("it-IT", options);

		return newDate.slice(-11).slice(0, 6).toUpperCase();
	};

	const convertDay = (date) => {
		const setDate = new Date(date);
		const options = { weekday: "long", year: "numeric", month: "short", day: "2-digit" };
		const newDate = setDate.toLocaleDateString("it-IT", options);

		const myDay = newDate.split(" ")[0];

		return myDay[0].toUpperCase() + myDay.slice(1);
	};

	return (
		<Container className="forecast">
			{dailyForecast && nextForecast && (
				<>
					<Row>
						<Col xs={12} className="forecats__img">
							<Image src={`https:${dailyForecast.condition.icon}`} fluid />
						</Col>
					</Row>
					<Row>
						<Col xs={12} className="forecast__info-daily d-flex flex-column mx-3">
							<div className="forecast__now d-flex justify-content-around align-items-center">
								<p className="">{dailyForecast.temp_c}°</p>
								<Image src={`https:${dailyForecast.condition.icon}`} />
								<div className="d-flex flex-column align-items-start flex-grow-1">
									<p>ore {dailyForecast.last_updated.slice(-5).slice(0, 2)}:00</p>
									<p>{dailyForecast.condition.text}</p>
								</div>
							</div>
						</Col>
						<Col xs={12} className="forecast__next-hours"></Col>
					</Row>
					<Row>
						<Col xs={12} className="forecast__next-days bg-white px-0">
							{nextForecast.forecastday.map((day) => (
								<div className="forecast__next-day p-3" key={day.date_epoch}>
									<div className="flex-grow-1">
										<p className="fw-bold">{convertDay(day.date)}</p>
										<p>{convertDate(day.date)}</p>
									</div>
									<div>
										<Image src={`https:${day.day.condition.icon}`} fluid />
									</div>
									<div className="px-2">
										<p>{day.day.maxtemp_c.toString().slice(0, 2)}°</p>
										<p>{day.day.mintemp_c.toString().slice(0, 2)}°</p>
									</div>
									<div className="flex-grow-1 text-end">
										<p>{day.day.totalprecip_in === 0 ? "Assenti" : day.day.totalprecip_in + " mm"}</p>
										<p>{day.day.avgvis_km} km/h</p>
									</div>
								</div>
							))}
						</Col>
					</Row>
				</>
			)}
		</Container>
	);
};

export default DailyForecast;
