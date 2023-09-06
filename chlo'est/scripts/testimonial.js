const testimonial = document.querySelector("#testimonial");
const prevBtn = document.querySelector(".testimonial-prev-btn");
const nextBtn = document.querySelector(".testimonial-next-btn");
const testimonialGroup = document.querySelector(".testimonial-group");
const testimonialItems = document.querySelectorAll(".testimonial-item");

let currentIndex = 0;

const slideLeft = () => {
	testimonialItems[currentIndex].classList.add("hide");
	currentIndex -= 1;
	testimonialItems[currentIndex].classList.remove("hide");
	testimonialGroup.style.transform = `translateX(calc((${
		1 - currentIndex
	})*100%/3))`;

	if (currentIndex === 0) prevBtn.classList.add("hide");
	else prevBtn.classList.remove("hide");
	if (currentIndex === 2) nextBtn.classList.add("hide");
	else nextBtn.classList.remove("hide");
};

const slideRight = () => {
	testimonialItems[currentIndex].classList.add("hide");
	currentIndex += 1;
	testimonialItems[currentIndex].classList.remove("hide");
	testimonialGroup.style.transform = `translateX(calc(${
		1 - currentIndex
	}*100%/3))`;

	if (currentIndex === 2) nextBtn.classList.add("hide");
	else nextBtn.classList.remove("hide");
	if (currentIndex === 0) prevBtn.classList.add("hide");
	else prevBtn.classList.remove("hide");
};

testimonial.addEventListener("click", (e) => {
	if (document.body.clientWidth > 1200) return;
	if (e.clientX >= document.body.clientWidth / 2 && currentIndex < 2)
		slideRight();
	else if (e.clientX < document.body.clientWidth / 2 && currentIndex > 0)
		slideLeft();
});

prevBtn.addEventListener("click", () => {
	slideLeft();
});

nextBtn.addEventListener("click", () => {
	slideRight();
});
