const PRODUCT_ACTIVE_CLASS = "product-active";

const productImgMain = document.querySelector(".product-img-main > img");
const productImgs = document.querySelectorAll(".product-img > img");

productImgs.forEach((productImg) => {
	productImg.addEventListener("click", () => {
		productImgMain.src = productImg.src;

		productImgs.forEach((item) => {
			item !== productImg
				? item.parentElement.classList.remove(PRODUCT_ACTIVE_CLASS)
				: item.parentElement.classList.add(PRODUCT_ACTIVE_CLASS);
		});
	});
});
