import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const DetailedForecast = () => {
	// const dailyForecast = useSelector((state) => state.nextForecast.content.current);
	// const nextForecast = useSelector((state) => state.nextForecast.content.forecast);
	const selectedDay = useSelector((state) => state.selectedDay.content);

	return (
		<Container className="forecast-detail">
			{/* {dailyForecast && nextForecast && ( */}
			<>
				{/* IMMAGINE RIEPILOGATIVA */}
				<Row>
					<Col xs={12} className="forecast__img">
						<Image src={`https:${selectedDay.day.condition.icon}`} fluid />
					</Col>
				</Row>

				{/* PREVISIONE GIORNALIERA TESTUALE */}
				<Row>
					<Col xs={12} className="d-flex flex-column px-0">
						{/* <div className="forecast-detail__day">
							<p>ore {dailyForecast.last_updated.slice(-5)}</p>
							<p className="fw-bold">{dailyForecast.condition.text}</p>
						</div> */}
						<div className="forecast-detail__intro text-center py-4">
							<p className="mb-2">{selectedDay.day.condition.text}</p>
							<p className="mb-0">
								Temp. tra {selectedDay.day.maxtemp_c}° e {selectedDay.day.mintemp_c}°
							</p>
						</div>
					</Col>
				</Row>

				{/* PREVISIONE GIORNALIERA DELLE PROSSIME ORE */}
				<Row>
					{/* NON CANCELLARE LA PARTE SOTTO CHE DEVE ESSERE IMPLEMENTATA CON UNA CONDIZIONE, INFATTI QUANDO VISUALIZZO OGGI DEVE TRALASCIARE LE PREVISIONI ORARIE GIÀ PASSATE */}
					{/* <Col xs={12} className="forecast__next-hours d-flex flex-column bg-white px-0">
						{selectedDay.hour.slice(parseInt(dailyForecast.last_updated.slice(-5).slice(0, 2)) + 1, nextForecast.forecastday[0].hour.length).map((hour) => (
							<div className="forecast__next-hour p-3">
								<div>
									<p className="text-black fw-bold">{hour.time.slice(-5)}</p>
									<p>{hour.condition.text}</p>
								</div>

								<div>
									<Image src={`https:${hour.condition.icon}`} fluid />
								</div>

								<div className="px-2">
									<p className="text-black">{hour.temp_c.toString().slice(0, 2)}°</p>
								</div>

								<div className="text-end">
									<p>{hour.precip_mm === 0 ? "Assenti" : hour.precip_mm + " mm"}</p>
									<p>{Math.round(hour.wind_kph)} km/h</p>
								</div>
							</div>
						))}
					</Col> */}
					<Col xs={12} className="forecast__next-hours d-flex flex-column bg-white px-0">
						{selectedDay.hour.map((hour) => (
							<div className="forecast__next-hour p-3">
								<div>
									<p className="text-black fw-bold">{hour.time.slice(-5)}</p>
									<p>{hour.condition.text}</p>
								</div>

								<div>
									<Image src={`https:${hour.condition.icon}`} fluid />
								</div>

								<div className="px-2">
									<p className="text-black">{hour.temp_c.toString().slice(0, 2)}°</p>
								</div>

								<div className="text-end">
									<p>{hour.precip_mm === 0 ? "Assenti" : hour.precip_mm + " mm"}</p>
									<p>{Math.round(hour.wind_kph)} km/h</p>
								</div>
							</div>
						))}
					</Col>
				</Row>
			</>
		</Container>
	);
};

export default DetailedForecast;
