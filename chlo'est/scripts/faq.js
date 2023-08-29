const faqs = document.querySelectorAll(".faq-question");

faqs.forEach((faq) => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("faq-active");

		faqs.forEach((question) => {
			faq !== question ? question.classList.remove("faq-active") : undefined;
		});
	});
});
