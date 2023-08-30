const faqs = document.querySelectorAll(".faq-question");

faqs.forEach((faq) => {
	faq.addEventListener("click", () => {
		faqs.forEach((question) => {
			faq !== question ? question.classList.remove("faq-active") : undefined;
		});

		setTimeout(() => {
			faq.classList.toggle("faq-active");
		}, 300);
	});
});
