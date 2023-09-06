import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DetailedForecast = () => {
	const selectedDay = useSelector((state) => state.selectedDay.content);
	const image = useSelector((state) => state.imageCity.content);
	const { lastUpdate } = useParams();
	const { city } = useParams();
	const navigate = useNavigate();

	const convertDay = (date) => {
		const setDate = new Date(date);
		const options = { weekday: "long", year: "numeric", month: "short", day: "2-digit" };
		const newDate = setDate.toLocaleDateString("it-IT", options);

		return newDate.slice(0, newDate.length - 9).toUpperCase();
	};

	return (
		<Container className="forecast-detail">
			{selectedDay && image && (
				<>
					{/* BUTTON PER TORNARE ALLA PAGINA PRECEDENTE E NOME CITTÀ */}
					{/* <Row>
						<Col></Col>
					</Row> */}
					{/* <Button onClick={() => navigate(-1)}>Previous Page</Button> */}
					{/* IMMAGINE RIEPILOGATIVA */}
					<Row>
						<Col xs={12} className="forecast__img">
							<div className="forecast__txt">
								<div className="d-flex justify-content-center align-items-center me-3" onClick={() => navigate(-1)}>
									<ChevronLeft size={16} />
								</div>
								<p className="mb-0">{city}</p>
							</div>
							{/* <Image src={image} fluid /> */}
							<LazyLoadImage src={image} />
						</Col>
					</Row>

					{/* PREVISIONE GIORNALIERA TESTUALE */}
					<Row>
						<Col xs={12} className="d-flex flex-column px-0">
							<div className="forecast-detail__intro text-center py-4">
								{lastUpdate !== "0" ? <p className="mb-2">OGGI</p> : <p className="mb-2">{convertDay(selectedDay.date)}</p>}
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
						<Col className="forecast__next-hours d-flex flex-column align-items-stretch bg-white px-0">
							{lastUpdate === 0
								? selectedDay.hour.map((hour) => (
										<div className="forecast__next-hour p-3" key={hour.time_epoch}>
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
								  ))
								: selectedDay.hour.slice(lastUpdate, selectedDay.hour.length).map((hour) => (
										<div className="forecast__next-hour p-3" key={hour.time_epoch}>
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
			)}
		</Container>
	);
};

export default DetailedForecast;
