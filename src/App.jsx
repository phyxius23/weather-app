import { BrowserRouter, Route, Routes } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Home from "./components/Home";
import Search from "./components/Search";
import DailyForecast from "./components/DailyForecast";
import DetailedForecast from "./components/DetailedForecast";

function App() {
	return isMobile ? (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/city/:city" element={<DailyForecast />} />
				<Route path="/city/:city/detail/:lastUpdate" element={<DetailedForecast />} />
			</Routes>
		</BrowserRouter>
	) : (
		<p>App visualizzabile solo su mobile</p>
	);
}

export default App;
