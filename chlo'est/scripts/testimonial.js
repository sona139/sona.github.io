const prevBtn = document.querySelector(".testimonial-prev-btn");
const nextBtn = document.querySelector(".testimonial-next-btn");
const testimonialGroup = document.querySelector(".testimonial-group");
const testimonialItems = document.querySelectorAll(".testimonial-item");
console.log(prevBtn, nextBtn);

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
	testimonialItems[currentIndex].classList.add("hide");
	currentIndex -= 1;
	testimonialItems[currentIndex].classList.remove("hide");
	testimonialGroup.style.transform = `translateX(calc(${
		1 - currentIndex
	}*100%/3))`;
	if (currentIndex === 0) prevBtn.classList.add("hide");
	else prevBtn.classList.remove("hide");
	if (currentIndex === 2) nextBtn.classList.add("hide");
	else nextBtn.classList.remove("hide");
});

nextBtn.addEventListener("click", () => {
	testimonialItems[currentIndex].classList.add("hide");
	currentIndex += 1;
	testimonialItems[currentIndex].classList.remove("hide");
	testimonialGroup.style.transform = `translateX(calc((${
		1 - currentIndex
	})*100%/3))`;
	if (currentIndex === 2) nextBtn.classList.add("hide");
	else nextBtn.classList.remove("hide");
	if (currentIndex === 0) prevBtn.classList.add("hide");
	else prevBtn.classList.remove("hide");
});
