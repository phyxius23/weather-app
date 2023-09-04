/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDailyForecastAction, getNextForecastAction, selectDayAction } from "../assets/redux/actions";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DailyForecast = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const city = useSelector((state) => state.city.content);
	const dailyForecast = useSelector((state) => state.nextForecast.content.current);
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

	const loadPage = (day) => {
		dispatch(selectDayAction(day));
		navigate(`/city/${city.name}/detail`);
	};

	return (
		<Container className="forecast-intro">
			{dailyForecast && nextForecast && (
				<>
					{/* IMMAGINE RIEPILOGATIVA */}
					<Row>
						<Col xs={12} className="forecast__img">
							<Image src={`https:${dailyForecast.condition.icon}`} fluid />
						</Col>
					</Row>

					{/* PREVISIONE ATTUALE E DELLE PROSSIME ORE */}
					<Row className="py-3" onClick={() => loadPage(dailyForecast)}>
						<Col xs={12} className="forecast__info-daily d-flex flex-column ">
							<div className="forecast__now d-flex justify-content-center align-items-center">
								<p className="">{dailyForecast.temp_c}°</p>
								<Image className="px-3" src={`https:${dailyForecast.condition.icon}`} />
								<div className="">
									<p>ore {dailyForecast.last_updated.slice(-5)}</p>
									<p className="fw-bold">{dailyForecast.condition.text}</p>
								</div>
							</div>
						</Col>
						<Col xs={12} className="forecast__next-hours d-flex justify-content-between">
							{nextForecast.forecastday[0].hour
								.slice(parseInt(dailyForecast.last_updated.slice(-5).slice(0, 2)) + 1, parseInt(dailyForecast.last_updated.slice(-5).slice(0, 2)) + 6)
								.map((hour) => (
									<div className="d-flex flex-column align-items-center" key={hour.time_epoch}>
										<p className="mb-0">{hour.time.slice(-5)}</p>
										<Image src={`https:${hour.condition.icon}`} fluid />
									</div>
								))}
						</Col>
					</Row>
					<Row>
						<Col xs={12} className="forecast__next-days bg-white px-0">
							{nextForecast.forecastday.map((day, index) => {
								let htmlDay = null;
								if (index !== 0) {
									htmlDay = (
										<div className="forecast__next-day p-3" key={index} onClick={() => loadPage(day)}>
											<div>
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

											<div className="text-end">
												<p>{day.day.totalprecip_mm === 0 ? "Assenti" : day.day.totalprecip_mm + " mm"}</p>
												<p>{Math.round(day.day.maxwind_kph)} km/h</p>
											</div>
										</div>
									);
								}
								return htmlDay;
							})}
						</Col>
					</Row>
				</>
			)}
		</Container>
	);
};

export default DailyForecast;
