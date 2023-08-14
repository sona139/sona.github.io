const prevBtn = document.querySelector(".declare-prev-btn");
const nextBtn = document.querySelector(".declare-next-btn");
const declareGroup = document.querySelector(".declare-group");
const declareItems = document.querySelectorAll(".declare-item");
const groupItems = document.querySelectorAll(".group");

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
	declareItems[currentIndex].classList.add("hide");
	groupItems[currentIndex].classList.remove("current-group");
	currentIndex -= 1;
	declareItems[currentIndex].classList.remove("hide");
	groupItems[currentIndex].classList.add("current-group");
	declareGroup.style.transform = `translateX(calc(${1 - currentIndex}*100%/3))`;
	if (currentIndex === 0) prevBtn.classList.add("hide");
	else prevBtn.classList.remove("hide");
	if (currentIndex === 2) nextBtn.classList.add("hide");
	else nextBtn.classList.remove("hide");
});

nextBtn.addEventListener("click", () => {
	declareItems[currentIndex].classList.add("hide");
	groupItems[currentIndex].classList.remove("current-group");
	currentIndex += 1;
	declareItems[currentIndex].classList.remove("hide");
	groupItems[currentIndex].classList.add("current-group");
	declareGroup.style.transform = `translateX(calc((${
		1 - currentIndex
	})*100%/3))`;
	if (currentIndex === 2) nextBtn.classList.add("hide");
	else nextBtn.classList.remove("hide");
	if (currentIndex === 0) prevBtn.classList.add("hide");
	else prevBtn.classList.remove("hide");
});
