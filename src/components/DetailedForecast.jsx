import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";
import { Droplet, Speedometer, Cursor, CloudRain, Wind } from "react-bootstrap-icons";
import { convertDate } from "../utils/utils";

const DetailedForecast = () => {
	const selectedDay = useSelector((state) => state.selectedForecast.selectedForecast);
	const image = useSelector((state) => state.imageCity.imageURL);
	const { lastUpdate } = useParams();
	const { city } = useParams();
	const navigate = useNavigate();

	return (
		<Container className="forecast-detail" fluid>
			{selectedDay && image && (
				<>
					{/* IMMAGINE RIEPILOGATIVA */}
					<Row>
						<Col xs={12} className="forecast__img">
							<div className="forecast__txt">
								<div className="d-flex justify-content-center align-items-center me-3" onClick={() => navigate(-1)}>
									<ChevronLeft size={16} />
								</div>
								<p className="mb-0">{city}</p>
							</div>
							<Image src={image} fluid />
							{/* <LazyLoadImage src={image} /> */}
						</Col>
					</Row>

					{/* PREVISIONE GIORNALIERA TESTUALE */}
					<Row>
						<Col xs={12} className="d-flex flex-column px-0">
							<div className="forecast-detail__intro text-center py-4">
								{lastUpdate !== "0" ? (
									<p className="mb-2">OGGI</p>
								) : (
									<p className="mb-2 text-uppercase">
										{convertDate(selectedDay.date, 2).dayOfWeek} {convertDate(selectedDay.date, 2).dayOfMonth}
									</p>
								)}
								<p className="mb-2">{selectedDay.day.condition.text}</p>
								<p className="mb-0">
									Temp. tra {selectedDay.day.maxtemp_c}° e {selectedDay.day.mintemp_c}°
								</p>
							</div>
						</Col>
					</Row>

					{/* PREVISIONE GIORNALIERA DELLE PROSSIME ORE */}
					<Row>
						<Col className="forecast__next-hours d-flex flex-column align-items-stretch bg-white px-0">
							{lastUpdate === 0
								? selectedDay.hour.map((hour) => (
										<div className="forecast__next-hour p-3" key={hour.time_epoch}>
											<div className="forecast__top">
												<div>
													<p className="text-black fw-bold text-custom">{hour.time.slice(-5)}</p>
													<p>{hour.condition.text}</p>
												</div>

												<div>
													<Image src={`https:${hour.condition.icon}`} fluid />
												</div>

												<div className="px-2">
													<p className="text-black fw-bold text-custom">{hour.temp_c.toFixed()}°</p>
													<p>p. {hour.feelslike_c.toFixed()}°</p>
												</div>

												<div>
													<div className="d-flex align-items-center justify-content-end forecast__icon">
														<p>{hour.precip_mm === 0 ? "Assenti" : hour.precip_mm + " mm"}</p>
														<CloudRain />
													</div>
													<div className="d-flex align-items-center justify-content-end forecast__icon">
														<p>
															{Math.round(hour.wind_kph)} km/h {hour.wind_dir}
														</p>
														<Cursor />
													</div>
												</div>
											</div>

											<div className="forecast__bottom mt-3">
												<div>
													<div className="d-flex align-items-center justify-content-end forecast__icon">
														<p>{hour.pressure_mb} mb</p>
														<Speedometer />
													</div>

													<div className="d-flex align-items-center justify-content-end forecast__icon">
														<p>{hour.humidity}%</p>
														<Droplet />
													</div>
												</div>
												<div>
													<div className="d-flex align-items-center justify-content-end forecast__icon">
														<p>{Math.round(hour.gust_kph)} km/h</p>
														<Wind />
													</div>
													<div className="d-flex align-items-center justify-content-end forecast__icon">
														<p>{hour.uv}</p>
														<p className="ms-1">UV</p>
													</div>
												</div>
											</div>
										</div>
								  ))
								: selectedDay.hour.slice(lastUpdate, selectedDay.hour.length).map((hour) => (
										<div className="forecast__next-hour p-3" key={hour.time_epoch}>
											<div className="forecast__top">
												<div>
													<p className="text-black fw-bold text-custom">{hour.time.slice(-5)}</p>
													<p>{hour.condition.text}</p>
												</div>

												<div>
													<Image src={`https:${hour.condition.icon}`} fluid />
												</div>

												<div className="px-2">
													<p className="text-black fw-bold text-custom">{hour.temp_c.toFixed()}°</p>
													<p>p. {hour.feelslike_c.toFixed()}°</p>
												</div>

												<div>
													<div className="d-flex align-items-center justify-content-end forecast__icon">
														<p>{hour.precip_mm === 0 ? "Assenti" : hour.precip_mm + " mm"}</p>
														<CloudRain />
													</div>
													<div className="d-flex align-items-center justify-content-end forecast__icon">
														<p>
															{Math.round(hour.wind_kph)} km/h {hour.wind_dir}
														</p>
														<Cursor />
													</div>
												</div>
											</div>

											<div className="forecast__bottom mt-3">
												<div>
													<div className="d-flex align-items-center justify-content-end forecast__icon">
														<p>{hour.pressure_mb} mb</p>
														<Speedometer />
													</div>

													<div className="d-flex align-items-center justify-content-end forecast__icon">
														<p>{hour.humidity}%</p>
														<Droplet />
													</div>
												</div>
												<div>
													<div className="d-flex align-items-center justify-content-end forecast__icon">
														<p>{Math.round(hour.gust_kph)} km/h</p>
														<Wind />
													</div>
													<div className="d-flex align-items-center justify-content-end forecast__icon">
														<p>{hour.uv}</p>
														<p className="ms-1">UV</p>
													</div>
												</div>
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
