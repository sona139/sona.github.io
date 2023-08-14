const ARAVAR_URL = "./assets/image/";
const AVATAR_FILES = ["ava1.png", "ava2.png", "ava3.png"];

const testimonialPrev = document.querySelector(".testimonial-prev-btn");
const testimonialNext = document.querySelector(".testimonial-next-btn");

const avatarImg = document.querySelector(".testimonial-avatar-img > img");

let currentAvatarId = 0;

testimonialPrev?.addEventListener("click", () => {
	currentAvatarId = (currentAvatarId + 2) % 3;
	avatarImg.src = ARAVAR_URL + AVATAR_FILES[currentAvatarId];
});

testimonialNext?.addEventListener("click", () => {
	currentAvatarId = (currentAvatarId + 1) % 3;
	avatarImg.src = ARAVAR_URL + AVATAR_FILES[currentAvatarId];
});
