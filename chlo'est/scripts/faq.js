const faqs = document.querySelectorAll(".faq-question");

faqs.forEach((faq) => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("faq-active");
	});

	console.log(1);
});
