// Product limited countdown

const countdownDay = document.querySelector(".countdown-day .countdown-number");
const countdownHour = document.querySelector(
	".countdown-hour .countdown-number"
);
const countdownMin = document.querySelector(".countdown-min .countdown-number");
const countdownSec = document.querySelector(".countdown-sec .countdown-number");

setInterval(() => {
	const day = +countdownDay.innerHTML;
	const hour = +countdownHour.innerHTML;
	const min = +countdownMin.innerHTML;
	const sec = +countdownSec.innerHTML;

	if (sec === 0) {
		if (min === 0) {
			if (hour === 0) {
				countdownDay.innerHTML = (day - 1 + "").padStart(2, "0");
				countdownHour.innerHTML = 24;
			} else {
				countdownHour.innerHTML = (hour - 1 + "").padStart(2, "0");
				countdownMin.innerHTML = 60;
			}
		} else {
			countdownMin.innerHTML = (min - 1 + "").padStart(2, "0");
			countdownSec.innerHTML = 60;
		}
	} else {
		countdownSec.innerHTML = (sec - 1 + "").padStart(2, "0");
	}
}, 1000);

// Product limited quanity
const productLimitedQuanity = document.querySelector(".product-limited-number");
const productDecBtn = document.querySelector(".product-limited-dec-btn");
const productIncBtn = document.querySelector(".product-limited-inc-btn");

productIncBtn.addEventListener("click", () => {
	const quanity = +productLimitedQuanity.innerHTML;
	productLimitedQuanity.innerHTML = quanity + 1;
});

productDecBtn.addEventListener("click", () => {
	const quanity = +productLimitedQuanity.innerHTML;
	quanity > 0 ? (productLimitedQuanity.innerHTML = quanity - 1) : undefined;
});
