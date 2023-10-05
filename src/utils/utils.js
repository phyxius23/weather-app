export const baseEndpoint = process.env.REACT_APP_WEATHER_URL;
export const key = process.env.REACT_APP_WEATHER_KEY;
export const accessKeyUnsplash = process.env.REACT_APP_UNSPLASH_ACCESSKEY;

const days = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
const month = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

export const convertDate = (date, tester) => {
	const setDate = new Date(date);

	switch (tester) {
		case 0:
			return days[setDate.getDay()];
		case 1:
			return { dayOfMonth: setDate.getDate().toString().padStart(2, "0"), month: month[setDate.getMonth()] };
		case 2:
			return { dayOfWeek: days[setDate.getDay()], dayOfMonth: setDate.getDate().toString().padStart(2, "0") };
		default:
			return;
	}
};
