/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";
import { convertDate } from "../utils/utils";
import { selectedForecastAction } from "../store/selectedForecast/selectedForecastActions";

const DailyForecast = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const city = useSelector((state) => state.city.city);
	const today = useSelector((state) => state.forecasts.forecasts.current);
	const image = useSelector((state) => state.imageCity.imageURL);
	const nextForecast = useSelector((state) => state.forecasts.forecasts.forecast);

	const loadTodayPage = (day) => {
		dispatch(selectedForecastAction(day));
		navigate(`/city/${city.name}/detail/${parseInt(today.last_updated.slice(-5).slice(0, 2)) + 1}`);
	};

	const loadNextDayPage = (day) => {
		dispatch(selectedForecastAction(day));
		navigate(`/city/${city.name}/detail/${0}`);
	};

	return (
		<Container className="forecast-intro" fluid>
			{today && nextForecast && image && (
				<>
					{/* IMMAGINE RIEPILOGATIVA */}
					<Row>
						<Col xs={12} className="forecast__img p-0">
							<div className="forecast__txt">
								<div className="d-flex justify-content-center align-items-center me-3" onClick={() => navigate(-1)}>
									<ChevronLeft size={16} />
								</div>
								<p className="mb-0">{city.name}</p>
							</div>

							<Image src={image} fluid />
						</Col>
					</Row>

					{/* PREVISIONE ATTUALE E DELLE PROSSIME ORE */}
					<Row className="py-3" onClick={() => loadTodayPage(nextForecast.forecastday[0])}>
						<Col xs={12} className="forecast__info-daily d-flex flex-column ">
							<div className="forecast__now d-flex justify-content-center align-items-center">
								<p className="">{today.temp_c}°</p>
								<Image className="px-3" src={`https:${today.condition.icon}`} />
								<div className="">
									<p>ore {today.last_updated.slice(-5)}</p>
									<p className="fw-bold">{today.condition.text}</p>
								</div>
							</div>
						</Col>
						<Col xs={12} className="forecast__next-hours d-flex justify-content-between">
							{nextForecast.forecastday[0].hour.slice(parseInt(today.last_updated.slice(-5).slice(0, 2)) + 1, parseInt(today.last_updated.slice(-5).slice(0, 2)) + 6).map((hour) => (
								<div className="d-flex flex-column align-items-center" key={hour.time_epoch}>
									<p className="mb-0">{hour.time.slice(-5)}</p>
									<Image src={`https:${hour.condition.icon}`} fluid />
								</div>
							))}
						</Col>
					</Row>

					{/* PREVISIONE DEI PROSSIMI GIORNI */}
					<Row>
						<Col xs={12} className="forecast__next-days bg-white px-0">
							{nextForecast.forecastday.map((day, index) =>
								index !== 0 ? (
									<div className="forecast__next-day p-3" key={index} onClick={() => loadNextDayPage(day)}>
										<div>
											<p className="fw-bold text-capitalize">{convertDate(day.date, 0)}</p>
											<p>
												<span>{convertDate(day.date, 1).dayOfMonth} </span>
												<span className="text-uppercase">{convertDate(day.date, 1).month.substring(0, 3)}</span>
											</p>
										</div>

										<div>
											<Image src={`https:${day.day.condition.icon}`} fluid />
										</div>

										<div className="px-2">
											{/* <p>{day.day.maxtemp_c.toString().slice(0, 2)}°</p> */}
											{/* <p>{day.day.mintemp_c.toString().slice(0, 2)}°</p> */}
											<p>{day.day.maxtemp_c.toFixed()}°</p>
											<p>{day.day.mintemp_c.toFixed()}°</p>
										</div>

										<div className="text-end">
											<p>{day.day.totalprecip_mm === 0 ? "Assenti" : day.day.totalprecip_mm + " mm"}</p>
											<p>{Math.round(day.day.maxwind_kph)} km/h</p>
										</div>
									</div>
								) : null
							)}
						</Col>
					</Row>
				</>
			)}
		</Container>
	);
};

export default DailyForecast;
